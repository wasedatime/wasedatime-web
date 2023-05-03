import React, {
  useState,
  useEffect,
  lazy,
  Suspense,
  ReactNode,
  useContext,
} from "react";

import { sizes } from "wasedatime-ui";
import { createBrowserHistory } from "history";
import ReactGA from "react-ga";
import { useTranslation } from "react-i18next";
import MediaQuery from "react-responsive";
import { navigateToUrl } from "single-spa";

import {
  CampusIcon,
  CampusIconHovered,
} from "@app/components/icons/CampusIcon";
import { FeedsIcon, FeedsIconHovered } from "@app/components/icons/FeedsIcon";
import {
  SyllabusIcon,
  SyllabusIconHovered,
} from "@app/components/icons/SyllabusIcon";
import {
  TimetableIcon,
  TimetableIconHovered,
} from "@app/components/icons/TimetableIcon";
import { ThemeContext, ThemeProvider } from "@app/utils/theme-context";

const Sidebar = lazy(() => import("@app/components/frame/Sidebar"));
const MobileNav = lazy(() => import("@app/components/frame/MobileNav"));
const SignInModal = lazy(
  () => import("@bit/wasedatime.core.ts.ui.sign-in-modal")
);

const history = createBrowserHistory();

export interface NavItemsProps {
  name: string;
  path: string;
  icon: ReactNode;
  iconHovered?: ReactNode;
}

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

  const navItems: NavItemsProps[] = [
    {
      name: t("navigation.timetable"),
      path: "/courses/timetable",
      icon: <TimetableIcon />,
      iconHovered: <TimetableIconHovered />,
    },
    {
      name: t("navigation.syllabus"),
      path: "/courses/syllabus",
      icon: <SyllabusIcon />,
      iconHovered: <SyllabusIconHovered />,
    },
    {
      name: t("navigation.campus"),
      path: "/campus",
      icon: <CampusIcon />,
      iconHovered: <CampusIconHovered />,
    },
    {
      name: t("navigation.feeds"),
      path: "/feeds",
      icon: <FeedsIcon />,
      iconHovered: <FeedsIconHovered />,
    },
  ];

  return (
    <Suspense fallback="">
      <ThemeProvider>
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
      </ThemeProvider>
    </Suspense>
  );
};

export default Nav;
