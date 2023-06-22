import React from "react"
import ReactModal from "react-modal"
import { useScrollBlock } from "@/hooks/useScrollBlock"

ReactModal.setAppElement("body")

interface ModalProps extends React.Component {
  isOpen: boolean
  children: any
  closeTimeoutMS?: number
  style?: any
  overlayClassName?: string
  className?: string
  onRequestClose?: () => void
}

export const Modal = ({
  isOpen,
  children,
  closeTimeoutMS,
  style,
  overlayClassName,
  className,
  onRequestClose,
}: ModalProps) => {
  const [blockScroll, allowScroll] = useScrollBlock()

  if (isOpen) {
    blockScroll()
  } else {
    allowScroll()
  }

  return (
    <ReactModal
      isOpen={isOpen}
      closeTimeoutMS={closeTimeoutMS}
      style={style}
      overlayClassName={overlayClassName}
      className={className}
      onRequestClose={onRequestClose || (() => {})}
      shouldCloseOnOverlayClick={true}
    >
      {children}
    </ReactModal>
  )
}

export default Modal
