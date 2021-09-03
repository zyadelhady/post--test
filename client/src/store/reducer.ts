import { IPost } from './Post';
import { Action } from './Actions/actions';
import { ActionType } from './Actions/actions-type';

let initialState = {
  posts: [] as IPost[],
};

const reducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case ActionType.ADDPOST:
      return {
        ...state,
      };
    case ActionType.GETPOSTSDONE:
      return {
        posts: action.data,
      };
    default:
      return state;
  }
};

export default reducer;
