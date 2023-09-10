import React, { ChangeEvent, useEffect, useState, Fragment } from "react";
import { useParams } from "react-router-dom";
import API from "@aws-amplify/api";
import { CloseIcon } from "@app/components/icons/CloseIcon";
import boards from "@app/constants/boards.json";
import tagsData from "@app/constants/tags.json";
import groupsData from "@app/constants/groups.json";
import { SignInModal, getIdToken } from "wasedatime-ui";
import { useTranslation } from "react-i18next";
import { getUserId, getUserIdToken } from "@app/utils/auth";
import SchoolFilterForm from "./common/SchoolFilter";
import getSchoolIconPath from "@app/utils/get-school-icon-path";
import { Menu, Transition } from "@headlessui/react";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const CreateThread = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [expandTags, setExpandTags] = useState(false);
  const [expandSchool, setExpandSchool] = useState(false);
  const [userToken, setUserToken] = useState("");
  const [isSignInModalOpen, setSignInModalOpen] = useState(false);
  const [textContent, setTextContent] = useState("");
  const [titleContent, setTitleContent] = useState("");
  const [tags, setTags] = useState([]);
  const [selectedBoard, setSelectedBoard] = useState("");
  const [selectedTag, setSelectedTag] = useState(null);
  const [selectedSchool, setSelectedSchool] = useState("");
  const [expandedDropdown, setExpandedDropdown] = useState(false);

  // Tags and Group buttons might be best moved to their respective components but this is how I will leave it for now.
  const { boardSlug } = useParams();
  const { t } = useTranslation();

  useEffect(() => {
    setSelectedBoard(boardSlug);
    setIsExpanded(false);
    setExpandTags(false);
    setExpandSchool(false);
  }, [boardSlug]);

  useEffect(() => {
    console.log(selectedBoard);
  }, [selectedBoard]);

  useEffect(() => {
    const board = boards.find((board) => board.slug === boardSlug);

    if (board) {
      setTags(board.tags);
    } else {
      // Collect all tags from all boards
      const allTags = boards.reduce((acc, currBoard) => {
        return acc.concat(currBoard.tags);
      }, []);

      setTags(allTags);
    }
  }, [boardSlug]);

  useEffect(() => {
    const board = boards.find((board) => board.slug === selectedBoard);

    if (board) {
      setTags(board.tags);
    } else {
      // Collect all tags from all boards
      const allTags = boards.reduce((acc, currBoard) => {
        return acc.concat(currBoard.tags);
      }, []);

      setTags(allTags);
    }
  }, [selectedBoard]);

  const handleOpenForm = async () => {
    if (userToken?.length > 0) {
      setIsExpanded(true);
    } else {
      const idToken = await getIdToken();
      if (idToken?.length > 0) {
        setUserToken(idToken);
        setIsExpanded(true);
      } else {
        setSignInModalOpen(true);
      }
    }
  };

  const handleDropdown = (dropDown) => {
    if (expandedDropdown === dropDown) {
      setExpandedDropdown(null);
    } else {
      setExpandedDropdown(tags);
    }
  };

  const handleTitleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setTitleContent(e.target.value);
  };

  const handleBodyChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setTextContent(e.target.value);
  };

  const handleTagClick = (tag: any) => {
    setSelectedTag(tag);
  };

  const handleSubmit = async () => {
    // Require a Board
    // If current board isn't chosen, then output this
    if (!selectedBoard) {
      alert("Please choose a board");
      return;
    }

    // Require a Title
    if (!titleContent || titleContent.trim().length === 0) {
      alert("Please enter a title");
      return;
    }

    // Require a Body
    if (textContent.trim().length <= 0 || textContent.trim().length > 2000)
      return;

    let idToken = userToken;
    if (idToken?.length <= 0) {
      idToken = await getIdToken();
      if (idToken?.length <= 0) return;
    }

    console.log(selectedBoard);

    try {
      const response = await API.post(
        "wasedatime-dev",
        `/forum/${selectedBoard}`,
        {
          body: {
            data: {
              body: textContent,
              title: titleContent,
              tag_id: selectedTag.title,
              group_id: selectedSchool,
              univ_id: "1",
            },
          },
          headers: {
            "Content-Type": "application/json",
            Authorization: idToken,
          },
        }
      );
      setTextContent("");
    } catch (error) {}
    setTitleContent("");
    setTextContent("");
    window.location.reload();
  };

  const findBoardIndex: number = boards.findIndex(
    (board) => board.slug == boardSlug
  );

  const getTitleBySlug = (inputSlug: string) => {
    const result = boards.find((board) => board.slug === inputSlug);
    return result ? result.title : "What's the topic?";
  };

  const BoardDropdownMenu = ({ slug }: { slug?: string }) => {
    // Menu would not show if you are in a board
    return slug ? null : (
      <Menu as="div" className="relative inline-block text-left">
        <div>
          <Menu.Button className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
            {/* Current Board */}
            {slug
              ? getTitleBySlug(slug)
              : selectedBoard
              ? selectedBoard
              : "What's the Topic?"}
          </Menu.Button>
        </div>

        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="absolute left-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
            <div className="py-1">
              {boards.map((board) => (
                <Menu.Item key={board.id}>
                  {/* Please add logic that changes the board here */}
                  {({ active }) => (
                    <button
                      className={classNames(
                        active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                        "block w-full px-4 py-2 text-left text-sm"
                      )}
                      onClick={() => setSelectedBoard(board.slug)}
                    >
                      {board.title}
                    </button>
                  )}
                </Menu.Item>
              ))}
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
    );
  };

  return isExpanded ? (
    <div className="relative">
      <div className="border-2 text-start text-black dark:text-white p-2 border-light-main rounded-lg">
        <BoardDropdownMenu slug={boardSlug} />
        <textarea
          placeholder={`Enter Title`}
          className="border-b-2 overflow-y-hidden border-light-main h-10 pl-2 pb-2 w-full hover:outline-0 focus:outline-0"
          value={titleContent}
          onChange={handleTitleChange}
        />
        <textarea
          placeholder={`Anything interesting?`}
          className=" h-36 pl-2 pb-28 w-full hover:outline-0 focus:outline-0"
          value={textContent}
          onChange={handleBodyChange}
        />
      </div>
      <h1
        className="absolute top-0 right-2 m-1 p-1 hover:text-light-main cursor-pointer"
        onClick={() => setIsExpanded(false)}
      >
        <CloseIcon />
      </h1>
      <div className="absolute bottom-0 left-2 w-full flex mb-3 mt-3 text-sm justify-between">
        <div className="my-auto">
          <Menu as="div" className="relative inline-block text-left">
            <div>
              <Menu.Button
                className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                // onClick={() => setExpandTags(!expandTags)}
              >
                {selectedTag ? selectedTag.title : "Tags"}
              </Menu.Button>
            </div>

            <Transition
              as={Fragment}
              enter="transition ease-out duration-100"
              enterFrom="transform opacity-0 scale-95"
              enterTo="transform opacity-100 scale-100"
              leave="transition ease-in duration-75"
              leaveFrom="transform opacity-100 scale-100"
              leaveTo="transform opacity-0 scale-95"
            >
              <Menu.Items className="absolute left-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                <div className="py-1">
                  {tags.map((tag) => (
                    <Menu.Item key={tag.id}>
                      {({ active }) => (
                        <button
                          onClick={() => handleTagClick(tag)}
                          className={classNames(
                            active
                              ? "bg-gray-100 text-gray-900"
                              : "text-gray-700",
                            "block w-full px-4 py-2 text-left text-sm",
                            selectedTag && selectedTag.id === tag.id
                              ? "tag-selected"
                              : ""
                          )}
                        >
                          {tag.title}
                        </button>
                      )}
                    </Menu.Item>
                  ))}
                </div>
              </Menu.Items>
            </Transition>
          </Menu>
          {/* <button
            className="relative text-black-900 border-light-main border mx-4 px-4 rounded-md hover:text-white hover:bg-light-main"
            onClick={() => setExpandTags(!expandTags)}
          >
            {expandTags ? (
              <div className="bg-light-bgSide text-black border-light-main border absolute max-h-[200px] w-32 top-6 left-0 rounded-md z-10 overflow-y-auto">
                {tags.map((tag) => (
                  <div
                    key={tag.id}
                    onClick={() => handleTagClick(tag)}
                    className={`tag ${
                      selectedTag && selectedTag.id === tag.id
                        ? "tag-selected"
                        : ""
                    } hover:bg-gray-200 cursor-pointer`}
                  >
                    {tag.title}
                  </div>
                ))}
              </div>
            ) : null}

            <p>{selectedTag ? selectedTag.title : "Tags"}</p>
          </button> */}
          <button
            className="relative border-light-main border px-4 rounded-md hover:text-white hover:bg-light-main"
            onClick={() => setExpandSchool(!expandSchool)}
          >
            {expandSchool ? (
              <SchoolFilterForm
                isOpen={expandSchool}
                setOpen={setExpandSchool}
                setSchool={setSelectedSchool}
              />
            ) : null}
            <p>{selectedSchool ? selectedSchool : "School"}</p>
          </button>
        </div>
        <button
          className="border-light-main border mx-4 px-4 py-1 rounded-lg text-white bg-light-lighter hover:bg-light-darker"
          onClick={handleSubmit}
        >
          Post
        </button>
      </div>
    </div>
  ) : (
    <div>
      <div className="cursor-pointer" onClick={handleOpenForm}>
        <h1 className="border-2 p-2 rounded-lg border-light-main">
          Anything interesting?
        </h1>
      </div>
      <SignInModal
        isModalOpen={isSignInModalOpen}
        closeModal={() => setSignInModalOpen(false)}
        t={t}
      />
    </div>
  );
};

export default CreateThread;
