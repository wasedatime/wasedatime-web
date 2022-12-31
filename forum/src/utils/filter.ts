import Thread from "@app/types/thread";

export const filterThreadsByTags = (threads: Thread[], tags: number[]) => tags.length > 0
  ? threads.filter(thread => tags.includes(thread.tagId))
  : threads;

export const filterThreadsByGroups = (threads: Thread[], groups: string[]) => groups.length > 0
  ? threads.filter(thread => groups.includes(thread.groupId))
  : threads;