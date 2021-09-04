import { IPost } from './IPost';
import { IAction } from './Actions/actions';
import { ActionType } from './Actions/actions-type';

let initialState = {
  posts: [] as IPost[],
};

const reducer = (state = initialState, action: IAction<any>) => {
  switch (action.type) {
    case ActionType.SENDPOSTDONE:
      console.log(action.data);
      return {
        posts: [...state.posts, action.data],
      };
    case ActionType.GETPOSTSDONE:
      return {
        posts: action.data,
      };
    case ActionType.SENDREPLYDONE:
      return {
        posts: [...state.posts],
      };
    default:
      return state;
  }
};

export default reducer;
