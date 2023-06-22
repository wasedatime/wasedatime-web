/// <reference types="react" />
import { WithTranslation } from "react-i18next";
interface Props extends WithTranslation {
    isModalOpen: boolean;
    closeModal: () => void;
}
declare const SignInModal: ({ isModalOpen, closeModal, t }: Props) => JSX.Element;
export default SignInModal;
