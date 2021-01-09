import React from "react";
import { Auth, Hub } from "aws-amplify";
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

import Sidebar from "./Sidebar";
import MobileHeader from "./MobileHeader";
import SignInModal from "./user/SignInModal";
import About from "./About";
import InitialDialog from "./welcome/InitialDialog";
import TimetableContainer from "../containers/timetable/TimetableContainer";
import Syllabus from "./syllabus/Syllabus";
import CourseInfo from "./courseInfo/CourseInfo";
import RedirectPage from "./user/RedirectPage";
// import RoomFinder from "./RoomFinder";
import JoinUs from "./JoinUs";
// import FooterContainer from "../containers/FooterContainer";
import Bus from "./Bus";
import Career from "./career/Career";
import CoronaInfo from "./CoronaInfo";
import NotFound from "./NotFound";
import { getUserInfo, getUserIsFirstTimeAccess } from "../reducers/user";
import { setUserInfo, clearUserInfo } from "../actions/user";

import { media, sizes } from "../styled-components/utils";
import MediaQuery from "react-responsive";

const Wrapper = styled("div")`
  display: grid;
  grid-template-columns: 65px auto;
  grid-template-rows: 0px auto;
  grid-column-gap: 0px;
  grid-row-gap: 0px;
  min-height: 100vh;
`;

const StyledMain = styled("main")`
  display: flex;
  flex-direction: column;
  flex: 1 0 auto;
  grid-area: 2 / 2 / 3 / 3;
  ${media.tablet`grid-area: 1 / 1 / 4 / 4;`}
  width: 100%;
  min-height: calc(100vh - ${(props) => props.theme.headerHeight});
`;

class App extends React.Component {
  state = {
    isSignInModalOpen: false,
    isUserSessionExpired: false,
  };

  timeout(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  signIn() {
    try {
      Auth.federatedSignIn({
        provider: "Google",
        customState: window.location.pathname + window.location.search,
      });
    } catch (e) {
      console.log(e);
    }
  }

  signOut() {
    Auth.signOut();
  }

  toggleSignInModal = () => {
    this.setState((prevState, props) => ({
      isSignInModalOpen: !prevState.isSignInModalOpen,
    }));
  };

  letUserSignInAfterExpired = () => {
    this.setState({ isUserSessionExpired: true });
    this.props.clearUserInfo();
    this.setState({ isSignInModalOpen: true });
  };

  async componentDidMount() {
    const { userInfo, setUserInfo, clearUserInfo, history, t } = this.props;

    window.addEventListener("storage", (e) => {
      console.log(e);
      if (e.key === "wasedatime-2020-state-ac" && e.oldValue) {
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

    if (userInfo && userInfo.idToken.payload.exp <= Date.now() / 1000)
      this.props.clearUserInfo();

    Hub.listen("auth", ({ payload: { event, data } }) => {
      console.log(event);
      switch (event) {
        case "signIn":
          setUserInfo(data);
          break;
        case "signOut":
          clearUserInfo();
          break;
        case "customOAuthState":
          history.push(data);
          break;
        default:
          console.log(event);
          console.log(data);
      }
    });

    // await this.timeout(3600000);
    // this.letUserSignInAfterExpired();
  }

  render() {
    const { isFirstTimeAccess, userInfo } = this.props;
    const { isSignInModalOpen, isUserSessionExpired } = this.state;
    return (
      <ThemeProvider theme={normalTheme}>
        <Wrapper>
          <MediaQuery minWidth={sizes.tablet}>
            {(matches) =>
              matches ? (
                <Sidebar
                  userInfo={userInfo}
                  signOut={this.signOut}
                  toggleSignInModal={this.toggleSignInModal}
                />
              ) : (
                <MobileHeader
                  userInfo={userInfo}
                  signOut={this.signOut}
                  toggleSignInModal={this.toggleSignInModal}
                />
              )
            }
          </MediaQuery>

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

          <SignInModal
            isModalOpen={isSignInModalOpen}
            isExpired={isUserSessionExpired}
            signIn={this.signIn}
            closeModal={this.toggleSignInModal}
          />
          <Alert stack={{ limit: 1 }} timeout={3000} />
        </Wrapper>
      </ThemeProvider>
    );
  }
}

const mapStateToProps = (state) => ({
  isFirstTimeAccess: getUserIsFirstTimeAccess(state),
  userInfo: getUserInfo(state),
});

const mapDispatchToProps = {
  setUserInfo,
  clearUserInfo,
};

export default withNamespaces("translation")(
  withRouter(connect(mapStateToProps, mapDispatchToProps)(App))
);
