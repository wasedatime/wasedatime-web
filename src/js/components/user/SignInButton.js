import React from "react";
import { Button, Icon } from "semantic-ui-react";
import { withNamespaces } from "react-i18next";
import MediaQuery from "react-responsive";
import { sizes } from "../../styled-components/utils";

const SignInButton = ({ onClickFunc, inModal, t }) => (
  <MediaQuery minWidth={sizes.desktop}>
    {(matches) => (
      <Button
        color="red"
        onClick={onClickFunc}
        style={{
          fontSize: inModal ? "1.5em" : "1.5rem",
          padding: inModal ? "0.5em" : "0.9em",
          marginLeft: inModal ? "0" : "1rem",
          background: "#b51e36",
          borderRadius: "20px",
        }}
        icon
        labelPosition={matches ? "left" : inModal ? "left" : ""}
      >
        <Icon name="user" />
        {inModal
          ? t(`user.Sign In with WasedaMail`)
          : matches
          ? t(`user.Sign In`)
          : ""}
      </Button>
    )}
  </MediaQuery>
);

export default withNamespaces("translation")(SignInButton);
