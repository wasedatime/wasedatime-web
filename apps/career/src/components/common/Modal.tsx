import React, { useState } from "react"

type Props = {
  children: any
}

const Modal = ({ children }: Props) => {
  const preventParentClick = (e: React.MouseEvent<HTMLDivElement>) => {
    e.preventDefault()
  }

  return (
    <div
      className="fixed inset-0 z-50 flex cursor-default items-center justify-center overflow-y-auto overflow-x-hidden bg-light-bgMain bg-opacity-70 outline-none focus:outline-none dark:bg-dark-bgMain dark:bg-opacity-50"
      onClick={preventParentClick}
    >
      <div className="relative my-6 mx-auto w-auto max-w-3xl">
        <div className="relative flex w-full flex-col rounded-lg border shadow-lg outline-none focus:outline-none dark:border-white">
          {children}
        </div>
      </div>
    </div>
  )
}

export default Modal
