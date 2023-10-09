import React, {
  useState,
  useEffect,
  lazy,
  Suspense,
  ReactNode,
  useContext,
} from "react"

import { SignInModal, sizes } from "wasedatime-ui"
import { createBrowserHistory } from "history"
import ReactGA from "react-ga4"
import { useTranslation } from "react-i18next"
import MediaQuery from "react-responsive"
import { navigateToUrl } from "single-spa"

import { CampusIcon, CampusIconHovered } from "@app/components/icons/CampusIcon"
import { FeedsIcon, FeedsIconHovered } from "@app/components/icons/FeedsIcon"
import { ForumIcon, ForumIconHovered } from "@app/components/icons/ForumIcon"
import {
  SyllabusIcon,
  SyllabusIconHovered,
} from "@app/components/icons/SyllabusIcon"
import {
  TimetableIcon,
  TimetableIconHovered,
} from "@app/components/icons/TimetableIcon"
import { ThemeContext, ThemeProvider } from "@app/utils/theme-context"
import {
  getCurrentDateInJST,
  getCurrentDateInUTC,
  extractDate,
} from "@app/utils/getDate"
import { shouldCallApi } from "@app/utils/shouldCallApi"
import { fetchNotificaiton } from "@app/utils/fetchNotification"

const Sidebar = lazy(() => import("@app/components/frame/Sidebar"))
const MobileNav = lazy(() => import("@app/components/frame/MobileNav"))

const history = createBrowserHistory()

export interface NavItemsProps {
  name: string
  path: string
  icon: ReactNode
  iconHovered?: ReactNode
  tooltip?: string
}

const Nav = () => {
  if (
    localStorage.getItem("isFirstAccess") === null ||
    localStorage.getItem("isFirstAccess") === "true"
  ) {
    navigateToUrl("/")
  }
  const [isSignInModalOpen, setSignInModalOpen] = useState(false)
  const { t, i18n } = useTranslation()

  useEffect(() => {
    // fetchNotificaiton("")
    window.onstorage = () => {
      i18n.changeLanguage(localStorage.getItem("wasedatime-lng"))
    }

    const page_path = window.location.pathname + window.location.search
    ReactGA.send({
      hitType: "pageview",
      page_path: page_path,
    })

    const fetchNotificationAndUpdateState = async () => {
      try {
        const storedDateInJST = localStorage.getItem("lastCheckedDateJST")
        const currentDateInJST = getCurrentDateInJST()
        const storedDateOnly = extractDate(storedDateInJST || "")
        const currentDateOnly = extractDate(currentDateInJST)

        if (!storedDateOnly) {
          localStorage.setItem("lastCheckedDateJST", currentDateInJST)
        } else if (shouldCallApi()) {
          const newPostsCount = await fetchNotificaiton(storedDateInJST || "")
          const updatedNavItems = navItems.map((item) =>
            item.path === "/forum"
              ? {
                  ...item,
                  tooltip:
                    newPostsCount > 0
                      ? `${newPostsCount} unread posts!`
                      : "Share something in WTF!",
                }
              : item
          )
          setNavItems(updatedNavItems)
          localStorage.setItem("lastCheckedDateJST", currentDateInJST)
          localStorage.setItem(
            "lastApiCallTimestamp",
            new Date().getTime().toString()
          )
        } else {
          const updatedNavItems = navItems.map((item) =>
            item.path === "/forum"
              ? {
                  ...item,
                  tooltip: "Check out WTF!",
                }
              : item
          )
          setNavItems(updatedNavItems)
        }
      } catch (error) {
        console.error("Error fetching notifications:", error)
      }
    }

    fetchNotificationAndUpdateState()

    return history.listen(({ location, action }) => {
      if (action === "POP") {
        const new_page_path = location.pathname + location.search
        ReactGA.send({
          hitType: "pageview",
          page_path: new_page_path,
        })
      }
    })
  }, [])

  // const currentDateInUTC = getCurrentDateInUTC()

  const [navItems, setNavItems] = useState<NavItemsProps[]>([
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
      name: t("navigation.forum"),
      path: "/forum",
      icon: <ForumIcon />,
      iconHovered: <ForumIconHovered />,
      tooltip: "Check out the new posts!",
    },
    // {
    //   name: t("navigation.campus"),
    //   path: "/campus",
    //   icon: <CampusIcon />,
    //   iconHovered: <CampusIconHovered />,
    // },
    // {
    //   name: t("navigation.feeds"),
    //   path: "/feeds",
    //   icon: <FeedsIcon />,
    //   iconHovered: <FeedsIconHovered />,
    // },
  ])

  // const navItems: NavItemsProps[] = [
  //   {
  //     name: t("navigation.timetable"),
  //     path: "/courses/timetable",
  //     icon: <TimetableIcon />,
  //     iconHovered: <TimetableIconHovered />,
  //   },
  //   {
  //     name: t("navigation.syllabus"),
  //     path: "/courses/syllabus",
  //     icon: <SyllabusIcon />,
  //     iconHovered: <SyllabusIconHovered />,
  //   },
  //   {
  //     name: t("navigation.forum"),
  //     path: "/forum",
  //     icon: <ForumIcon />,
  //     iconHovered: <ForumIconHovered />,
  //     tooltip: "Check out the new posts!",
  //   },
  // {
  //   name: t("navigation.campus"),
  //   path: "/campus",
  //   icon: <CampusIcon />,
  //   iconHovered: <CampusIconHovered />,
  // },
  // {
  //   name: t("navigation.feeds"),
  //   path: "/feeds",
  //   icon: <FeedsIcon />,
  //   iconHovered: <FeedsIconHovered />,
  // },
  // ]

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
          t={t}
        />
      </ThemeProvider>
    </Suspense>
  )
}

export default Nav
