import React, { useState } from "react";
import { Helmet } from "react-helmet";
import { WithTranslation, withTranslation } from "react-i18next";
import MediaQuery from "react-responsive";
import styled from "styled-components";
import Header from "@bit/wasedatime.core.ts.ui.header";
import { media, sizes } from "@bit/wasedatime.core.ts.utils.responsive-utils";
import SchoolMajorSelector from "./SchoolMajorSelector";
import Lab from "./Lab";
import SyllabusTabs from "../SyllabusTabs";
import reviews from "../../assets/lab_reviews_by_school_major.json";
import debounce from "lodash/debounce";
import FilterButton from "../syllabus/FilterButton";
import Modal from "@bit/wasedatime.core.ts.ui.modal";
import Message from "semantic-ui-react/dist/commonjs/collections/Message";

const LabsOuterWrapper = styled.div`
  display: flex;
  flex-direction: column;
  ${media.tablet`
    height: calc(100vh - 60px);
    overflow-y: hidden;
  `}
`;

const HeaderWrapper = styled.div`
  flex: 67px;
`;

const LabsWrapper = styled.div`
  height: calc(100vh - 96px);
  padding: 1em 0px;
  ${media.tablet`
    height: calc(100vh - 156px);
  `}
  overflow-y: hidden;
  display: flex;
  flex-direction: row;
`;

const MajorHeader = styled.h3`
  width: 80%;
  font-size: 3rem;
  ${media.tablet`
    width: 95%;
    font-size: 2rem;
  `}
  padding-bottom: 10px;
  text-align: center;
  border-bottom: 2px solid ${props => {
    return props.school === "FSE"
      ? "rgba(190,106,20,0.5)"
      : props.school === "CSE"
        ? "rgba(105,140,45,0.5)"
        : "rgba(50,98,149,0.5)";
  }};
`;

const FilterWrapper = styled.div`
  flex: 20em;
  padding: 0px 2em 1em 1em;

  height: calc(100vh - 96px);
  ${media.tablet`
    height: calc(100vh - 156px);
  `}
  overflow-y: auto;
  ::-webkit-scrollbar {
    width: 0;
    // background: transparent;
  }
`;

const ShorterFilterWrapper = styled.div`
  flex: 15em;
  padding: 0px 2em 0px 1em;
`;

const LabsList = styled.div`
  flex: calc(100% - 20em);
  padding-left: 2em;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 4%;
  justify-content: center;
  align-items: flex-start;
  align-content:flex-start;
  ${media.tablet`padding: 0px 2em;`}

  height: calc(100vh - 96px);
  ${media.tablet`
    height: calc(100vh - 156px);
    padding-bottom: 60px;
  `}

  overflow-y: auto;
`;

const modalStyle = {
  overlay: {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: "401",
  },
  content: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: "#fff",
    overflowY: "hidden",
    outline: "none",
    fontSize: "16px",
    padding: 0,
  },
};

interface Props extends WithTranslation {
  path: string;
}

interface State {
  school: string;
  major: string;
  inputText: string;
  searchTerm: string;
  isModalOpen: boolean;
}

class Labs extends React.Component<Props, State> {
  constructor(props) {
    super(props);

    this.state = {
      school: "FSE",
      major: "Computer Science and Engineering",
      inputText: "",
      searchTerm: "",
      isModalOpen: false
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

  handleToggleModal = () => {
    this.setState((prevState) => ({ isModalOpen: !prevState.isModalOpen }));
  }

  render () {
    const { t, i18n } = this.props;
    const { school, major, inputText, searchTerm } = this.state;
    return (
      <LabsOuterWrapper className="theme-default">
        <Helmet>
          <title>WasedaTime - Lab Reviews</title>
          <meta
            name="description"
            content="Lab Reviews at Waseda University."
          />
          <meta property="og:title" content="WasedaTime - Lab Reviews" />
          <meta
            property="og:description"
            content="Lab Reviews at Waseda University."
          />
          <meta
            property="og:site_name"
            content="WasedaTime - Lab Reviews"
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
          <LabsList>
            {major && <MajorHeader school={school}>{t("labs.major." + major)}</MajorHeader>}
            {
              school && major && reviews[school][major]
                ? (
                  reviews[school][major].length > 0
                    ? reviews[school][major].map(lab => (!searchTerm || lab.lab.includes(searchTerm)) && <Lab name={lab.lab} reviews={lab.reviews} school={school} />)
                    : (<Message warning size="tiny" style={{ margin: "1em" }}>
                    <h5>{t("labs.noReviewWarning")}</h5>
                  </Message>)
                  )
                : (<Message warning size="tiny" style={{ margin: "1em" }}>
                <h5>{t("labs.filterHint")}</h5>
              </Message>)
            }
          </LabsList>
          
          <MediaQuery minWidth={sizes.desktop}>
            {
              matches => 
                matches && <FilterWrapper>
                  <SchoolMajorSelector reviews={reviews} selectedSchool={school} setSchool={s => this.setState({ school: s })} setMajor={m => this.setState({ major: m })} closeModal={() => this.setState({ isModalOpen: false })} />
                </FilterWrapper>
            }
          </MediaQuery>
          
          <MediaQuery minWidth={sizes.tablet + 1} maxWidth={sizes.desktop - 1}>
            {
              matches => 
                matches && <ShorterFilterWrapper>
                  <SchoolMajorSelector reviews={reviews} selectedSchool={school} setSchool={s => this.setState({ school: s })} setMajor={m => this.setState({ major: m })} closeModal={() => this.setState({ isModalOpen: false })} />
                </ShorterFilterWrapper>
            }
          </MediaQuery>

          <MediaQuery maxWidth={sizes.tablet}>
            {(matches) =>
              matches && <div>
                <FilterButton
                  isModalOpen={this.state.isModalOpen}
                  handleToggleModal={this.handleToggleModal}
                />
                <Modal isOpen={this.state.isModalOpen} style={modalStyle}>
                  <SchoolMajorSelector reviews={reviews} selectedSchool={school} setSchool={s => this.setState({ school: s })} setMajor={m => this.setState({ major: m })} closeModal={() => this.setState({ isModalOpen: false })} />
                </Modal>
              </div>
            }
          </MediaQuery>
        </LabsWrapper>

      </LabsOuterWrapper>
    );
  }
}

export default withTranslation("translation")(Labs);