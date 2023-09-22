import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Block from "./Block";
import DeleteIcon from "@mui/icons-material/Delete";
import { getIdToken } from "wasedatime-ui";
import API from "@aws-amplify/api";
import { ConfirmModal } from "@app/components/form/ConfirmModal";
import getSchoolIconPath from "@app/utils/get-school-icon-path";
import { Favorite, Share, Visibility } from "@mui/icons-material";
import TextsmsIcon from "@mui/icons-material/Textsms";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import boards from "@app/constants/boards.json";
import ThreadType from "@app/types/thread";
import { timeFormatter } from "@app/utils/timeFormatter";
type Props = {
  isPreview: boolean;
  thread: ThreadType;
  fromRoot?: boolean;
  text?: string;
  onDelete?: (threadId: string) => void;
};

const convertUrlsToLinks = (isPreview: boolean, text: string) => {
  if (!text) return null;

  const urlRegex = /https?:\/\/[^\s]+/g;
  const parts = text.split(urlRegex);
  const matches = text.match(urlRegex);

  return (
    <div>
      {parts.map((part, index) => (
        <React.Fragment key={index}>
          {part && (
            <span
              className={
                isPreview
                  ? "text-light-text1 dark:text-dark-text1 text-3xl"
                  : "text-light-text1 dark:text-dark-text1 text-3xl select-text cursor-text"
              }
            >
              {part}
            </span>
          )}
          {matches &&
            matches[index] &&
            (isPreview ? (
              <span className="text-blue-600">{matches[index]}</span>
            ) : (
              <span
                className="text-blue-600 text-2xl cursor-pointer"
                onClick={() => window.open(matches[index], "_blank")}
              >
                {matches[index]}
              </span>
            ))}
        </React.Fragment>
      ))}
    </div>
  );
};

const ThreadBlock = ({ isPreview, fromRoot, thread, onDelete }: Props) => {
  const [userToken, setUserToken] = useState("");
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);
  const [userLiked, setUserLiked] = useState(thread.user_liked);
  const [totalLikes, setTotalLikes] = useState(thread.total_likes);

  useEffect(() => {
    setUserLiked(thread.user_liked);
    setTotalLikes(thread.total_likes);
  }, [thread]);

  useEffect(() => {
    const updateLoginStatus = async () => {
      const idToken = await getIdToken();
      if (idToken && idToken.length > 0) {
        setUserToken(idToken);
      }
    };
    updateLoginStatus();
  }, [userToken]);

  const actions = [
    {
      icon: "",
      title: "",
      onClick: () => {},
    },
  ];

  const handleLike = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    updateThreadLikes();
  };

  const updateThreadLikes = async () => {
    console.log("triggered!");
    try {
      const action = userLiked ? "dislike" : "like";
      console.log(action);

      const response = await API.patch(
        "wasedatime-dev",
        `/forum/${thread.board_id}/${thread.thread_id}`,
        {
          body: {
            data: {
              tag_id: "NA",
              group_id: thread.group_id,
              title: thread.title,
              body: thread.body,
            },
            action,
          },
          headers: {
            "Content-Type": "application/json",
            Authorization: userToken,
          },
        }
      );
      if (response && response.success) {
        console.log(response);
        setUserLiked(!userLiked);

        if (userLiked) {
          setTotalLikes(totalLikes - 1);
        } else {
          setTotalLikes(totalLikes + 1);
        }
      }
    } catch (error) {
      console.error("Thread not updated successfully!:", error);
    }
  };

  const confirmDeleteThread = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setDeleteModalOpen(true);
  };

  const deleteThread = async () => {
    try {
      const response = await API.del(
        "wasedatime-dev",
        `/forum/${thread.board_id}/${thread.thread_id}`,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: userToken,
          },
        }
      );
      setDeleteModalOpen(false);
    } catch (error) {
      console.error("Thread not deleted successfully!:", error);
    }
    if (isPreview && onDelete) {
      onDelete(thread.thread_id);
    } else {
      navigate(-1);
    }
  };

  const handleShare = () => {
    const url = `${window.location.origin}/board/${thread.board_id}/${thread.thread_id}`;

    navigator.clipboard.writeText(url).then(
      () => {
        console.log("Successfully copied to clipboard");
      },
      (err) => {
        console.error("Could not copy text: ", err);
      }
    );
  };

  const getTitleBySlug = (inputSlug: string) => {
    const result = boards.find((board) => board.slug === inputSlug);
    return result ? result.title : "Error";
  };

  const navigate = useNavigate();

  const time = timeFormatter(thread);
  const renderContent = () => {
    return (
      <div
        className={
          isPreview
            ? `border-2 mb-10 mr-4 rounded-xl shadow-lg p-6 standard-style-hover max-w-[290px] lg:max-w-[900px]`
            : `cursor-default bg-light-card1 standard-style`
        }
      >
        {!isPreview && (
          <div
            onClick={() => navigate(-1)}
            className="mt-2 cursor-pointer text-light-text1 dark:text-dark-text1 hover:text-light-text2 dark:hover:text-dark-text2 w-fit"
          >
            <ArrowBackIcon fontSize="large" />
          </div>
        )}
        {/* ^ This line goes to parent board on click while in thread */}
        <div className={`px-2`}>
          <div className="flex justify-between mt-2">
            <h1 className="text-4xl font-bold mb-auto text-light-main dark:text-dark-main text-3xl">
              {getTitleBySlug(thread.board_id)}
            </h1>

            <div className="flex justify-center flex-col items-center">
              {/* ToDo: create component for tag within Thread Block */}
              {thread.group_id && (
                <img
                  src={getSchoolIconPath(thread.group_id, "en")}
                  width={40}
                  height={40}
                />
              )}

              {/* ToDO: There is no author for now will add later on */}
              {/* <h2 className="text-sm text-light-text2 my-auto">
                    {thread.author}
                  </h2> */}
              {/* editModalOpen && (
                    <EditThreadForm
                      originalTitle={thread.title}
                      originalBody={thread.body}
                      updateThread={updateThread}
                      closeForm={() => setEditModalOpen(false)}
                    />
                  ) */}
            </div>
          </div>
          <h2
            className="justify-left pt-4 text-light-text1 dark:text-dark-text1"
            style={{ whiteSpace: "pre-line" }}
          >
            {convertUrlsToLinks(isPreview, thread.body)}
          </h2>
          <h2 className="text-xs mt-5">Posted at {time}</h2>
        </div>
        {/* <div className="inline-block text-blue-600 rounded-lg pl-2 pt-2">
              {" "}
              {`# ${thread.tag_id}`}
            </div> */}
        <hr className="mx-2 pt-2 mt-6" />
        {/* horizontal line break */}
        <div className="flex flex-row justify-evenly pt-2 items-center">
          {/* The down panel that has like button, views in total, etc...*/}

          <div className="flex flex-row items-center justify-center">
            <button onClick={handleLike} className="clipboard-icon group">
              <Favorite
                color={userLiked ? "error" : undefined}
                fontSize="large"
              />
              <span className="clipboard-tooltip group-hover:scale-150 text-[144px]">
                Like!
              </span>
            </button>
            <h3>
              <span>{"  "}</span>
              <span className="text-3xl">{totalLikes}</span>
            </h3>
          </div>
          <h3 className="flex flex-row items-center justify-center gap-2">
            <TextsmsIcon
              fontSize="large"
              color={thread.new_comment && thread.mod ? "success" : "inherit"}
            />
            {/* <span>{"  "}</span> */}
            <span className="text-3xl">{thread.comment_count}</span>
          </h3>
          <button className="clipboard-icon group" onClick={handleShare}>
            <Share fontSize="large" />
            <span className="clipboard-tooltip group-hover:scale-150">
              Link Copied!
            </span>
          </button>
          <h3 className="flex flex-row items-center justify-center gap-2">
            <Visibility fontSize="large" />{" "}
            <span className="text-3xl">{thread.views}</span>
          </h3>
          {
            // userToken?.length > 0 && thread.uid === userToken && (
            userToken?.length > 0 && thread.mod === true && (
              <div>
                {/* <button onClick={openThreadEditForm}>
                          <EditIcon fontSize="large" color="warning" />
                        </button> */}
                <button onClick={confirmDeleteThread}>
                  <DeleteIcon fontSize="large" color="error" />
                </button>
                {deleteModalOpen && (
                  <ConfirmModal
                    questionText="Are you sure to delete this thread?"
                    confirmText="Yes, delete it"
                    cancelText="No, keep it"
                    confirmAction={deleteThread}
                    cancelAction={() => setDeleteModalOpen(false)}
                  />
                )}
              </div>
            )
          }
        </div>
      </div>
    );
  };

  return (
    <Block actions={actions}>
      {isPreview ? (
        <Link
          to={
            fromRoot
              ? `${thread.board_id}/${thread.thread_id}`
              : `${thread.thread_id}`
          }
        >
          {renderContent()}
        </Link>
      ) : (
        renderContent()
      )}
    </Block>
  );
};

export default ThreadBlock;
