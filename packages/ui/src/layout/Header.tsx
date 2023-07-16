import MediaQuery from "react-responsive"
import colors from "@/theme/colors.json"
import { LanguageMenu } from "@/layout/LanguageMenu"
import { sizes } from "@/utils/responsive"
import { SmallLogo } from "@/theme/Logo"
import { ThemeToggle } from "@/layout/ThemeToggle"
import { ThemeType } from "@/constants/type/theme"

const headerStyle = (isBlur: boolean, theme: ThemeType) => {
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

const inputStyle = (theme: ThemeType) => ({
  width: "100%",
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

const pageTitleStyle = (theme: ThemeType) => ({
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
  theme?: ThemeType
  setTheme: (theme: ThemeType) => void
}

export const Header = ({
  title,
  onInputChange,
  placeholder,
  inputText,
  disabled,
  isBlur,
  changeLang,
  theme = "light",
  setTheme,
}: HeaderProps) => {
  const searchBar = (
    <label style={{ marginLeft: "0" }}>
      <input
        style={inputStyle(theme)}
        placeholder={placeholder || "Search..."}
        onChange={
          onInputChange ? (e) => onInputChange(e.target.value) : () => {}
        }
        value={inputText || ""}
        disabled={disabled}
        autoFocus={true}
      />
    </label>
  )

  return (
    <header style={headerStyle(isBlur, theme)}>
      <MediaQuery maxWidth={sizes.tablet}>
        {(matches: any) =>
          matches ? (
            <div style={logoWrapperStyle} onClick={() => {location.href = "/home"}}>
              <SmallLogo />
            </div>
          ) : (
            <header style={titleWrapperStyle}>
              <h2 style={pageTitleStyle(theme)}>{title}</h2>
            </header>
          )
        }
      </MediaQuery>

      <MediaQuery maxWidth={sizes.tablet}>
        {(matches: any) =>
          matches ? (
            <div style={mobileSearchBarWrapperStyle}>{searchBar}</div>
          ) : (
            <div style={searchBarWrapperStyle}>{searchBar}</div>
          )
        }
      </MediaQuery>

      <div style={headerMenuWrapperStyle}>
        <ThemeToggle theme={theme} setTheme={setTheme} />
        <LanguageMenu theme={theme} changeLang={changeLang} />
      </div>
    </header>
  )
}
