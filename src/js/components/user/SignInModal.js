import React from "react";
import styled from "styled-components";
import { withNamespaces } from "react-i18next";
import { Header, Button } from "semantic-ui-react";
import Modal from "../Modal";
import SignInButton from "./SignInButton";
import MediaQuery from "react-responsive";
import { sizes } from "../../styled-components/utils";

const modalStyle = (isDesktop) => ({
  overlay: {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: "3030",
    backgroundColor: "rgba(0,0,0,0.5)",
  },
  content: {
    position: "absolute",
    top: "15%",
    left: isDesktop ? "30%" : "10%",
    right: isDesktop ? "30%" : "10%",
    bottom: isDesktop ? "30%" : "20%",
    backgroundColor: "#fff",
    overflowY: "auto",
    overflowScrolling: "touch",
    WebkitOverflowScrolling: "touch",
    outline: "none",
    padding: "40px 20px",
    textAlign: "center",
    borderRadius: "20px",
  },
});

const StyledHeader = styled(Header)`
  font-size: 2em !important;
  margin-bottom: 1em !important;
`;

const StyledWarning = styled(Header)`
  font-size: 1.2em !important;
`;

const SignInModal = ({ isModalOpen, isExpired, signIn, closeModal, t }) => (
  <MediaQuery minWidth={sizes.desktop}>
    {(matches) => (
      <Modal isOpen={isModalOpen} style={modalStyle(matches)}>
        <StyledHeader>{t(`user.Sign In`)}</StyledHeader>
        {isExpired && (
          <StyledWarning color="red">
            {t(`user.session expired warning`)}
          </StyledWarning>
        )}
        <p>{t(`user.sign in description`)}</p>
        <br />
        <SignInButton onClickFunc={signIn} inModal={true} />
        <br />
        <br />
        <br />
        <p style={{ fontSize: "1rem" }}>
          {t(`user.agreement on privacy policy 1`)}
          <a href="/">{t(`user.Privacy Policy`)}</a>
          {t(`user.agreement on privacy policy 2`)}
          <a href="/">{t(`user.Terms of Service`)}</a>
          {t(`user.agreement on privacy policy 3`)}
        </p>
        <Button onClick={closeModal}>
          {t(`user.Keep using without sign in`)}
        </Button>
      </Modal>
    )}
  </MediaQuery>
);

export default withNamespaces("translation")(SignInModal);
