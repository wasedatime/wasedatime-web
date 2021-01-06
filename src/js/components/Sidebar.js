import logo from "../../img/logo.png";
import textLogo from "../../img/text-logo.svg";
import Navigation from "./Navigation";
import UserMenu from "./user/UserMenu";
import SignInModal from "./user/SignInModal";
import React from "react";
import { Link, withRouter } from "react-router-dom";
import { withNamespaces } from "react-i18next";
import styled from "styled-components";
import API from "@aws-amplify/api";
import { Auth, Hub } from "aws-amplify";
import { connect } from "react-redux";
import { getUserInfo } from "../reducers/user";
import { setUserInfo, clearUserInfo } from "../actions/user";
import { getAddedCoursesAndPrefs } from "../reducers/addedCourses";

const StyledSidebar = styled("aside")`
  background: ${(props) => props.theme.grey2};
  width: 65px;
  height: 100vh;
  position: fixed;
  z-index: 4000;
  box-shadow: rgba(0, 0, 0, 0.45) 4px 0px 12px;
  transition: width 0.5s;

  &:hover {
    width: 210px;
    transition: width 0.5s;
  }
`;

const StyledLink = styled(Link)`
  display: flex;
  width: 100%;
  align-items: center;
  padding: 7.5px;
  border-bottom: 2px solid ${(props) => props.theme.colorPrimary};
`;

const Logo = styled("img")`
  width: 50px;
  height: 50px;
`;

const TextLogo = styled("img")`
  height: 25px;
  margin: 0.5rem;
  overflow-x: hidden;
  opacity: ${(props) => (props.isHovered ? "1" : "0")};
  transition: opacity 0.3s;
`;

class Sidebar extends React.Component {
  state = {
    isHovered: false,
    currentPath: window.location.pathname,
    needSignInAgain: false,
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

  openSignInModal = () => {
    this.setState({ needSignInAgain: true });
  };

  closeSignInModal = () => {
    this.setState({ needSignInAgain: false });
  };

  letUserSignInAfterExpired = () => {
    this.setState({ isUserSessionExpired: true });
    this.props.clearUserInfo();
    this.openSignInModal();
  };

  async componentDidMount() {
    if (
      this.props.userInfo &&
      this.props.userInfo.idToken.payload.exp < Date.now() / 1000
    ) {
      this.props.clearUserInfo();
    }

    Hub.listen("auth", ({ payload: { event, data } }) => {
      console.log(event);
      switch (event) {
        case "signIn":
          this.props.setUserInfo(data);
          break;
        case "signOut":
          this.props.clearUserInfo();
          break;
        case "customOAuthState":
          this.props.history.push(data);
          break;
        default:
          console.log(event);
          console.log(data);
      }
    });

    if (this.props.userInfo) {
      this.postTimetable();

      const res = await API.get("wasedatime-dev", "/timetable", {
        headers: {
          Authorization: this.props.userInfo
            ? this.props.userInfo.idToken.jwtToken
            : "",
        },
      });
      console.log(res);
    }

    await this.timeout(3600000);
    this.letUserSignInAfterExpired();
  }

  postTimetable() {
    const addedCoursesAndPrefs = [
      ...this.props.addedCoursesAndPrefs.fall,
      ...this.props.addedCoursesAndPrefs.spring,
    ];
    let coursesBySem = {
      spring_sem: [],
      fall_sem: [],
      spring_quart: [],
      summer_quart: [],
      fall_quart: [],
      winter_quart: [],
      full: [],
    };
    addedCoursesAndPrefs.forEach((c) => {
      const courseAndPref = {
        id: c.course.a,
        color: c.color,
        displayLang: c.displayLang,
      };
      if (c.course.h.match(/0s|0i|1i|0t|1t|f/g))
        coursesBySem.spring_sem.push(courseAndPref);
      if (c.course.h.match(/2s|2i|3i|2t|3t|f/g))
        coursesBySem.fall_sem.push(courseAndPref);
      if (c.course.h.match(/0q/g))
        coursesBySem.spring_quart.push(courseAndPref);
      if (c.course.h.match(/1q/g))
        coursesBySem.summer_quart.push(courseAndPref);
      if (c.course.h.match(/2q/g)) coursesBySem.fall_quart.push(courseAndPref);
      if (c.course.h.match(/3q/g))
        coursesBySem.winter_quart.push(courseAndPref);
    });
    const coursesAndPrefs = Object.keys(coursesBySem).map((sem) => {
      return {
        semester: sem,
        courses: coursesBySem[sem],
      };
    });
    console.log(this.props.userInfo.idToken.jwtToken);
    API.post("wasedatime-dev", "/timetable", {
      body: { data: coursesAndPrefs },
      headers: {
        Authorization: this.props.userInfo
          ? this.props.userInfo.idToken.jwtToken
          : "",
      },
    });
  }

  render() {
    const { userInfo } = this.props;
    const { isHovered, needSignInAgain, isUserSessionExpired } = this.state;
    return (
      <React.Fragment>
        <StyledSidebar
          onMouseEnter={() => this.setState({ isHovered: true })}
          onMouseLeave={() => this.setState({ isHovered: false })}
        >
          <StyledLink to="/about">
            <Logo src={logo} alt="WasedaTime logo" width="50" height="50" />
            <TextLogo
              src={textLogo}
              alt="WasedaTime text logo"
              height="50"
              isHovered={isHovered}
            />
          </StyledLink>
          <Navigation isHovered={isHovered} />
          <div style={{ position: "absolute", bottom: "5em" }}>
            <UserMenu
              userInfo={userInfo}
              signOut={this.signOut}
              openSignInModal={this.openSignInModal}
              isHovered={isHovered}
            />
          </div>
        </StyledSidebar>
        <SignInModal
          isModalOpen={needSignInAgain}
          isExpired={isUserSessionExpired}
          signIn={this.signIn}
          closeModal={this.closeSignInModal}
        />
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => ({
  userInfo: getUserInfo(state),
  addedCoursesAndPrefs: getAddedCoursesAndPrefs(state.addedCourses),
});

const mapDispatchToProps = {
  setUserInfo,
  clearUserInfo,
};

export default withRouter(
  withNamespaces("translation")(
    connect(mapStateToProps, mapDispatchToProps)(Sidebar)
  )
);
