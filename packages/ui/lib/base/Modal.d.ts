import React from "react";
interface ModalProps extends React.Component {
    isOpen: boolean;
    children: any;
    closeTimeoutMS?: number;
    style?: any;
    overlayClassName?: string;
    className?: string;
    onRequestClose?: () => void;
}
export declare const Modal: ({ isOpen, children, closeTimeoutMS, style, overlayClassName, className, onRequestClose, }: ModalProps) => JSX.Element;
export default Modal;
