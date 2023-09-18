import React from "react";
import NotificationsIcon from "@mui/icons-material/Notifications";
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";

type Props = {
  commentNotify?: boolean;
};

const CommentNotification = ({ commentNotify }: Props) => {
  return (
    <div className="p-2 text-center flex items-center justify-center">
      {commentNotify ? (
        <NotificationsActiveIcon fontSize="large" color="error" />
      ) : (
        <NotificationsIcon fontSize="large" />
      )}
    </div>
  );
};

export default CommentNotification;
