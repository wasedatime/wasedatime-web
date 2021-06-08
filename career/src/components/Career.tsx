import React from "react";
import styled from "styled-components";
import { Switch, Route, Link, Redirect } from "react-router-dom";
import { Wrapper } from "@bit/wasedatime.core.ts.styles.wrapper";
import { WithTranslation, withTranslation } from "react-i18next";
import Header from "@bit/wasedatime.core.ts.ui.header";

import Intern from "./Intern";
import Arbeit from "./Arbeit";
import Seminar from "./Seminar";

const HeaderWrapper = styled.div`
  flex: 0 0 67px;
`;

const Career = ({ t, i18n }: WithTranslation) => {
  return (
    <Wrapper>
      <HeaderWrapper>
        <Header
          title={t("career.title")}
          onInputChange={() => {}}
          placeholder={t("career.search placeholder")}
          inputText={""}
          disabled={true}
          isBlur={false}
          changeLang={(lng) => i18n.changeLanguage(lng)}
        />
      </HeaderWrapper>
      <div className="career-container">
        <Link to="/career/intern">
          <button className="ui button">{t("career.Intern")}</button>
        </Link>
        <Link to="/career/arbeit">
          <button className="ui button">{t("career.Arbeit")}</button>
        </Link>
        <Link to="/career/seminar">
          <button className="ui button">{t("career.Seminar")}</button>
        </Link>
        <Switch>
          <Route
            exact
            path="/career"
            render={() => <Redirect to="/career/intern" />}
          />
          <Route exact path="/career/intern" component={Intern} />
          <Route exact path="/career/arbeit" component={Arbeit} />
          <Route exact path="/career/seminar" component={Seminar} />
        </Switch>
      </div>
    </Wrapper>
  );
};

export default withTranslation("translation")(Career);
