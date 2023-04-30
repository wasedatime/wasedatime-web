import React from "react"
import colors from "@/theme/colors.json"
import Menu from "@mui/material/Menu"
import MenuItem from "@mui/material/MenuItem"
import { Languages } from "lucide-react"
import MediaQuery from "react-responsive"
import { sizes } from "@/utils/responsive"

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

type ThemeTypes = "light" | "dark"

class LanguangeMenu extends React.Component<
  { theme: ThemeTypes; changeLang(lang: string): void },
  {}
> {
  state = {
    anchorEl: null,
  }

  handleClick = (event) => {
    event.preventDefault()
    this.setState({ anchorEl: event.currentTarget })
  }

  handleClose = () => {
    this.setState({ anchorEl: null })
  }

  handleMenuItemClick = (event, lang) => {
    event.preventDefault()
    this.props.changeLang(lang)
    window.dispatchEvent(new Event("storage"))
    this.handleClose()
  }

  render() {
    const { anchorEl } = this.state
    return (
      <div style={{ float: "right" }}>
        <button
          style={{
            ...buttonStyle,
            color:
              this.props.theme === "light"
                ? colors.light.main
                : colors.dark.text2,
          }}
          onClick={this.handleClick}
          aria-label="Language toggle"
        >
          <MediaQuery maxWidth={sizes.tablet}>
            {(matches) =>
              matches ? (
                <Languages size="2x" />
              ) : (
                <Languages size="3x" transform="shrink-2" />
              )
            }
          </MediaQuery>
        </button>
        <Menu
          id="language-menu"
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={this.handleClose}
          disableAutoFocusItem={true}
          classes={{
            paper:
              this.props.theme === "light"
                ? colors.light.bgSide
                : colors.dark.bgSide,
          }}
        >
          <MenuItem
            style={{
              fontSize: "0.8em",
              padding: "5px 12px",
              color:
                this.props.theme === "light"
                  ? colors.light.text2
                  : colors.dark.text2,
            }}
            onClick={(event) => this.handleMenuItemClick(event, "ja")}
          >
            日本語
          </MenuItem>
          <MenuItem
            style={{
              fontSize: "0.8em",
              padding: "5px 12px",
              color:
                this.props.theme === "light"
                  ? colors.light.text2
                  : colors.dark.text2,
            }}
            onClick={(event) => this.handleMenuItemClick(event, "en")}
          >
            English
          </MenuItem>
        </Menu>
      </div>
    )
  }
}

export default LanguangeMenu
