import { WithTranslation } from "react-i18next"
import { GoogleIcon } from "@/icons/GoogleIcon"
import { CrossIcon } from "@/icons/CrossIcon"
import { signIn } from "@/utils/user"
import { Dialog } from "@headlessui/react"

interface Props extends WithTranslation {
  isModalOpen: boolean
  closeModal: () => void
}

const buttonStyle = {
  width: "70%",
  fontSize: "1.6em",
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
        className="bg-light-bgMain text-light-text1 dark:bg-dark-bgMain dark:text-dark-text1 dark:border-2 dark:border-dark-text3 rounded-lg p-4 fixed top-1/3 z-50 shadow-xl border-4 border-gray-100"
        style={{ top: "25vh", left: "20vw", width: "60vw", borderRadius: "20px", boxShadow: "0px 0px 10px gray" }}
      >
        <Dialog.Title style={{ fontSize: "24px", position: "relative" }} className="text-center">
          <button style={{ position: "absolute", top: 0, right: 0, fontSize: 50 }} onClick={closeModal}>
            <CrossIcon />
          </button>
          {t(`user.Sign in`)}
          <hr style={{ backgroundColor: "#585858", borderColor: "#585858" }} />
        </Dialog.Title>
        <Dialog.Description>
          <div className="px-4 py-4 lg:px-16 text-center">
            <p>{t(`user.sign in description`)}</p>
            <button style={buttonStyle} onClick={signIn}>
              <span style={{ float: "left", color: "#fff" }}>
                <GoogleIcon />
              </span>
              {t(`user.Sign in with WasedaMail`)}
            </button>
          </div>
          <hr style={{ backgroundColor: "#585858", borderColor: "#585858" }} />
          <p className="text-center">
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

export default SignInModal
