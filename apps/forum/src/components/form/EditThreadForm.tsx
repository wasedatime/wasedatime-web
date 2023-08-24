import React, { ChangeEvent, useState } from "react";
import Modal from "@app/components/common/Modal";

type Props = {
  originalTitle: string;
  originalBody: string;
  updateThread: (title: string, body: string) => void;
  closeForm: () => void;
}

export const EditThreadForm = ({ originalTitle, originalBody, updateThread, closeForm }: Props) => {
  const [title, setTitle] = useState(originalTitle);
  const [body, setBody] = useState(originalBody);

  const handleTitleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setTitle(e.target.value);
  };

  const handleBodyChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setBody(e.target.value);
  };

  return (
    <Modal>
      <div>
        <div className="relative p-6 flex-auto">
          <div className="border-0 text-start text-black dark:text-white p-2 border-light-main rounded-lg">
            <textarea
              placeholder={`Updating title...`}
              className="bg-gray-50 border-b-2 overflow-y-hidden border-light-main h-10 pl-2 pb-2 mb-2 w-full hover:outline-0 focus:outline-0"
              value={title}
              onChange={handleTitleChange}
            />
            <textarea
              placeholder={`Updating content...`}
              className="bg-gray-50 border-b-2 border-light-main h-36 pl-2 pb-28 w-full hover:outline-0 focus:outline-0"
              value={body}
              onChange={handleBodyChange}
            />
          </div>
        </div>
        <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
          <button
            className="text-white bg-light-main active:bg-yellow-700 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
            type="button"
            onClick={() => updateThread(title, body)}
          >
            Submit
          </button>
          <button
            className="text-light-main background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1"
            type="button"
            onClick={closeForm}
          >
            Cancel
          </button>
        </div>
      </div>
    </Modal>
  )
}