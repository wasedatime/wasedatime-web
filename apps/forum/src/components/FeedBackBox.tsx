import React from "react";
import { Link } from "react-router-dom";

type Props = {};

const FeedBackBox = (props: Props) => {
  return (
    <div className="pl-2 md:pl-4 lg:pl-10">
      <h1 className="form-item-title">Feedback</h1>
      <p className="text-light-text1 dark:text-dark-text1">
        The Forums is a brand new feature in WasedaTime.
        <br /> We Would like to know how everyone's exprience is.
        <br /> Whether there are any bugs or issues. Or any features you would
        like to be added.
        <br />
        <Link
          to="https://forms.gle/9qCxdehr8CrxNdbZ9"
          className="text-blue-600"
        >
          Please share your feedback by clicking on here!
        </Link>
      </p>
    </div>
  );
};

export default FeedBackBox;
