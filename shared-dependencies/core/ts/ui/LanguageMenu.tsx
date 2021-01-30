import React from "react";
import styled from "styled-components";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLanguage } from "@fortawesome/free-solid-svg-icons";

const StyledButton = styled("button")`
  display: flex;
  flex-direction: column;
  align-items: center;
  border: none;
  outline: none;
  padding: 0;
  margin: 0 1rem;
  color: #b51e36;
  background-color: inherit;
`;

class LanguangeMenu extends React.Component<
  { changeLang(lang: string): void },
  {}
> {
  state = {
    anchorEl: null,
  };

  handleClick = (event) => {
    event.preventDefault();
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };

  handleMenuItemClick = (event, lang) => {
    event.preventDefault();
    this.props.changeLang(lang);
    this.handleClose();
  };

  render() {
    const { anchorEl } = this.state;
    return (
      <div style={{ float: "right" }}>
        <StyledButton onClick={this.handleClick}>
          <FontAwesomeIcon icon={faLanguage} size="3x" transform="shrink-2" />
        </StyledButton>
        <Menu
          id="language-menu"
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={this.handleClose}
          disableAutoFocusItem={true}
        >
          <MenuItem
            style={{ fontSize: "0.8em", padding: "5px 12px" }}
            onClick={(event) => this.handleMenuItemClick(event, "jp")}
          >
            日本語
          </MenuItem>
          <MenuItem
            style={{ fontSize: "0.8em", padding: "5px 12px" }}
            onClick={(event) => this.handleMenuItemClick(event, "en")}
          >
            English
          </MenuItem>
        </Menu>
      </div>
    );
  }
}

export default LanguangeMenu;
