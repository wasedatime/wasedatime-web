import React from "react";
import styled from "styled-components";
import MediaQuery from "react-responsive";
import { withTranslation } from "react-i18next";
import { media, sizes } from "@bit/wasedatime.core.ts.utils.responsive-utils";
import { signIn } from "@bit/wasedatime.core.ts.utils.user";
import Modal from "@bit/wasedatime.core.ts.ui.modal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";

const StyledModal = styled(Modal)`
  text-align: center;
  font-family: Segoe UI, Yu Gothic Medium, Lato;
  font-display: swap;
  font-size: 1.2em;
  p {
    font-size: 1em;
  }
`;

const SignInButton = styled.button`
  font-size: 1.4em;
  padding: 0.5em 1em;
  margin: 0.5em;
  background: #b51e36;
  border-radius: 30px;
  color: #fff;
  border: 2px solid #b51e36;
  ${media.phone`font-size: 1em;`}
  &:hover {
    background: #fff;
    color: #b51e36;
  }
  &:focus {
    outline: none;
  }
`;

const modalStyle = {
  overlay: {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: "1001",
    background: "rgba(153, 153, 153, 0.5)",
  },
  content: {
    position: "absolute",
    top: "30vh",
    left: "25vw",
    right: "25vw",
    background: "#fff",
    overflowY: "auto",
    overflowScrolling: "touch",
    WebkitOverflowScrolling: "touch",
    outline: "none",
    fontSize: "16px",
    padding: "1em 5em",
    borderRadius: "20px"
  },
};

const mobileModalStyle = {
  overlay: modalStyle.overlay,
  content: {
    ...modalStyle.content,
    top: "20vh",
    left: "10vw",
    right: "10vw",
    padding: "1em",
  }
}

const SignInModalChildren = ({ t }) => (
  <div>
    <h2>{t(`user.Sign in`)}</h2>

    <hr />
    
    <div style={{ padding: "1em 0px" }}>
      <p>{t(`user.sign in description`)}</p>

      <SignInButton onClick={signIn}>
        <span style={{ paddingRight: "1em" }}>
          <FontAwesomeIcon icon={faGoogle} />
        </span>
        {t(`user.Sign in with WasedaMail`)}
      </SignInButton>
    </div>

    <hr />

    <p style={{ color: "#999" }}>
      {t(`user.agreement on privacy policy 1`)}
      <a href="/privacy-policy"><b>{t(`user.Privacy Policy`)}</b></a>
      {t(`user.agreement on privacy policy 2`)}
      <a href="/terms-of-service"><b>{t(`user.Terms of Service`)}</b></a>
      {t(`user.agreement on privacy policy 3`)}
    </p>
  </div>
)

const SignInModal = ({ isModalOpen, closeModal, t }) => {
  return (
    <MediaQuery maxWidth={sizes.tablet}>
      {
        matches => matches ? (
          <StyledModal
            isOpen={isModalOpen}
            style={mobileModalStyle}
            onRequestClose={closeModal}
          >
            <SignInModalChildren t={t} />
          </StyledModal>
        ) : (
          <StyledModal
            isOpen={isModalOpen}
            style={modalStyle}
            onRequestClose={closeModal}
          >
            <SignInModalChildren t={t} />
          </StyledModal>
        )
      }
    </MediaQuery>
    
  );
};

export default withTranslation("translation")(SignInModal);
