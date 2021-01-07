import React from "react";
import styled from "styled-components";
import { withNamespaces } from "react-i18next";
import { Header } from "semantic-ui-react";
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
    zIndex: "4010",
    backgroundColor: "rgba(0,0,0,0.5)",
  },
  content: {
    position: "absolute",
    top: isDesktop ? "15vh" : "10vh",
    left: isDesktop ? "30vw" : "10vw",
    right: isDesktop ? "30vw" : "10vw",
    height: "fit-content(20em)",
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
      <Modal
        isOpen={isModalOpen}
        style={modalStyle(matches)}
        onRequestClose={closeModal}
      >
        <StyledHeader>{t(`user.Sign In`)}</StyledHeader>
        {isExpired && (
          <StyledWarning color="red">
            {t(`user.session expired warning`)}
          </StyledWarning>
        )}
        <p>{t(`user.sign in description`)}</p>
        <SignInButton onClickFunc={signIn} />
        <br />
        <br />
        <p style={{ fontSize: "1rem" }}>
          {t(`user.agreement on privacy policy 1`)}
          <a href="/">{t(`user.Privacy Policy`)}</a>
          {t(`user.agreement on privacy policy 2`)}
          <a href="/">{t(`user.Terms of Service`)}</a>
          {t(`user.agreement on privacy policy 3`)}
        </p>
      </Modal>
    )}
  </MediaQuery>
);

export default withNamespaces("translation")(SignInModal);
