import React, { useState } from "react";
import MediaQuery from "react-responsive";
import { sizes } from "@bit/wasedatime.core.ts.utils.responsive-utils";
// import Sidebar from "@bit/wasedatime.core.ts.ui.sidebar";
import Sidebar from "./Sidebar";
import MobileHeader from "./MobileHeader";
import {
  faCalendarAlt,
  faBook,
  faMapMarkedAlt,
} from "@fortawesome/free-solid-svg-icons";
import SignInModal from "@bit/wasedatime.core.ts.ui.sign-in-modal";

const navItems = [
  {
    name: "Timetable",
    path: "/courses/timetable",
    icon: faCalendarAlt,
  },
  {
    name: "Syllabus",
    path: "/courses/syllabus",
    icon: faBook,
  },
  {
    name: "Campus",
    path: "/campus",
    icon: faMapMarkedAlt,
  },
];

const Nav = () => {
  const [isSignInModalOpen, setSignInModalOpen] = useState(false);

  return (
    <React.Fragment>
      <MediaQuery maxWidth={sizes.tablet}>
        {(matches) =>
          matches ? (
            <MobileHeader
              navItems={navItems}
              openSignInModal={() => setSignInModalOpen(true)}
            />
          ) : (
            <Sidebar
              navItems={navItems}
              openSignInModal={() => setSignInModalOpen(true)}
            />
          )
        }
      </MediaQuery>
      <SignInModal
        isModalOpen={isSignInModalOpen}
        closeModal={() => setSignInModalOpen(false)}
      />
    </React.Fragment>
  );
};

export default Nav;
