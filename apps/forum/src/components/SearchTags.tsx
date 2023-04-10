import React, { useState } from "react";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { atom } from "recoil";
import { TagState } from "./Atoms";

const SearchTags: React.FC = () => {
  const [show, setShow] = useState(false);
  const toggleShow = () => setShow(!show);

  const tagState = useRecoilValue(TagState);

  const [selectedTags, setSelectedTags] = useState<[]>([]);
  const setTagsSelected = useSetRecoilState(TagState);
  {
    /* Later, use useEffect hook to fetch tags from the server side. */
  }
  const tags: Array<string> = [
    "alpha",
    "apple",
    "adios",
    "amigo",
    "amino",
    "bravo",
    "charlie",
    "delta",
  ];
  const academicTags: Array<string> = [
    "Courses",
    "Professors",
    "Seminars/Labs",
    "Research",
    "School Applications",
  ];
  const campusTags: Array<string> = [
    "Facilities",
    "Circles",
    "Events",
    "Scholarships",
  ];
  const lifeTags: Array<string> = [
    "Gourmet",
    "Culture",
    "Languages",
    "Housing",
    "Travels",
    "Events",
  ];
  const jobTags: Array<string> = ["Part-time", "Internships", "Job Hunting"];

  const [query, setQuery] = useState("");

  const handleClick = (item: string) => {
    if (!selectedTags.includes(item)) {
      setSelectedTags((selectedTags) => [...selectedTags, item]);
    }
  };

  const handleCloseModal = () => {
    toggleShow();
    setSelectedTags([]);
  };

  const handleClose = () => {
    setSelectedTags([]);
    setQuery("");
    setShow(false);
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    if (selectedTags.indexOf(value) === -1) {
      setSelectedTags([...selectedTags, value]);
    } else {
      setSelectedTags(selectedTags.filter((item) => item !== value));
    }
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    toggleShow();
    setTagsSelected(selectedTags);
    setQuery("");
  };

  return (
    <>
      <button
        type="button"
        className="border bg-light-lighter hover:bg-light-main cursor-pointer text-white text-center rounded-xl px-4 py-2"
        onClick={toggleShow}
      >
        Choose Tags
      </button>
      {/* -------------------------------------------------- */}
      <div
        className={`${
          !show && "hidden"
        } fixed flex flex-col top-1/4 left-1/3 w-1/3 min-h-1/3 border shadow-lg rounded-lg overflow-y-auto`}
      >
        <div className="modal-header flex sticky top-0 bg-white items-center justify-between p-4 border-b border-gray-200 rounded-t-md">
          <h5
            className="text-xl font-medium leading-normal text-gray-800 font-sans"
            id="exampleModalLabel"
          >
            Choose Your Tags
          </h5>
        </div>
        {/* SEARCH COMPONENT PART */}
        <div className="modal-body flex flex-col">
          <div>
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="h-full w-full px-4 py-4 shadow-lg rounded-md"
              placeholder="Search"
            />
          </div>
          <ul className="py-1 shadow-lg rounded-lg">
            {tags
              .filter((item) => {
                const searchTerm = query.toLowerCase();
                const existingTerm = item.toLocaleLowerCase();
                return searchTerm && existingTerm.startsWith(searchTerm);
              })
              .map((item) => (
                <li
                  className="px-4 py-2 hover:bg-gray-100 font-sans"
                  onClick={() => handleClick(item)}
                >
                  {item}
                </li>
              ))}
          </ul>

          <div className="grid grid-cols-3 gap-4 items-center justify-between relative p-4 border-b">
            {tags.map((tag) => (
              <button
                key={tag}
                className="inline-block bg-gray-200 w-20 hover:bg-gray-300 px-2 py-1 rounded-full mr-2 mb-2 font-sans"
                onClick={() => handleClick(tag)}
              >
                {tag}
              </button>
            ))}
          </div>
          {/* DISPLAY FOR CURRENT SELECTED TAGS */}
          {selectedTags.length > 0 && (
            <div className="my-2 w-full shadow-lg rounded-lg">
              {selectedTags.map((tag) => (
                <button
                  key={tag}
                  className="inline-block bg-gray-200 hover:bg-gray-300 px-2 py-1 rounded-full mr-2 mb-2 font-sans"
                  onClick={() =>
                    setSelectedTags(selectedTags.filter((item) => item !== tag))
                  }
                >
                  {tag}
                </button>
              ))}
            </div>
          )}
          <div className="modal-footer flex flex-wrap sticky bottom-0 w-full h-18 bg-white items-center justify-end p-4 border-t border-gray-200 rounded-b-md">
            <button
              type="submit"
              className="border bg-light-lighter hover:bg-light-main cursor-pointer text-white text-center rounded-xl px-4 py-2"
              onClick={handleSubmit}
            >
              Apply
            </button>
            <button
              type="button"
              className="border bg-light-lighter hover:bg-light-main cursor-pointer text-white text-center rounded-xl px-4 py-2"
              onClick={handleCloseModal}
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default SearchTags;
