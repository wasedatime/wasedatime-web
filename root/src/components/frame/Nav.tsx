import React, { useState, useEffect, lazy, Suspense } from "react";

import { sizes } from "@bit/wasedatime.core.ts.utils.responsive-utils";
import {
  faCalendarAlt,
  faBook,
  faMapMarkedAlt,
  faNewspaper,
} from "@fortawesome/free-solid-svg-icons";
import ReactGA from "react-ga";
import { useTranslation } from "react-i18next";
import MediaQuery from "react-responsive";
import { navigateToUrl } from "single-spa";
import { createBrowserHistory } from "history";

const Sidebar = lazy(() => import("@app/components/frame/Sidebar"));
const MobileNav = lazy(() => import("@app/components/frame/MobileNav"));
const SignInModal = lazy(
  () => import("@bit/wasedatime.core.ts.ui.sign-in-modal")
);

const history = createBrowserHistory();

const Nav = () => {
  if (
    localStorage.getItem("isFirstAccess") === null ||
    localStorage.getItem("isFirstAccess") === "true"
  ) {
    navigateToUrl("/");
  }
  const [isSignInModalOpen, setSignInModalOpen] = useState(false);
  const { t, i18n } = useTranslation();

  useEffect(() => {
    window.onstorage = () => {
      i18n.changeLanguage(localStorage.getItem("wasedatime-lng"));
    };

    const page = window.location.pathname + window.location.search;
    ReactGA.set({ page });
    ReactGA.pageview(page);

    return history.listen(({ location, action }) => {
      if (action === "POP") {
        ReactGA.set({ page: location.pathname });
        ReactGA.pageview(location.pathname);
      }
    });
  }, []);

  const navItems = [
    {
      name: t("navigation.timetable"),
      path: "/courses/timetable",
      icon: faCalendarAlt,
    },
    {
      name: t("navigation.syllabus"),
      path: "/courses/syllabus",
      icon: faBook,
    },
    {
      name: t("navigation.campus"),
      path: "/campus",
      icon: faMapMarkedAlt,
    },
    {
      name: t("navigation.feeds"),
      path: "/feeds",
      icon: faNewspaper,
    },
  ];

  return (
    <Suspense fallback="">
      <MediaQuery maxWidth={sizes.tablet}>
        {(matches) =>
          matches ? (
            <MobileNav
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
    </Suspense>
  );
};

export default Nav;
