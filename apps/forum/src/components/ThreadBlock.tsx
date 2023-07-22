import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Block from "./Block";
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { getIdToken } from "wasedatime-ui";
import API from "@aws-amplify/api";

type Props = {
  isPreview: boolean;
  thread: any;
};

const ThreadBlock = ({ isPreview, thread }: Props) => {
  const [userToken, setUserToken] = useState("");

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

  const updateThread = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    console.log("Thread updated!");
    // TODO: open edit form
    // TODO: call api
  }

  const deleteThread = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    console.log("Thread deleted!");
    // TODO: confirm message before executing api
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
          {isPreview ? (
            ``
          ) : (
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
                  userToken && userToken.length > 0 && thread.uid === userToken && (
                    <>
                      <button onClick={updateThread}><EditIcon fontSize="large" color="warning" /></button>
                      <button onClick={deleteThread}><DeleteIcon fontSize="large" color="error" /></button>
                    </>
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
