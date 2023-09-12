import React, { useState } from "react"

import { getUserAttr, signOut } from "wasedatime-ui"
import { useTranslation } from "react-i18next"

import { NavItemsProps } from "@app/components/frame/Nav"
import { ProfileIconHovered } from "@app/components/icons/ProfileIcon"
import LinkOutsideRouter from "@app/utils/link-outside-router"

type Props = {
  navItems: NavItemsProps[]
  openSignInModal: () => void
}

const MobileNav = ({ navItems, openSignInModal }: Props) => {
  const { t } = useTranslation()
  const [userAttr, setUserAttr] = useState(null)
  const [signOutAvailable, setSignOutAvailable] = useState(false)
  const [currentPath, setCurrentPath] = useState(window.location.pathname)
  const notSignedIn = !userAttr
  if (notSignedIn) getUserAttr().then((attr) => setUserAttr(attr))

  const styledLinks = navItems.map((item) => (
    <LinkOutsideRouter
      to={item.path}
      key={item.path}
      className="flex-1 text-center"
      customOnClick={() => setCurrentPath(item.path)}
    >
      <div className="text-light-text2 group-hover:text-light-main dark:text-dark-text2 dark:group-hover:text-dark-text1">
        {item.icon}
      </div>
      <div className="text-lg text-light-text2 group-hover:text-light-main dark:text-dark-text2 dark:group-hover:text-dark-text1">
        {item.name}
      </div>
    </LinkOutsideRouter>
  ))

  return (
    <nav
      className="fixed bottom-0 flex w-full flex-row bg-light-bgSide dark:bg-dark-bgSide"
      style={{
        height: "60px",
        zIndex: 1000,
        padding: "8px",
        width: "100vw",
        boxShadow: "rgba(0, 0, 0, 0.3) 0px -4px 12px",
      }}
    >
      {styledLinks}

      <a className="flex-1 text-center">
        <button
          className="focus:outline-none"
          onClick={() =>
            userAttr ? setSignOutAvailable(true) : openSignInModal()
          }
          onMouseLeave={() => setSignOutAvailable(false)}
        >
          {userAttr ? (
            <img
              src={userAttr.picture}
              width="35"
              height="35"
              className="rounded-full"
              alt="Image of User account"
              style={{ margin: "0px auto" }}
            />
          ) : (
            <div className="text-light-text2 group-hover:text-light-main dark:text-dark-text2 dark:group-hover:text-dark-text1">
              <ProfileIconHovered />
            </div>
          )}
          {!userAttr && (
            <div
              className="text-light-text2 dark:text-dark-text2"
              style={{ fontSize: "12px" }}
            >
              {t("user.Sign in")}
            </div>
          )}

          {signOutAvailable && (
            <button
              className="absolute right-0 mb-4 w-1/4 rounded bg-gray-700 p-2 text-white focus:outline-none"
              onClick={signOut}
              style={{ top: "-2em" }}
            >
              {t("user.Sign Out")}
            </button>
          )}
        </button>
      </a>
    </nav>
  )
}

export default MobileNav
