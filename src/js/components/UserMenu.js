import React from "react";
import { connect } from "react-redux";
import { Auth } from "aws-amplify";
import PropTypes from "prop-types";
// import i18n from "./i18n";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserAlt } from "@fortawesome/free-solid-svg-icons";
import { withNamespaces } from "react-i18next";
import styled from "styled-components";

import { media } from "../styled-components/utils";
import { clearUserInfo } from "../actions/user";

const StyledButton = styled("button")`
  display: flex;
  flex-direction: column;
  align-items: center;
  border: none;
  outline: none;
  padding: 0;
  margin: 0;
  background-color: inherit;
  color: #fff;
`;

const StyledSpan = styled("span")`
  font-size: 0.55em;
  font-weight: 100;
  ${media.phone`font-size: 0.5em;`};
`;

class UserMenu extends React.Component {
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

  render() {
    const { anchorEl } = this.state;
    // const { t } = this.props;
    return (
      <div style={{ marginLeft: "1em" }}>
        <StyledButton onClick={this.handleClick}>
          <FontAwesomeIcon icon={faUserAlt} size="2x" transform="shrink-2" />
          <StyledSpan>My Account</StyledSpan>
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
            onClick={() =>
              Auth.signOut().then(() => {
                this.props.clearUserInfo();
                this.handleClose();
              })
            }
          >
            Sign out
          </MenuItem>
        </Menu>
      </div>
    );
  }
}

const mapDispatchToProps = {
  clearUserInfo,
};

export default withNamespaces("translation")(
  connect(null, mapDispatchToProps)(UserMenu)
);

UserMenu.propTypes = {
  lng: PropTypes.string.isRequired,
  t: PropTypes.func.isRequired,
};
