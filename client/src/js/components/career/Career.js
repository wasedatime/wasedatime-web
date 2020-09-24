import React from "react";
import { Switch, Route, Link, Redirect } from "react-router-dom";
import { Helmet } from "react-helmet";
import { Wrapper } from "../../styled-components/Wrapper";
import { withNamespaces } from "react-i18next";

import CareerList from "./CareerInternList";
import CareerArticles from "./CareerArticles";

const Career = ({ t }) => {
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
        <Link to="/career/intern">
          <button className="ui button">{t("career.Intern")}</button>
        </Link>
        <Link to="/career/articles">
          <button className="ui button">{t("career.Articles")}</button>
        </Link>
        <Switch>
          <Route
            exact
            path="/career"
            render={() => <Redirect to="/career/intern" />}
          />
          <Route exact path="/career/intern" component={CareerList} />
          <Route exact path="/career/articles" component={CareerArticles} />
        </Switch>
      </div>
    </Wrapper>
  );
};

export default withNamespaces("translation")(Career);
