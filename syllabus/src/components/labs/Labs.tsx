import React, { useState } from "react";
import { Helmet } from "react-helmet";
import { WithTranslation, withTranslation } from "react-i18next";
import styled from "styled-components";
import Header from "@bit/wasedatime.core.ts.ui.header";
import { media } from "@bit/wasedatime.core.ts.utils.responsive-utils";
import SchoolMajorSelector from "./SchoolMajorSelector";
import Lab from "./Lab";
import SyllabusTabs from "../SyllabusTabs";
import reviews from "../../assets/lab_reviews_by_school_major.json";
import debounce from "lodash/debounce";

const LabsOuterWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const HeaderWrapper = styled.div`
  flex: 67px;
`;

const LabsWrapper = styled.div`
  height: calc(100vh - 96px);
  ${media.tablet`
    height: calc(100vh - 156px);
  `}
  overflow-y: auto;
`;

const LabsList = styled.div`
  padding: 0px 3em;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 5%;
  justify-content: center;
`;

interface Props extends WithTranslation {
  path: string;
}

interface State {
  school: string;
  major: string;
  inputText: string;
  searchTerm: string;
}

class Labs extends React.Component<Props, State> {
  constructor(props) {
    super(props);

    this.state = {
      school: "FSE",
      major: "",
      inputText: "",
      searchTerm: ""
    };
  }

  updateSearchTerm = () => {
    this.setState((prevState, props) => {
      return {
        searchTerm: prevState.inputText,
      };
    });
  };

  handleInputChange = (inputText) => {
    this.setState(
      {
        inputText,
      },
      debounce(this.updateSearchTerm, 500, {
        leading: false,
      })
    );
  };

  render () {
    const { t, i18n } = this.props;
    const { school, major, inputText, searchTerm } = this.state;
    return (
      <LabsOuterWrapper className="theme-default">
        <Helmet>
          <title>WasedaTime - Syllabus Search</title>
          <meta
            name="description"
            content="Syllabus Searching at Waseda University."
          />
          <meta property="og:title" content="WasedaTime - Syllabus Search" />
          <meta
            property="og:description"
            content="Syllabus Searching at Waseda University."
          />
          <meta
            property="og:site_name"
            content="WasedaTime - Syllabus Search"
          />
        </Helmet>

        <HeaderWrapper>
          <Header
            title={t("labs.title")}
            onInputChange={this.handleInputChange}
            placeholder={t("labs.searchBarPlaceholder")}
            inputText={inputText}
            disabled={false}
            isBlur={false}
            changeLang={(lng) => i18n.changeLanguage(lng)}
          />
        </HeaderWrapper>

        <SyllabusTabs />

        <LabsWrapper>
          <SchoolMajorSelector reviews={reviews} selectedSchool={school} selectedMajor={major} setSchool={s => this.setState({ school: s })} setMajor={m => this.setState({ major: m })} />
          <LabsList>
            {school && major && reviews[school][major]?.map(lab => (!searchTerm || lab.lab.includes(searchTerm)) && <Lab name={lab.lab} reviews={lab.reviews} school={school} />)}
          </LabsList>
        </LabsWrapper>

      </LabsOuterWrapper>
    );
  }
}

export default withTranslation("translation")(Labs);