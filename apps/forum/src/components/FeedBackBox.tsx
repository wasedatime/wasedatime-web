import React from "react";
import { Link } from "react-router-dom";

type Props = {};

const FeedBackBox = (props: Props) => {
  return (
    <div className="pl-2 md:pl-4 lg:pl-10">
      <h1 className="form-item-title">Feedback</h1>
      <p className="text-light-text1 dark:text-dark-text1">
        The Forums is a brand new feature in WasedaTime. There are many
        unexpected bugs. Sorry about that. If something gets stuck spam refresh
        and tell us.
        <br /> We would like to know how everyone's exprience is.
        <br /> Whether there are any bugs or issues. Or any features you would
        like to be added.
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
