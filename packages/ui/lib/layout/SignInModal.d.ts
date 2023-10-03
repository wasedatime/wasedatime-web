import { WithTranslation } from "react-i18next";
interface Props extends WithTranslation {
    isModalOpen: boolean;
    closeModal: () => void;
}
declare const SignInModal: ({ isModalOpen, closeModal, t }: Props) => import("react/jsx-runtime").JSX.Element;
export default SignInModal;
