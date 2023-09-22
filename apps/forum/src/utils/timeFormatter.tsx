import CommentType from "@app/types/comment";
import ThreadType from "@app/types/thread";

type threadOrComment = CommentType | ThreadType;

export function timeFormatter(newComment: threadOrComment): string {
  const utcTimestamp = newComment.created_at;
  const date = new Date(utcTimestamp);

  // Extract year, month, date, hours, and minutes
  const year = date.getUTCFullYear();
  const month = date.getUTCMonth() + 1; // Months are 0-based, so add 1
  const day = date.getUTCDate();
  const hours = date.getUTCHours();
  const minutes = date.getUTCMinutes();

  // Format the components as a string
  const formattedTimestamp = `${year}-${month.toString().padStart(2, "0")}-${day
    .toString()
    .padStart(2, "0")} ${hours.toString().padStart(2, "0")}:${minutes
    .toString()
    .padStart(2, "0")}`;

  return formattedTimestamp;
}
