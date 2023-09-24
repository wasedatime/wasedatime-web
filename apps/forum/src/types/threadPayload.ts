type threadPayload = {
  body: string;
  title: string;
  tag_id: string;
  group_id: string;
  univ_id: string;
  board_id: string;
  image?: File;
  contentType?: string;
  fileName?: string;
};
export default threadPayload;
