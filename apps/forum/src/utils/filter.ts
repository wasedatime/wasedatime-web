import Thread from "@app/types/thread";

export const filterThreadsByTags = (threads: Thread[], tags: string[]) =>
  tags.length > 0
    ? threads.filter((thread) => tags.includes(thread.tag_id))
    : threads;

export const filterThreadsByGroups = (threads: Thread[], groups: string[]) =>
  groups.length > 0
    ? threads.filter((thread) => groups.includes(thread.group_id))
    : threads;
