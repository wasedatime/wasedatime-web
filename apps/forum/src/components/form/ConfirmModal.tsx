import React from "react";
import Modal from "@app/components/common/Modal";

type Props = {
  questionText: string;
  confirmText: string;
  cancelText: string;
  confirmAction: () => void;
  cancelAction: () => void;
};

export const ConfirmModal = ({ questionText, confirmText, cancelText, confirmAction, cancelAction }: Props) => {
  return (
    <Modal>
      <div>
        <div className="relative p-6 flex-auto">
          <h3 className="text-2xl">{questionText}</h3>
        </div>
        <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
          <button
            className="text-white bg-light-main active:bg-yellow-700 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
            type="button"
            onClick={confirmAction}
          >
            {confirmText}
          </button>
          <button
            className="text-light-main background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1"
            type="button"
            onClick={cancelAction}
          >
            {cancelText}
          </button>
        </div>
      </div>
    </Modal>
  );
}