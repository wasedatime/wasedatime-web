import React, { ChangeEvent, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import API from "@aws-amplify/api";
import { CloseIcon } from "@app/components/icons/CloseIcon";
import boards from "@app/constants/boards.json";
import tagsData from "@app/constants/tags.json";
import groupsData from "@app/constants/groups.json";
import { SignInModal, getIdToken } from "wasedatime-ui";
import { useTranslation } from "react-i18next";
import { getUserId, getUserIdToken } from "@app/utils/auth";

const CreateThread = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [expandTags, setExpandTags] = useState(false);
  const [expandSchool, setExpandSchool] = useState(false);
  const [userToken, setUserToken] = useState("");
  const [isSignInModalOpen, setSignInModalOpen] = useState(false);
  const [textContent, setTextContent] = useState("");
  const [titleContent, setTitleContent] = useState("");
  const [tags, setTags] = useState([]);
  const [selectedTag, setSelectedTag] = useState(null);
  const [expandedDropdown, setExpandedDropdown] = useState(false);

  // Tags and Group buttons might be best moved to their respective components but this is how I will leave it for now.

  const { boardSlug } = useParams();
  const { t } = useTranslation();

  useEffect(() => {
    setIsExpanded(false);
    setExpandTags(false);
    setExpandSchool(false);
  }, [boardSlug]);

  useEffect(() => {
    const board = boards.find((board) => board.slug === boardSlug);
    if (board) {
      setTags(board.tags);
    } else {
      setTags([]);
    }
  }, [boardSlug]);

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
    if (!titleContent || titleContent.trim().length === 0) {
      alert("Please enter a title");
      return;
    }
    if (textContent.trim().length <= 0 || textContent.trim().length > 2000)
      return;

    let idToken = userToken;
    if (idToken?.length <= 0) {
      idToken = await getIdToken();
      if (idToken?.length <= 0) return;
    }

    // TODO: Implement submitting new thread API

    try {
      const response = await API.post("wasedatime-dev", `/forum/${boardSlug}`, {
        body: {
          data: {
            body: textContent,
            title: titleContent,
            tag_id: selectedTag.title,
            group_id: "SILS",
            univ_id: "1",
          },
        },
        headers: {
          "Content-Type": "application/json",
          Authorization: idToken,
        },
      });
      setTextContent("");
    } catch (error) {}
    setTitleContent("");
    setTextContent("");
    window.location.reload();
  };

  const findBoardIndex: number = boards.findIndex(
    (board) => board.slug == boardSlug
  );

  return isExpanded ? (
    <div className="relative">
      <div className="border-2 text-start text-black dark:text-white p-2 border-light-main rounded-lg">
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
          <button
            className="relative text-black-900 border-light-main border mx-4 px-4 rounded-lg hover:text-white hover:bg-light-main"
            onClick={() => setExpandTags(!expandTags)}
          >
            {expandTags ? (
              <div className="bg-light-bgSide text-black border-light-main border absolute h-32 w-32 top-8 left-0 rounded-lg z-10">
                {tags.map((tag) => (
                  <div
                    key={tag.id}
                    onClick={() => handleTagClick(tag)}
                    className={`tag ${
                      selectedTag && selectedTag.id === tag.id
                        ? "tag-selected"
                        : ""
                    }`}
                  >
                    {tag.title}
                  </div>
                ))}
              </div>
            ) : null}

            <p>{selectedTag ? selectedTag.title : "Tags"}</p>
          </button>
          <button
            className="relative border-light-main border px-4 rounded-lg hover:text-white hover:bg-light-main"
            onClick={() => setExpandSchool(!expandSchool)}
          >
            School
            {expandSchool ? (
              <div className="bg-light-bgSide border border-light-main absolute h-32 w-32 top-8 left-0 rounded-lg z-10">
                Text
              </div>
            ) : null}
          </button>
        </div>
        <button
          className="border-light-main border mx-4 px-4 mx-4 py-1 rounded-lg text-white bg-light-lighter hover:bg-light-darker"
          onClick={handleSubmit}
        >
          Submit Post
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
