import React from "react";
import { Switch, Route, Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import { Wrapper } from "../../styled-components/Wrapper";

import CareerList from "./CareerList";
import CareerArticles from "./CareerArticles";

const Career = () => {
  return (
    <Wrapper>
      <Helmet>
        <title>WasedaTime - Career</title>
        <meta
          name="description"
          content="Syllabus Searching at Waseda University."
        />
        <meta property="og:title" content="WasedaTime - Career" />
        <meta
          property="og:description"
          content="Career Finding at Waseda University."
        />
        <meta property="og:site_name" content="WasedaTime - Career" />
      </Helmet>
      <div>
        <Link to="/career">
          <button className="ui button">Jobs</button>
        </Link>
        <Link to="/career/articles">
          <button className="ui button">Articles</button>
        </Link>
        <Switch>
          <Route exact path="/career" component={CareerList} />
          <Route exact path="/career/articles" component={CareerArticles} />
        </Switch>
      </div>
    </Wrapper>
  );
};

export default Career;
