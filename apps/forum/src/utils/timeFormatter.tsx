import CommentType from "@app/types/comment";
import ThreadType from "@app/types/thread";

type threadOrComment = CommentType | ThreadType;

export function timeFormatter(newComment: threadOrComment): string {
  const utcTimestamp = newComment.created_at;
  const date = new Date(utcTimestamp);
  const now = new Date(); // Get the current date and time

  // Convert both to JST
  date.setUTCHours(date.getUTCHours() + 9);
  now.setUTCHours(now.getUTCHours() + 9);

  // Calculate time difference in milliseconds
  const diff = now.getTime() - date.getTime();

  // Convert to minutes and hours
  const minutesDiff = Math.floor(diff / 60000); // 60 * 1000
  const hoursDiff = Math.floor(minutesDiff / 60);

  if (minutesDiff < 60) {
    return minutesDiff === 1 ? "1 minute ago" : `${minutesDiff} minutes ago`;
  } else if (hoursDiff < 24) {
    return hoursDiff === 1 ? "1 hour ago" : `${hoursDiff} hours ago`;
  } else {
    const daysDiff = Math.floor(hoursDiff / 24);
    return daysDiff === 1 ? "1 day ago" : `${daysDiff} days ago`;
  }
}
