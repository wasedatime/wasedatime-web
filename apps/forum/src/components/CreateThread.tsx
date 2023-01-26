import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import API from "@aws-amplify/api";
import { CloseIcon } from "@app/components/icons/CloseIcon";
import boards from "@app/constants/boards.json";
import SignInModal from "@bit/wasedatime.core.ts.ui.sign-in-modal";
import { getIdToken } from "@bit/wasedatime.core.ts.utils.user";

const CreateThread = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [expandTags, setExpandTags] = useState(false);
  const [expandGroups, setExpandGroups] = useState(false);
  const [userToken, setUserToken] = useState("");
  const [isSignInModalOpen, setSignInModalOpen] = useState(false);

  // Tags and Group buttons might be best moved to their respective components but this is how I will leave it for now.

  const { boardSlug } = useParams();

  useEffect(() => {
    setIsExpanded(false);
    setExpandTags(false);
    setExpandGroups(false);
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
  }

  const handleSubmit = async () => {
    let idToken = userToken;
    if (idToken?.length <= 0) {
      idToken = await getIdToken();
      if (idToken?.length <= 0) return;
    }
    // TODO: Implement submitting new thread API
    /*
    API.post("wasedatime-dev", "/forum/blablabla", {
      body: { data: { blablabla } },
      headers: {
        Authorization: idToken,
      },
    });
    */
  }

  const findBoardIndex: number = boards.findIndex(
    (board) => board.slug == boardSlug
  );

  return isExpanded ? (
    <div className="relative">
      <textarea
        placeholder={`Share something in ${boards[findBoardIndex].title}...`}
        className="border-b-2 text-start border-light-main h-36 pl-2 pb-28 w-full hover:outline-0 focus:outline-0"
      />
      <h1
        className="absolute top-0 right-2 hover:text-light-main cursor-pointer"
        onClick={() => setIsExpanded(false)}
      >
        <CloseIcon />
      </h1>
      <div className="absolute bottom-0 left-2 w-full flex mb-3 text-sm justify-between">
        <div className="my-auto">
          <button
            className="relative border-light-main border mx-4 px-4 rounded-lg hover:text-white hover:bg-light-main"
            onClick={() => setExpandTags(!expandTags)}
          >
            {expandTags ? (
              <div className="bg-white border-light-main border absolute h-32 w-32 top-8 left-0 rounded-lg">
                Text
              </div>
            ) : null}
            Tags
          </button>
          <button
            className="relative border-light-main border px-4 rounded-lg hover:text-white hover:bg-light-main"
            onClick={() => setExpandGroups(!expandGroups)}
          >
            Groups
            {expandGroups ? (
              <div className="bg-white border border-light-main absolute h-32 w-32 top-8 left-0 rounded-lg">
                Text
              </div>
            ) : null}
          </button>
        </div>
        <button
          className="border-light-main border mx-4 px-4 py-1 rounded-lg text-white bg-light-lighter hover:bg-light-darker"
          onClick={handleSubmit}
        >
          Submit Post
        </button>
      </div>
    </div>
  ) : (
    <div>
      <div className="cursor-pointer" onClick={handleOpenForm}>
        <h1 className="border-b-2 border-light-main">Start a new thread</h1>
      </div>
      <SignInModal
        isModalOpen={isSignInModalOpen}
        closeModal={() => setSignInModalOpen(false)}
      />
    </div>
  );
};

export default CreateThread;
