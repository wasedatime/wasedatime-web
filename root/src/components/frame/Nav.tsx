import React, { useState, lazy, Suspense } from "react";
import MediaQuery from "react-responsive";
import { sizes } from "@bit/wasedatime.core.ts.utils.responsive-utils";
// import Sidebar from "@bit/wasedatime.core.ts.ui.sidebar";
// import Sidebar from "./Sidebar";
// import MobileHeader from "./MobileHeader";
import {
  faCalendarAlt,
  faBook,
  faMapMarkedAlt,
  faUserCircle,
} from "@fortawesome/free-solid-svg-icons";
// import SignInModal from "@bit/wasedatime.core.ts.ui.sign-in-modal";
const Sidebar = lazy(() => import("./Sidebar"));
const MobileNav = lazy(() => import("./MobileNav"));
const SignInModal = lazy(
  () => import("@bit/wasedatime.core.ts.ui.sign-in-modal")
);

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
    <Suspense fallback={""}>
      <MediaQuery maxWidth={sizes.tablet}>
        {(matches) =>
          matches ? (
            <MobileNav
              navItems={[
                ...navItems,
                {
                  name: "Account",
                  path: "",
                  icon: faUserCircle,
                },
              ]}
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
    </Suspense>
  );
};

export default Nav;
