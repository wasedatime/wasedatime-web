type ThreadType = {
  board_id: string;
  created_at: string;
  updated_at: string;
  title: string;
  body: string;
  thread_id: string;
  tag_id: string;
  group_id: string;
  univ_id: number;
  views: number;
  mod?: boolean;
};

export default ThreadType;
