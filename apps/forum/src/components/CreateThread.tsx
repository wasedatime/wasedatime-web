import React, { ChangeEvent, useEffect, useState, Fragment } from "react";
import { useParams } from "react-router-dom";
import API from "@aws-amplify/api";
import { CloseIcon } from "@app/components/icons/CloseIcon";
import boards from "@app/constants/boards.json";
import { SignInModal, getIdToken } from "wasedatime-ui";
import { useTranslation } from "react-i18next";
import SchoolFilterForm from "./common/SchoolFilter";
import { Menu, Transition } from "@headlessui/react";
import ThreadType from "@app/types/thread";
import TagType from "@app/types/tag";

interface CreateThreadProps {
  onNewThread: (newThread: ThreadType) => void;
}

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const CreateThread = ({ onNewThread }: CreateThreadProps) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [expandSchool, setExpandSchool] = useState(false);
  const [userToken, setUserToken] = useState("");
  const [isSignInModalOpen, setSignInModalOpen] = useState(false);
  const [textContent, setTextContent] = useState("");
  const [titleContent, setTitleContent] = useState("");
  const [tags, setTags] = useState<TagType[]>([]);
  const [selectedBoard, setSelectedBoard] = useState("");
  const [selectedTag, setSelectedTag] = useState<TagType | null>(null);
  const [selectedSchool, setSelectedSchool] = useState("");

  // Tags and Group buttons might be best moved to their respective components but this is how I will leave it for now.
  const { boardSlug } = useParams();
  const { t } = useTranslation();

  useEffect(() => {
    setSelectedBoard(boardSlug || "");
    setIsExpanded(false);
    setExpandSchool(false);
  }, [boardSlug]);

  useEffect(() => {
    const board = boards.find((board) => board.slug === selectedBoard);

    if (board) {
      setTags(board.tags);
    } else {
      // Collect all tags from all boards
      const allTags = boards.reduce<TagType[]>((acc, currBoard) => {
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
      alert("Please choose a Topic");
      return;
    }

    // Require a Title
    // if (!titleContent || titleContent.trim().length === 0) {
    //   alert("Please enter a title");
    //   return;
    // }

    // Require a Body
    const trimmedTextContent = textContent.trim();

    if (trimmedTextContent.length <= 0) {
      alert("Please enter a body");
      return;
    } else if (trimmedTextContent.length > 2000) {
      alert("The body is too long. Please limit it to 2000 characters.");
      return;
    }

    // Require a Tag
    // if (!selectedTag) {
    //   alert("Select a tag");
    //   return;
    // }

    // Require a School
    if (!selectedSchool) {
      alert("Select a school");
      return;
    }

    let idToken = userToken;
    if (idToken?.length <= 0) {
      idToken = await getIdToken();
      if (idToken?.length <= 0) return;
    }

    try {
      const response = await API.post(
        "wasedatime-dev",
        `/forum/${selectedBoard}`,
        {
          body: {
            data: {
              body: textContent,
              title: "default",
              tag_id: "default",
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

      const newThread: ThreadType = response.data;
      onNewThread(newThread);

      setTitleContent("");
      setTextContent("");
      setSelectedBoard("");
      setSelectedTag(null);
    } catch (error) {
      console.log(error);
    }
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
          <Menu.Button className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-2xl font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 standard-style-hover">
            {/* Current Board */}
            {slug
              ? getTitleBySlug(slug)
              : selectedBoard
              ? getTitleBySlug(selectedBoard)
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
          <Menu.Items className="absolute left-0 z-10 mt-2 w-56 origin-top-right rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
            <div className="py-1">
              {boards.map((board) => (
                <Menu.Item key={board.id}>
                  {/* Please add logic that changes the board here */}
                  {({ active }) => (
                    <button
                      className={classNames(
                        active
                          ? "bg-light-bgSide text-light-text2"
                          : "text-light-text2",
                        "block w-full px-4 py-2 text-left text-3xl standard-style-hover"
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
      <div className="border-2 text-start text-black dark:text-white bg-light-card1 dark:bg-dark-bgMain dark:text-dark-text1 dark:shadow-none p-2 border-light-main dark:border-dark-main rounded-lg">
        <BoardDropdownMenu slug={boardSlug} />
        {/* <textarea
          placeholder={`Enter Title`}
          className="border-b-2 overflow-y-hidden border-light-main dark:border-dark-main h-10 pl-2 pb-2 w-full hover:outline-0 focus:outline-0 standard-style"
          value={titleContent}
          onChange={handleTitleChange}
        /> */}
        <textarea
          placeholder={`Anything interesting?`}
          className=" h-50 pl-2 pb-28 pt-2 w-full hover:outline-0 focus:outline-0 standard-style text-3xl overflow-y-hidden"
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
        <div className="my-auto flex flex-row gap-x-2">
          {/* {selectedBoard && (
            <Menu as="div" className="relative inline-block text-left">
              <div>
                <Menu.Button className="inline-flex w-full justify-center gap-x-1.5 rounded-md px-3 py-2 text-sm font-semibold shadow-sm ring-1 ring-inset ring-gray-300 standard-style-hover">
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
                {selectedBoard && (
                  <Menu.Items className="absolute left-0 z-10 mt-2 w-56 origin-top-right rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none standard-style">
                    <div className="py-1">
                      {tags.map((tag) => (
                        <Menu.Item key={tag.id}>
                          {({ active }) => (
                            <button
                              onClick={() => handleTagClick(tag)}
                              className={classNames(
                                active
                                  ? "bg-light-bgSide text-light-text2 dark:bg-dark-bgSide dark:text-dark-text2"
                                  : "text-gray-700 dark:text-dark-text2",
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
                )}
              </Transition>
            </Menu>
          )} */}
          <button
            className="inline-flex w-full justify-center gap-x-1.5 rounded-md px-3 py-2 text-sm font-semibold shadow-sm ring-1 ring-inset ring-gray-300 standard-style-hover"
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
          className="border-light-main border mx-4 px-4 py-1 rounded-lg text-white bg-light-lighter hover:bg-light-darker text-3xl"
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
