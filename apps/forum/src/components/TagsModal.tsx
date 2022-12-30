import React from "react";
import { useState, useEffect } from "react";

const TagsModal: React.FC = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const toggleShow = () => setShow(!show);
  

  const tags: Array<string> = ["tag1", "tag2", "tag3"];
  const [selectedTags, setSelectedTags] = useState([]);

  return (
    <>
      <button
        type="button"
        className="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
        onClick={toggleShow}
      >
        Choose Tags
      </button>

      {/* avoid using undefined class name and attributes (modal and data-bs-blablabla are from the library Bootstrap, which is not installed in Forum app) */}
      {/* Why not making use of the state `show` since you are already defined one? */}
      {/* TODO for KJ: Remove all undefined classnames and attributes (those from Bootstrap) (Hao removed some but plz check if there are other not removed ones) */}
      {/* TODO for KJ: Try to adjust the size and margin (You can do it after moving the modal to board menu) */}
      <div
        className={`${!show && "hidden"} fixed top-1/4 left-1/4 border outline-none overflow-x-hidden overflow-y-auto`}
        id="1"
        tabIndex={-1}
      >
        <div className="modal-dialog relative w-auto pointer-events-none">
          <div className="modal-content border-none shadow-lg relative flex flex-col w-full pointer-events-auto bg-white bg-clip-padding rounded-md outline-none text-current">
            <div className="modal-header flex flex-shrink-0 items-center justify-between p-4 border-b border-gray-200 rounded-t-md">
              <h5
                className="text-xl font-medium leading-normal text-gray-800"
                id="exampleModalLabel"
              >
                Choose Your Tags
              </h5>
              <button
                type="button"
                className="btn-close box-content w-4 h-4 p-1 text-black border-none rounded-none opacity-50 focus:shadow-none focus:outline-none focus:opacity-100 hover:text-black hover:opacity-75 hover:no-underline"
              ></button>
            </div>
            <div className="modal-body relative p-4">...</div>
            <div className="modal-footer flex flex-shrink-0 flex-wrap items-center justify-end p-4 border-t border-gray-200 rounded-b-md">
              <button
                type="button"
                className="inline-block px-6 py-2.5 bg-purple-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-purple-700 hover:shadow-lg focus:bg-purple-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-purple-800 active:shadow-lg transition duration-150 ease-in-out"
              >
                Close
              </button>
              <button
                type="button"
                className="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out ml-1"
              >
                Apply
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TagsModal;
