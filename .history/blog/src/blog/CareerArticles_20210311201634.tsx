import React from "react";
import axios from "axios";
import ReactMarkdown from "react-markdown";
import styled from "styled-components";

const StyledMarkdown = styled(ReactMarkdown)`
    @import url('https://fonts.googleapis.com/css2?family=ZCOOL+XiaoWei&display=swap');
    * {
      font-family: 'ZCOOL XiaoWei', serif !important;
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
      margin-top: 50px;
      margin-bottom: 50px;
    }
    }
   `;

const StyledDiv = styled.div`
    margin-left: 15%;
    margin-right: 15%;
`;

interface Props {D
  match: {
    params: {
      title: string;
    };
  };
}

interface State {
  content: any;
  urlFile: string;
  env: string;
}

class CareerArticles extends React.Component<Props, State> {
  constructor(props) {
    super(props);
    const { params } = this.props.match;
    this.state = {
      content: null,
      urlFile: `https://wasedatime-feeds.s3-ap-northeast-1.amazonaws.com/${params.title}/${params.title}.md`,
      env: process.env.REACT_APP_API_BASE_URL
    };
  }
  componentDidMount() {
    axios
      .get(this.state.urlFile)
      .then((response) => {
        console.log("Success in fetching the file from " + this.state.urlFile + this.state.env);
        this.setState({ content: response.data });
      })
      .catch((error) => {
        console.error("Error in fetching the file from " + this.state.urlFile);
      });
  }
  render() {
    const { urlFile, content } = this.state;

    return (
      <StyledDiv>
        {/* <h3> Fetched from: </h3> {urlFile}
        <hr /> */}
        <div className="markdown-body">
          <StyledMarkdown source={content} />
        </div>
      </StyledDiv>
    );
  }
}

export default CareerArticles;
