import React from "react";
import { Button, Icon } from "semantic-ui-react";
import { withNamespaces } from "react-i18next";
import MediaQuery from "react-responsive";
import { sizes } from "../../styled-components/utils";

const SignInButton = ({ onClickFunc, t }) => (
  <MediaQuery minWidth={sizes.desktop}>
    {(matches) => (
      <Button
        color="red"
        onClick={onClickFunc}
        style={{
          fontSize: "1.5em",
          padding: "0.5em ",
          marginLeft: "0",
          background: "#b51e36",
          borderRadius: "20px",
        }}
        icon
        labelPosition="left"
      >
        <Icon name="google" />
        {t(`user.Sign In with WasedaMail`)}
      </Button>
    )}
  </MediaQuery>
);

export default withNamespaces("translation")(SignInButton);
