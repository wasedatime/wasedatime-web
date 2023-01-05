import React from "react";
import { useState, useEffect } from "react";
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';
import { atom } from 'recoil';
import { TagState } from './Atoms'

const TagsModal: React.FC = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const toggleShow = () => setShow(!show);
  
  const testing = useRecoilState(TagState)

  const tags: Array<string> = ["tag1", "tag2", "tag3"];
  /* const tags = useRecoilValue(TagState) */
  const [selectedTags, setSelectedTags] = useState<[]>([])
  const setTagsSelected = useSetRecoilState(TagState);
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    if (selectedTags.indexOf(value) === -1) {
      setSelectedTags([...selectedTags, value]);
    } else {
      setSelectedTags(selectedTags.filter((item) => item !== value));
    }
  };
  console.log(selectedTags);
  
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    toggleShow();
    setTagsSelected(selectedTags)
  };
  console.log(testing)
  return (
    <>
      <button
        type="button"
        className="border bg-light-lighter hover:bg-light-main cursor-pointer text-white text-center rounded-xl px-4 py-2"
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
            </div>
            <div className="modal-body relative p-4">
              {tags.map(tag => (
                <div>
                <label key={tag}>
                  <input
                    type="checkbox"
                    value={tag}
                    checked={selectedTags.indexOf(tag) !== -1}
                    onChange={handleChange}
                  />
                  {tag}
                </label>
                </div>
              ))}
            </div>
            <div className="modal-footer flex flex-shrink-0 flex-wrap items-center justify-end p-4 border-t border-gray-200 rounded-b-md">
              <button
                type="button"
                className="border bg-light-lighter hover:bg-light-main cursor-pointer text-white text-center rounded-xl px-4 py-2"
                onClick={toggleShow}
              >
                Close
              </button>
              <button
                type="submit"
                className="border bg-light-lighter hover:bg-light-main cursor-pointer text-white text-center rounded-xl px-4 py-2"
                onClick={handleSubmit}
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
