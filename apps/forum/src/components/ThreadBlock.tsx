import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Block from "./Block";

type Props = {
  isPreview: boolean;
  thread: any;
};

const ThreadBlock = ({ isPreview, thread }: Props) => {
  const actions = [
    {
      icon: "",
      title: "",
      onClick: () => {},
    },
  ];

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
