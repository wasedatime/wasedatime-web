import MediaQuery from "react-responsive"
import { withTranslation, WithTranslation } from "react-i18next"
import Modal from "@/layout/Modal"
import { sizes } from "@/utils/responsive"
import { GoogleIcon } from "@/icons/GoogleIcon"
import { signIn } from "@/utils/user"

interface Props extends WithTranslation {
  isModalOpen: boolean
  closeModal: () => void
}

interface ChildrenProps {
  t: (key: string) => string
  isMobile: boolean
}

const modalStyle = {
  overlay: {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: "1001",
    background: "rgba(30, 30, 30, 0.5)",
  },
  content: {
    position: "absolute",
    display: "block",
    top: "30vh",
    left: "25vw",
    right: "25vw",
    height: "fit-content",
    overflowY: "auto",
    overflowScrolling: "touch",
    WebkitOverflowScrolling: "touch",
    outline: "none",
    fontSize: "16px",
    padding: "0px",
    backgroundColor: "transparent",
    borderRadius: "20px",
    borderWidth: "0px",
    textAlign: "center",
    fontFamily: "Segoe UI, Yu Gothic Medium, Lato",
    fontDisplay: "swap",
  },
}

const mobileModalStyle = {
  overlay: modalStyle.overlay,
  content: {
    ...modalStyle.content,
    top: "20vh",
    left: "10vw",
    right: "10vw",
    padding: "1em 0px",
  },
}

const buttonStyle = {
  fontSize: "1.2em",
  padding: "0.5em",
  margin: "0.5em",
  background: "#b51e36",
  borderRadius: "30px",
  color: "#fff",
  border: "2px solid #b51e36",
  ":hover": {
    background: "#fff",
    color: "#b51e36",
  },
  ":focus": {
    outline: "none",
  },
}

const SignInModalChildren = ({ t, isMobile }: ChildrenProps) => (
  <div>
    <h2 style={{ fontSize: "24px" }}>{t(`user.Sign in`)}</h2>

    <hr style={{ backgroundColor: "#585858", borderColor: "#585858" }} />

    <div style={{ padding: isMobile ? "1em" : "1em 4em" }}>
      <p>{t(`user.sign in description`)}</p>

      <button style={buttonStyle} onClick={signIn}>
        <span style={{ padding: "0px", paddingRight: "0.5em" }}>
          <GoogleIcon />
        </span>
        {t(`user.Sign in with WasedaMail`)}
      </button>
    </div>

    <hr style={{ backgroundColor: "#585858", borderColor: "#585858" }} />

    <p>
      {t(`user.agreement on privacy policy 1`)}
      <a href="/privacy-policy">
        <b>{t(`user.Privacy Policy`)}</b>
      </a>
      {t(`user.agreement on privacy policy 2`)}
      <a href="/terms-of-service">
        <b>{t(`user.Terms of Service`)}</b>
      </a>
      {t(`user.agreement on privacy policy 3`)}
    </p>
  </div>
)

const SignInModal = ({ isModalOpen, closeModal, t }: Props) => {
  return (
    <MediaQuery maxWidth={sizes.tablet}>
      {(matches) =>
        matches ? (
          <Modal
            isOpen={isModalOpen}
            style={mobileModalStyle}
            onRequestClose={closeModal}
          >
            <div
              className="bg-light-bgMain text-light-text1 dark:bg-dark-bgMain dark:text-dark-text1 dark:border-2 dark:border-dark-text3"
              style={{ borderRadius: "20px", padding: "1em 2em" }}
            >
              <SignInModalChildren t={t} isMobile={true} />
            </div>
          </Modal>
        ) : (
          <Modal
            isOpen={isModalOpen}
            style={modalStyle}
            onRequestClose={closeModal}
          >
            <div
              className="bg-light-bgMain text-light-text1 dark:bg-dark-bgMain dark:text-dark-text1 dark:border-2 dark:border-dark-text3"
              style={{ borderRadius: "20px", padding: "1em 2em" }}
            >
              <SignInModalChildren t={t} isMobile={false} />
            </div>
          </Modal>
        )
      }
    </MediaQuery>
  )
}

export default withTranslation("translation")(SignInModal)
