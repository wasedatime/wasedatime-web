import React from "react";
import { Link } from "react-router-dom";

type Props = {};

const FeedBackBox = (props: Props) => {
  return (
    <div className="pl-2 md:pl-4 lg:pl-10 overflow-y-auto">
      <h1 className="form-item-title">Feedback</h1>
      <p className="text-light-text1 dark:text-dark-text1 ">
        This is WasedaTime forum beta.
        <br />
        We are sorry for any unexpected bugs. Spam refresh if anything goes
        wrong.
        <br />
        <a
          href="https://forms.gle/9qCxdehr8CrxNdbZ9"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600"
        >
          Please share your feedback by clicking on here!
        </a>
      </p>
    </div>
  );
};

export default FeedBackBox;
