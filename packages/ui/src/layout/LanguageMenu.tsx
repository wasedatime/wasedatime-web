import React, { MouseEvent } from "react"
import colors from "@/theme/colors.json"
import Menu from "@mui/material/Menu"
import MenuItem from "@mui/material/MenuItem"
import { Languages } from "lucide-react"
import { ThemeType } from "@/constants/type/theme"

const buttonStyle = {
  display: "flex",
  flexDirection: "column" as "column",
  alignItems: "center",
  border: "none",
  outline: "none",
  padding: "0px",
  margin: "0px 1rem",
  backgroundColor: "inherit",
}

interface LanguageMenuProps {
  theme: ThemeType
  changeLang: (lang: string) => void
}

export const LanguageMenu = ({ theme, changeLang }: LanguageMenuProps) => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null)

  const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault()
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  const handleMenuItemClick = (
    event: MouseEvent<HTMLLIElement>,
    lang: string
  ) => {
    event.preventDefault()
    changeLang(lang)
    window.dispatchEvent(new Event("storage"))
    handleClose()
  }

  return (
    <div style={{ float: "right" }}>
      <button
        style={{
          ...buttonStyle,
          color: theme === "light" ? colors.light.main : colors.dark.text2,
        }}
        onClick={handleClick}
        aria-label="Language toggle"
      >
        <Languages size={32} />
      </button>
      <Menu
        id="language-menu"
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
        disableAutoFocusItem={true}
        classes={{
          paper: theme === "light" ? colors.light.bgSide : colors.dark.bgSide,
        }}
      >
        <MenuItem
          style={{
            fontSize: "0.8em",
            padding: "5px 12px",
            color: theme === "light" ? colors.light.text2 : colors.dark.text2,
          }}
          onClick={(event) => handleMenuItemClick(event, "ja")}
        >
          日本語
        </MenuItem>
        <MenuItem
          style={{
            fontSize: "0.8em",
            padding: "5px 12px",
            color: theme === "light" ? colors.light.text2 : colors.dark.text2,
          }}
          onClick={(event) => handleMenuItemClick(event, "en")}
        >
          English
        </MenuItem>
      </Menu>
    </div>
  )
}
