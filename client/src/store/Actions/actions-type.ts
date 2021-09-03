export enum ActionType {
  GETPOSTS = 'GETPOSTS',
  ADDPOST = 'ADDPOST',
  GETPOSTSSTART = 'GETPOSTSSTART',
  GETPOSTSDONE = 'GETPOSTSDONE',
  SENDPOSTSTART = 'SENDPOSTSTART',
  SENDPOST = 'SENDPOST',
}

export const getPosts = () => {
  return {
    type: ActionType.GETPOSTS,
  };
};

export const getPostsStart = () => {
  return {
    type: ActionType.GETPOSTSSTART,
  };
};

export const sendPostStart = (data: any) => {
  return {
    type: ActionType.SENDPOSTSTART,
    data,
  };
};

export const sendPost = (data: any) => {
  return {
    type: ActionType.SENDPOST,
    data,
  };
};

export const getPostsDone = (data: any) => {
  return {
    type: ActionType.GETPOSTSDONE,
    data,
  };
};
