import { IPost } from '../Post';

export enum ActionType {
  GETPOSTSDONE = 'GETPOSTSDONE',
  SENDREPLYDONE = 'SENDREPLYDONE',
  SENDPOSTDONE = 'SENDPOSTDONE',
  SENDREPLYSTART = 'SENDREPLYSTART',
  GETPOSTSSTART = 'GETPOSTSSTART',
  SENDPOSTSTART = 'SENDPOSTSTART',
}

export const getPostsStart = () => {
  return {
    type: ActionType.GETPOSTSSTART,
  };
};

export interface SendReplyType {
  newComment: { value: string; op: string; parentId: string };
  comments: IPost[];
}

export const sendPostStart = (data: string) => {
  return {
    type: ActionType.SENDPOSTSTART,
    data,
  };
};

export const sendPostDone = (data: IPost[]) => {
  return {
    type: ActionType.SENDPOSTDONE,
    data,
  };
};

export const getPostsDone = (data: IPost[]) => {
  return {
    type: ActionType.GETPOSTSDONE,
    data,
  };
};

export const sendReplyStart = (data: SendReplyType) => {
  return {
    type: ActionType.SENDREPLYSTART,
    data,
  };
};

export const sendReplyDone = () => {
  return {
    type: ActionType.SENDREPLYDONE,
  };
};
