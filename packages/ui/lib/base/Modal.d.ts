type ModalProps = {
    isOpen: boolean;
    children: any;
    closeTimeoutMS?: number;
    style?: any;
    overlayClassName?: string;
    className?: string;
    onRequestClose?: () => void;
};
export declare const Modal: ({ isOpen, children, closeTimeoutMS, style, overlayClassName, className, onRequestClose, }: ModalProps) => import("react/jsx-runtime").JSX.Element;
export default Modal;
