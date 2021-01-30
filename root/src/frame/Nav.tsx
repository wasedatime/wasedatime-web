import React from "react";
import Sidebar from "./Sidebar";
import {
  faCalendarAlt,
  faBook,
  faBus,
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
    icon: faBus,
  },
];

const Nav = () => <Sidebar navItems={navItems} />;
export default Nav;
