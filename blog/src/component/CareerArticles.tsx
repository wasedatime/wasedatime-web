import React from "react";
import axios from "axios";
import ReactMarkdown from "react-markdown";
import styled from "styled-components";
import Header from "@bit/wasedatime.core.ts.ui.header";
import { withTranslation, WithTranslation } from "react-i18next";

const StyledMarkdown = styled(ReactMarkdown)`
    * {
      font-family: ZCOOL XiaoWei, Segoe UI, Yu Gothic Medium, Lato !important;
      padding: 0px;
    }
    & p {
      font-size: 1.8rem;
      margin-top: 0;
      margin-bottom: 0;
      padding-bottom: 2px;
    }
    & ul {
      list-style: square;
      margin-top: 10px;
      font-size:  1rem;
    }
    & li {
      padding-bottom: 2px;
    }
    & h1 {
      font-size: 1.6rem;
    }
    & h2 {
      display: none;
    }
    & img{
      display: block;
      margin-left: auto;
      margin-right: auto;
      margin-top: 20px;
      margin-bottom: 20px;
    }
  }
`;

const ArticleWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const HeaderWrapper = styled.div`
  flex: 0 0 67px;
  h2 {
    font-size: 32px;
    padding-bottom: 90px;
  }
`;

const StyledDiv = styled.div`
  margin: 1em 15%;
`;

interface Props extends WithTranslation {
  match: {
    params: {
      title: string;
    };
  };
}

interface State {
  content: any;
  urlFile: string;
}

class CareerArticles extends React.Component<Props, State> {
  constructor(props) {
    super(props);
    const { params } = this.props.match;
    this.state = {
      content: null,
      urlFile: `${process.env.REACT_APP_BLOG_S3_BASE_URL}/${params.title}/${params.title}.md`,
    };
  }
  componentDidMount() {
    axios
      .get(this.state.urlFile)
      .then((response) => {
        console.log("Success in fetching the file from " + this.state.urlFile);
        this.setState({ content: response.data });
      })
      .catch((error) => {
        console.error("Error in fetching the file from " + this.state.urlFile);
      });
  }
  render() {
    const { urlFile, content } = this.state;
    const { t, i18n } = this.props;

    return (
      <ArticleWrapper>
        <HeaderWrapper>
          <Header
            title={t("navigation.feeds")}
            onInputChange={() => {}}
            placeholder={t("search placeholder")}
            inputText={""}
            disabled={true}
            isBlur={false}
            changeLang={(lng) => i18n.changeLanguage(lng)}
          />
        </HeaderWrapper>
        <StyledDiv>
          {/* <h3> Fetched from: </h3> {urlFile}
          <hr /> */}
          <div className="markdown-body">
            <StyledMarkdown source={content} />
          </div>
        </StyledDiv>
      </ArticleWrapper>
    );
  }
}

export default withTranslation("translation")(CareerArticles);
