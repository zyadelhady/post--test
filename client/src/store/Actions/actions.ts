import { ActionType } from './actions-type';
import { IPost } from '../Post';

interface AddPostAction {
  type: ActionType.ADDPOST;
  data?: any;
}

interface GetPostAction {
  type: ActionType.GETPOSTS;
  data?: any;
}

interface GetPostsDoneAction {
  type: ActionType.GETPOSTSDONE;
  data: [IPost];
}
export interface SendPostAction {
  type: ActionType.SENDPOST;
  data: any;
}

export type Action = GetPostsDoneAction | SendPostAction | GetPostAction | AddPostAction;
