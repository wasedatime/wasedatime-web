import React, { useState } from "react";

type Props = {
  children: any
}

const Modal = ({ children }: Props) => {
  const preventParentClick = (e: React.MouseEvent<HTMLDivElement>) => {
    e.preventDefault();
  }

  return (
    <div className="bg-light-bgMain dark:bg-dark-bgMain bg-opacity-70 dark:bg-opacity-50 flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none cursor-default" onClick={preventParentClick}>
      <div className="relative w-auto my-6 mx-auto max-w-3xl">
        <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
          {children}
        </div>
      </div>
    </div>
  )
}

export default Modal;