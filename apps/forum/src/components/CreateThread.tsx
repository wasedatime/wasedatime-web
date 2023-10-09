import React, {
  ChangeEvent,
  useEffect,
  useState,
  Fragment,
  useRef,
} from "react";
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
import ImageIcon from "@mui/icons-material/Image";
import threadPayload from "@app/types/threadPayload";
import AddPhotoAlternateIcon from "@mui/icons-material/AddPhotoAlternate";

interface CreateThreadProps {
  onNewThread: (newThread: ThreadType) => void;
}

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const CreateThread = ({ onNewThread }: CreateThreadProps) => {
  const [expandSchool, setExpandSchool] = useState(false);
  const [isSignInModalOpen, setSignInModalOpen] = useState(false);
  const [userToken, setUserToken] = useState("");
  const [textContent, setTextContent] = useState("");
  const [titleContent, setTitleContent] = useState("");
  const [tags, setTags] = useState<TagType[]>([]);
  const [selectedBoard, setSelectedBoard] = useState("");
  const [selectedTag, setSelectedTag] = useState<TagType | null>(null);
  const [selectedSchool, setSelectedSchool] = useState("");
  const [fileName, setFileName] = useState<string | null>(null);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [fileType, setFileType] = useState<string | null>(null);
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);
  const [isExpanded, setIsExpanded] = useState(false);
  const textareaRef = useRef(null);

  // Tags and Group buttons might be best moved to their respective components but this is how I will leave it for now.
  const { boardSlug } = useParams();
  const { t } = useTranslation();

  useEffect(() => {
    const trimmedTextContent = textContent.trim();

    const isInvalidToken = !userToken || userToken.length <= 0;
    const isInvalidBoard = !selectedBoard;
    const isInvalidTextContent =
      !textContent ||
      trimmedTextContent.length <= 0 ||
      trimmedTextContent.length > 2000;
    const isInvalidSchool = !selectedSchool;

    // Enable button only if all conditions are false (i.e., all are valid)
    setIsButtonDisabled(
      isInvalidToken ||
        isInvalidBoard ||
        isInvalidTextContent ||
        isInvalidSchool
    );
  }, [userToken, selectedBoard, textContent, selectedSchool]);

  useEffect(() => {
    setSelectedBoard(boardSlug || "");
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
    } else {
      const idToken = await getIdToken();
      if (idToken?.length > 0) {
        setUserToken(idToken);
      } else {
        setSignInModalOpen(true);
      }
    }
  };

  const handleTitleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setTitleContent(e.target.value);
  };

  const handleBodyChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    const textArea = textareaRef.current!;
    textArea.style.height = "auto";
    textArea.style.height = `${textArea.scrollHeight}px`;
    setTextContent(e.target.value);
  };

  const handleTagClick = (tag: any) => {
    setSelectedTag(tag);
  };

  const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files ? e.target.files[0] : null;
    if (file) {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onloadend = () => {
        const base64data = reader.result as string;
        setSelectedFile(base64data); // Store the base64-encoded image
        setFileType(file.type); // Store the MIME type of the file
      };
      setFileName(file.name); // Store the name of the selected file
    }
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
      const payload: threadPayload = {
        body: textContent,
        title: "default",
        tag_id: "default",
        group_id: selectedSchool,
        univ_id: "1",
        board_id: selectedBoard,
      };

      if (selectedFile) {
        payload.image = selectedFile;
        payload.contentType = fileType || "";
        payload.fileName = fileName || "image";
      }
      const response = await API.post(
        "wasedatime-dev",
        `/forum/${selectedBoard}`,
        {
          body: {
            data: payload,
          },
          headers: {
            "Content-Type": "application/json",
            Authorization: idToken,
          },
        }
      );

      const fetchedThread: ThreadType = response.data;
      const completeThread = {
        ...fetchedThread,
        total_likes: 0,
        user_liked: false,
        comment_count: 0,
        new_comment: false,
      };
      onNewThread(completeThread);

      setTitleContent("");
      setTextContent("");
      setSelectedBoard("");
      setSelectedSchool("");
      setSelectedFile(null);
      setFileType(null);
      setFileName(null);
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
              : "Topic"}
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

  return (
    <div>
      <div className="relative">
        <div className="border-t-4 border-l-4 border-r-4 p-2 text-start text-black dark:text-white bg-light-card1 dark:bg-dark-bgMain dark:text-dark-text1 dark:shadow-none p-2 border-light-main dark:border-dark-main rounded-t-lg flex justify-between items-start relative">
          {/* Added 'relative' to the parent div's class list */}

          <textarea
            placeholder={`Anything interesting?`}
            className="pl-2 pt-2 pb-10 w-full hover:outline-0 focus:outline-0 standard-style text-3xl "
            value={textContent}
            onChange={handleBodyChange}
            onFocus={handleOpenForm}
            ref={textareaRef}
          />

          <button
            className={`absolute bottom-0 right-0 border m-4 px-4 py-2 rounded-lg text-3xl z-10 ${
              isButtonDisabled
                ? "bg-gray-400 text-gray-700 hover:bg-gray-400 cursor-not-allowed"
                : "border-light-main text-white bg-light-lighter hover:bg-light-darker"
            }`}
            onClick={isButtonDisabled ? () => {} : handleSubmit}
            disabled={isButtonDisabled}
          >
            Post
          </button>
        </div>
        <div className=" bottom-0 border-l-4 border-r-4 border-b-4 rounded-b-lg p-2 border-light-main dark:border-dark-main border-2 left-2 w-full flex text-sm justify-between items-center">
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
          <div className="w-1/3 p-2 flex justify-center items-center">
            <BoardDropdownMenu slug={boardSlug} />
          </div>
          <div className="w-1/3 p-2 flex justify-center items-center">
            <button
              className="inline-flex  gap-x-1.5 rounded-md bg-white px-3 py-2 text-2xl font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 standard-style-hover"
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
          <div className="uploader flex justify-center items-center w-1/3 p-2">
            <label htmlFor="imageUpload" className="cursor-pointer">
              {fileName ? (
                <span>{fileName}</span>
              ) : (
                <AddPhotoAlternateIcon style={{ fontSize: "40px" }} />
              )}
            </label>
            <input
              type="file"
              id="imageUpload"
              accept="image/png, image/jpeg, image/gif" // allow only images
              className="hidden"
              onChange={handleImageChange}
            />
          </div>
        </div>
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
{
  /* <textarea
          placeholder={`Enter Title`}
          className="border-b-2 overflow-y-hidden border-light-main dark:border-dark-main h-10 pl-2 pb-2 w-full hover:outline-0 focus:outline-0 standard-style"
          value={titleContent}
          onChange={handleTitleChange}
        /> */
}
