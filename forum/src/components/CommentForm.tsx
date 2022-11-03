import React from "react";

const CommentForm = () => {
  return (
    <div className="flex justify-between">
      <input
        className="text-sm text-light-text3 w-full focus:text-light-text1 focus:ring border-2 mt-4 mb-2 rounded-lg px-4 py-2"
        placeholder="Write your comment here..."
        required
      />
    </div>
  );
};

export default CommentForm;
