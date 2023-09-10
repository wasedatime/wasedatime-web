import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Block from "./Block";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { getIdToken } from "wasedatime-ui";
import API from "@aws-amplify/api";
import { ConfirmModal } from "@app/components/form/ConfirmModal";
import { EditThreadForm } from "@app/components/form/EditThreadForm";
import getSchoolIconPath from "@app/utils/get-school-icon-path";
import { Visibility } from "@mui/icons-material";

type Props = {
  isPreview: boolean;
  thread: any;
  fromRoot?: boolean;
  text?: string;
};

const convertUrlsToLinks = ({ isPreview, text }: Props) => {
  if (!text) return null;

  const urlRegex = /https?:\/\/[^\s]+/g;
  const parts = text.split(urlRegex);
  const matches = text.match(urlRegex);

  return (
    <div>
      {parts.map((part, index) => (
        <React.Fragment key={index}>
          {part && <span className="text-black">{part}</span>}
          {matches &&
            matches[index] &&
            (isPreview ? (
              <h3 className="text-blue-600">{matches[index]}</h3>
            ) : (
              <a
                href={matches[index]}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600"
              >
                {matches[index]}
              </a>
            ))}
        </React.Fragment>
      ))}
    </div>
  );
};

const ThreadBlock = ({ isPreview, fromRoot, thread }: Props) => {
  const [userToken, setUserToken] = useState("");
  // const [editModalOpen, setEditModalOpen] = useState(false);
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);

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

  /*
  const openThreadEditForm = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setEditModalOpen(true);
  };

  const updateThread = async (title: string, body: string) => {
    try {
      const response = await API.patch(
        "wasedatime-dev",
        `/forum/${thread.board_id}/${thread.thread_id}`,
        {
          body: {
            data: {
              tag_id: "courses",
              group_id: "SILS",
              title,
              body,
            },
          },
          headers: {
            "Content-Type": "application/json",
            Authorization: userToken,
          },
        }
      );
    } catch (error) {
      console.error("Thread not updated successfully!:", error);
    }
    setEditModalOpen(false);
  };
  */

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
    window.location.reload();
  };

  const navigate = useNavigate();

  return (
    <Block actions={actions}>
      <Link
        to={
          isPreview
            ? fromRoot
              ? `${thread.board_id}/${thread.thread_id}`
              : `${thread.thread_id}`
            : ""
        }
      >
        <div
          className={
            isPreview
              ? `border-2 mb-10 mr-4 rounded-xl shadow-lg hover:bg-gray-50 p-6`
              : `cursor-default`
          }
        >
          {!isPreview && (
            <div
              onClick={() => navigate(-1)}
              className="text-xs mt-2 cursor-pointer text-gray-400 hover:text-gray-500 w-fit"
            >
              Back
            </div>
          )}
          {/* ^ This line goes to parent board on click while in thread */}
          <div className={`px-2`}>
            <div className="flex justify-between mt-2">
              <h1 className="text-2xl text-light-main mb-auto">
                {thread.title}
              </h1>
              <div className="flex justify-center flex-col items-center">
                {/* ToDo: create component for tag within Thread Block */}
                <img
                  src={getSchoolIconPath(thread.group_id, "en")}
                  width={40}
                  height={40}
                />

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
                {
                  // userToken?.length > 0 && thread.uid === userToken && (
                  userToken?.length > 0 && thread.mod === true && (
                    <div>
                      {/* <button onClick={openThreadEditForm}>
                        <EditIcon fontSize="large" color="warning" />
                      </button> */}
                      <button onClick={confirmDeleteThread}>
                        <DeleteIcon
                          fontSize="large"
                          color="error"
                          className="mt-3"
                        />
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
            <h2
              className="justify-left text-light-text1 pt-4"
              style={{ whiteSpace: "pre-line" }}
            >
              {convertUrlsToLinks({
                isPreview,
                text: thread.body,
                thread: thread,
              })}
            </h2>
          </div>
          <div className="inline-block text-blue-600 rounded-lg pl-2 pt-2">
            {" "}
            {`# ${thread.tag_id}`}
          </div>
          <hr className="mx-2 pt-2 mt-6" />
          <div>
            <h3>
              <Visibility fontSize="small" /> <span>{thread.views}</span>
            </h3>
          </div>
        </div>
      </Link>
    </Block>
  );
};

export default ThreadBlock;
