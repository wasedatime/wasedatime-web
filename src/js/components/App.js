import React from "react";
// import { Auth } from "aws-amplify";
import { Redirect, Route, Switch, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import Alert from "react-s-alert";
import styled, { ThemeProvider } from "styled-components";
import { withNamespaces } from "react-i18next";

import { normalTheme } from "../styled-components/theme";
import "react-s-alert/dist/s-alert-default.css";
import "../../styles/s-alert-custom.css";
import "react-s-alert/dist/s-alert-css-effects/jelly.css";
import "semantic-ui-css/semantic.min.css";

import Header from "./Header";
import About from "./About";
import InitialDialog from "./welcome/InitialDialog";
import TimetableContainer from "../containers/timetable/TimetableContainer";
import Syllabus from "./syllabus/Syllabus";
import CourseInfo from "./courseInfo/CourseInfo";
import RedirectPage from "./user/RedirectPage";
// import RoomFinder from "./RoomFinder";
import JoinUs from "./JoinUs";
import FooterContainer from "../containers/FooterContainer";
import Bus from "./Bus";
import Career from "./career/Career";
import CoronaInfo from "./CoronaInfo";
import NotFound from "./NotFound";
import { getUserIsFirstTimeAccess } from "../reducers/user";

const Wrapper = styled("div")`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  padding-top: ${(props) => props.theme.headerHeight};
`;

const StyledMain = styled("main")`
  display: flex;
  flex-direction: column;
  flex: 1 0 auto;
  width: 100%;
  min-height: calc(100vh - ${(props) => props.theme.headerHeight});
`;

const App = ({ isFirstTimeAccess, isAuthenticated, t }) => {
  window.addEventListener("storage", (e) => {
    if (e.key === "wasedatime-2020-state-ac") {
      Alert.warning(
        <React.Fragment>
          {t("app.courseChange")}
          <a
            href={"/"}
            onClick={(e) => {
              e.preventDefault();
              window.location.reload(true);
            }}
          >
            {t("app.RefreshLink")}
          </a>
        </React.Fragment>,
        {
          timeout: "none",
          position: "bottom",
          effect: "jelly",
        }
      );
    }
  });
  return (
    <ThemeProvider theme={normalTheme}>
      <Wrapper>
        <Header />
        <StyledMain>
          {isFirstTimeAccess ? (
            <Switch>
              <Route exact path="/welcome" component={InitialDialog} />
              <Route render={() => <Redirect to="/welcome" />} />
            </Switch>
          ) : (
            <Switch>
              <Route
                exact
                path="/"
                render={() => <Redirect to="/timetable" />}
              />
              <Route
                exact
                path="/index.html"
                render={() => <Redirect to="/timetable" />}
              />
              <Route exact path="/about" component={About} />
              <Route exact path="/timetable" component={TimetableContainer} />
              <Route exact path="/syllabus" component={Syllabus} />
              {/* <Route exact path="/roomfinder" component={RoomFinder} /> */}
              <Route exact path="/joinus" component={JoinUs} />
              <Route exact path="/bus" component={Bus} />
              <Route path="/career" component={Career} />
              <Route exact path="/corona-info" component={CoronaInfo} />
              <Route exact path="/courseInfo" component={CourseInfo} />
              <Route exact path="/verify" component={RedirectPage} />
              <Route
                exact
                path="/privacy-policy"
                render={() => {
                  window.location.href = "/privacy-policy.html";
                }}
              />
              <Route component={NotFound} />
            </Switch>
          )}
        </StyledMain>
        <FooterContainer />
        <Alert stack={{ limit: 1 }} timeout={3000} />
      </Wrapper>
    </ThemeProvider>
  );
};

const mapStateToProps = (state) => {
  return {
    isFirstTimeAccess: getUserIsFirstTimeAccess(state),
  };
};

export default withNamespaces("translation")(
  withRouter(connect(mapStateToProps, null)(App))
);
