import React, { useState } from "react"
import MediaQuery from "react-responsive"
import { useNavigate } from "react-router-dom"

import colors from "wasedatime-ui/colors"
import LanguageMenu from "@app/components/common/LanguageMenu"
import { sizes } from "wasedatime-ui"
import logo from "@app/assets/logo.svg"
import { ThemeToggle } from "./ThemeToggle"
import { THEME } from "@app/types/theme"

const headerStyle = (isBlur: boolean, theme: THEME) => {
  const lightBackgroundColor = isBlur ? "#FAFAFA30" : colors.light.bgSide
  const darkBackgroundColor = isBlur ? "#24252770" : colors.dark.bgSide

  return {
    height: "67px",
    width: "100%",
    padding: "8px 0px",
    borderWidth: 0,
    borderBottomWidth: 2,
    borderStyle: "solid",
    borderColor: theme === "light" ? colors.light.bgSide : colors.dark.bgSide,
    background: theme === "light" ? lightBackgroundColor : darkBackgroundColor,
    backdropFilter: isBlur ? "blur(5px)" : "none",
    position: "fixed" as "fixed",
    top: "0",
    left: "0",
    zIndex: 90,
    gridRow: "1 / 2",
    display: "flex",
    flexDirection: "row" as "row",
  }
}

const titleWrapperStyle = {
  flex: "5",
  paddingRight: "0px",
}

const logoWrapperStyle = {
  display: 'flex',
  alignItems: 'center',
  flex: "3",
  padding: "0px 0px 0px 1em",
}

const searchBarWrapperStyle = {
  flex: "8",
  margin: "auto 0px",
}

const mobileSearchBarWrapperStyle = {
  flex: "10",
  margin: "auto 0px",
}

const headerMenuWrapperStyle = {
  flex: "3",
  margin: "auto 0px",
  display: "flex",
  flexDirection: "row" as "row",
  justifyContent: "flex-end",
}

const inputStyle = (theme: THEME) => ({
  borderRadius: "25px",
  height: "40px",
  padding: "0px 1em",
  outline: "none",
  borderWidth: 1,
  borderStyle: "solid",
  borderColor: theme === "light" ? colors.light.bgSide : colors.dark.text3,
  backgroundColor: theme === "light" ? colors.light.bgMain : colors.dark.text3,
  color: theme === "light" ? colors.light.text1 : colors.dark.text1,
})

const pageTitleStyle = (theme: THEME) => ({
  fontWeight: 500,
  paddingLeft: "100px",
  fontSize: "32px",
  color: theme === "light" ? colors.light.text1 : colors.dark.text1,
})

type HeaderProps = {
  title: string
  onInputChange(x: string): void
  placeholder: string
  inputText: string | string[]
  disabled?: boolean
  isBlur: boolean
  changeLang(x: string): void
  theme?: THEME
  setTheme?: (theme: THEME) => void
  onSearchBarClick?: () => void
}

const Header = ({
  title,
  onInputChange,
  placeholder,
  inputText,
  disabled,
  isBlur,
  changeLang,
  theme = THEME.LIGHT,
  setTheme,
  onSearchBarClick = () => {},
}: HeaderProps) => {
  let navigate = useNavigate()
  const [isInputExpanded, setIsInputExpanded] = useState(false)

  // const searchBar = (
  //   <label className="ml-0 flex flex-row justify-end md:justify-center">
  //     {!isInputExpanded && (
  //       <header
  //         className="ml-2 self-center md:hidden"
  //         style={titleWrapperStyle}
  //       >
  //         <h2 className="text-2xl text-light-text1 dark:text-dark-text1">
  //           {title}
  //         </h2>
  //       </header>
  //     )}
  //     <input
  //       style={inputStyle(theme)}
  //       placeholder={placeholder || "Search..."}
  //       onChange={
  //         onInputChange ? (e) => onInputChange(e.target.value) : () => {}
  //       }
  //       onFocus={() => {
  //         setIsInputExpanded(true)
  //         onSearchBarClick()
  //       }}
  //       onBlur={() => setIsInputExpanded(false)}
  //       value={inputText || ""}
  //       disabled={disabled}
  //       className={isInputExpanded ? "w-full" : "hidden md:block md:w-1/2"}
  //     />
  //     {/* Search Icon disabled */}
  //     {/* <span
  //       className={
  //         "h-[40px] w-0 -translate-x-8 py-[6px] text-light-text2 dark:text-dark-text2"
  //       }
  //       onClick={() => {
  //         setIsInputExpanded(true)
  //         onSearchBarClick()
  //       }}
  //     >
  //       <SearchIcon />
  //     </span> */}
  //   </label>
  // )

  return (
    <header style={headerStyle(isBlur, theme)}>
      <MediaQuery maxWidth={sizes.tablet}>
        {(matches: boolean) =>
          matches ? (
            <div style={logoWrapperStyle} onClick={() => navigate("/home")}>
              <img
                src={new URL(logo, import.meta.url).href}
                alt="WasedaTime English Small Logo"
                className="h-[50px] w-[50px]"
              />
              <h2 className="text-2xl text-light-text1 dark:text-dark-text1 ml-5 whitespace-nowrap"> 
                {title}
              </h2>
          </div>
          ) : (
            <header style={titleWrapperStyle}>
              <h2 style={pageTitleStyle(theme)}>{title}</h2>
            </header>
          )
        }
      </MediaQuery>

      <MediaQuery maxWidth={sizes.tablet}>
        {(matches: boolean) =>
          matches ? (
            <div style={mobileSearchBarWrapperStyle}></div>
          ) : (
            <div style={searchBarWrapperStyle}></div>
          )
          // (
          //   <div style={mobileSearchBarWrapperStyle}>{searchBar}</div>
          // ) : (
          //   <div style={searchBarWrapperStyle}>{searchBar}</div>
          // )
        }
      </MediaQuery>

      <div style={headerMenuWrapperStyle}>
        <ThemeToggle theme={theme} setTheme={setTheme} />
        <LanguageMenu changeLang={changeLang} />
      </div>
    </header>
  )
}

export default Header
