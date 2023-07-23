import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Block from "./Block";
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { getIdToken, Modal as CommonModal } from "wasedatime-ui";
import Modal from "@app/components/common/Modal";
import API from "@aws-amplify/api";

type Props = {
  isPreview: boolean;
  thread: any;
};

const ThreadBlock = ({ isPreview, thread }: Props) => {
  const [userToken, setUserToken] = useState("");
  const [editModalOpen, setEditModalOpen] = useState(false);
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

  const openThreadEditForm = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setEditModalOpen(true);
  }

  const updateThread = async () => {
    console.log("Try updating...");
    try {
      // const response = await API.del("wasedatime-dev", `/forum/${thread.board_id}/${thread.thread_id}`, {
      //   headers: {
      //     "Content-Type": "application/json",
      //     Authorization: userToken,
      //   },
      // });
      // console.log("Thread updated!:", response);
    } catch (error) {
      console.error("Thread not updated successfully!:", error);
    }
    setEditModalOpen(false);
  }

  const confirmDeleteThread = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setDeleteModalOpen(true);
  }

  const deleteThread = async () => {
    console.log("Try deleting...");
    try {
      const response = await API.del("wasedatime-dev", `/forum/${thread.board_id}/${thread.thread_id}`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: userToken,
        },
      });
      console.log("Thread deleted!:", response);
    } catch (error) {
      console.error("Thread not deleted successfully!:", error);
    }
  }

  const navigate = useNavigate();

  return (
    <Block actions={actions}>
      <Link to={isPreview ? `${thread.thread_id}` : ``}>
        <div
          className={
            isPreview
              ? `border-2 mt-12 mx-4 rounded-xl shadow-lg pb-6 hover:bg-gray-50`
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
              <h1 className="text-2xl text-light-main my-auto">
                {thread.title}
              </h1>
              <div>
                {/* ToDo: create component for tag within Thread Block */}
                <div className="bg-red-500 rounded-lg"> {thread.group_id}</div>
                <div className="bg-red-500 rounded-lg"> {thread.tag_id}</div>
                {/* ToDO: There is no author for now will add later on */}
                {/* <h2 className="text-sm text-light-text2 my-auto">
                  {thread.author}
                </h2> */}
                {
                  editModalOpen && (
                    <Modal>
                      <div>
                        <div className="relative p-6 flex-auto">
                          Edit form in construction...
                        </div>
                        <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                          <button
                            className="text-white bg-light-main active:bg-yellow-700 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
                            type="button"
                            onClick={updateThread}
                          >
                            Submit
                          </button>
                          <button
                            className="text-light-main background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1"
                            type="button"
                            onClick={() => setEditModalOpen(false)}
                          >
                            Cancel
                          </button>
                        </div>
                      </div>
                    </Modal>
                  )
                }
                {
                  // userToken?.length > 0 && (
                  userToken?.length > 0 && thread.uid === userToken && (
                    <div>
                      <button onClick={openThreadEditForm}><EditIcon fontSize="large" color="warning" /></button>
                      <button onClick={confirmDeleteThread}><DeleteIcon fontSize="large" color="error" /></button>
                      {deleteModalOpen && (
                        <Modal>
                          <div>
                            <div className="relative p-6 flex-auto">
                              <h3 className="text-2xl">Are you sure to delete this thread?</h3>
                            </div>
                            <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                              <button
                                className="text-white bg-light-main active:bg-yellow-700 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
                                type="button"
                                onClick={deleteThread}
                              >
                                Yes, delete it
                              </button>
                              <button
                                className="text-light-main background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1"
                                type="button"
                                onClick={() => setDeleteModalOpen(false)}
                              >
                                No, keep it
                              </button>
                            </div>
                          </div>
                        </Modal>
                      )}
                    </div>
                  )
                }
              </div>
            </div>
            <p className="justify-left text-light-text1 pt-4">{thread.body}</p>
          </div>
          <hr className="mx-2 pt-4 mt-6" />
          <div>
            <h3>Views: {thread.views}</h3>
          </div>
        </div>
      </Link>
    </Block>
  );
};

export default ThreadBlock;
