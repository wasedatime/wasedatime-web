import { withTranslation, WithTranslation } from "react-i18next"
import { GoogleIcon } from "@/icons/GoogleIcon"
import { signIn } from "@/utils/user"
import { Dialog } from "@headlessui/react"

interface Props extends WithTranslation {
  isModalOpen: boolean
  closeModal: () => void
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

const SignInModal = ({ isModalOpen, closeModal, t }: Props) => {
  return (
    <Dialog open={isModalOpen} onClose={() => closeModal}>
      <Dialog.Panel
        className="bg-light-bgMain text-light-text1 dark:bg-dark-bgMain dark:text-dark-text1 dark:border-2 dark:border-dark-text3"
        style={{ borderRadius: "20px", padding: "1em 2em" }}
      >
        <Dialog.Title style={{ fontSize: "24px" }}>
          {t(`user.Sign in`)}
          <hr style={{ backgroundColor: "#585858", borderColor: "#585858" }} />
        </Dialog.Title>
        <Dialog.Description>
          <div className="px-4 py-4 lg:px-16">
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
        </Dialog.Description>
      </Dialog.Panel>
    </Dialog>
  )
}

export default withTranslation("translation")(SignInModal)
