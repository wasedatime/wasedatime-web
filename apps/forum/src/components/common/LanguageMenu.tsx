import React from "react";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLanguage } from "@fortawesome/free-solid-svg-icons";
import MediaQuery from "react-responsive";
import { sizes } from "wasedatime-ui";
import { THEME } from "@app/types/theme";

const buttonStyle = {
  display: "flex",
  flexDirection: "column" as "column",
  alignItems: "center",
  border: "none",
  outline: "none",
  padding: "0px",
  margin: "0px 1rem",
  color: "#b51e36",
  backgroundColor: "inherit",
};

class LanguangeMenu extends React.Component<
  { changeLang(lang: string): void },
  {}
> {
  state = {
    anchorEl: null,
  };

  handleClick = (event: React.MouseEvent<HTMLElement>) => {
    event.preventDefault();
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };

  handleMenuItemClick = (
    event: React.MouseEvent<HTMLElement>,
    lang: string
  ) => {
    event.preventDefault();
    this.props.changeLang(lang);
    window.dispatchEvent(new Event("storage"));
    this.handleClose();
  };

  render() {
    const { anchorEl } = this.state;
    return (
      <div style={{ float: "right" }}>
        <button
          style={buttonStyle}
          onClick={this.handleClick}
          aria-label="Language toggle"
        >
          <MediaQuery maxWidth={sizes.tablet}>
            {(matches: boolean) =>
              matches ? (
                <FontAwesomeIcon icon={faLanguage} size="2x" />
              ) : (
                <FontAwesomeIcon
                  icon={faLanguage}
                  size="3x"
                  transform="shrink-2"
                />
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
        >
          <MenuItem
            style={{ fontSize: "0.8em", padding: "5px 12px" }}
            onClick={(event: React.MouseEvent<HTMLElement>) =>
              this.handleMenuItemClick(event, "ja")
            }
          >
            日本語
          </MenuItem>
          <MenuItem
            style={{ fontSize: "0.8em", padding: "5px 12px" }}
            onClick={(event: React.MouseEvent<HTMLElement>) =>
              this.handleMenuItemClick(event, "en")
            }
          >
            English
          </MenuItem>
        </Menu>
      </div>
    );
  }
}

export default LanguangeMenu;
