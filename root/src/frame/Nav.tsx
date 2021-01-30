import React from "react";
import MediaQuery from "react-responsive";
import { sizes } from "@bit/wasedatime.core.ts.utils.responsive-utils";
import Sidebar from "@bit/wasedatime.core.ts.ui.sidebar";
import MobileHeaderWrapper from "@bit/wasedatime.core.ts.ui.mobile-header-wrapper";
import {
  faCalendarAlt,
  faBook,
  faMapMarkedAlt,
} from "@fortawesome/free-solid-svg-icons";

const navItems = [
  {
    name: "Timetable",
    path: "/timetable",
    icon: faCalendarAlt,
  },
  {
    name: "Syllabus",
    path: "/syllabus",
    icon: faBook,
  },
  {
    name: "Campus",
    path: "/campus",
    icon: faMapMarkedAlt,
  },
];

const Nav = () => (
  <MediaQuery maxWidth={sizes.tablet}>
    {(matches) =>
      matches ? <MobileHeaderWrapper /> : <Sidebar navItems={navItems} />
    }
  </MediaQuery>
);

export default Nav;
