import { IPost } from './IPost';
import { IAction } from './Actions/actions';
import { ActionType } from './Actions/actions-type';

interface State {
  posts: IPost[];
}

let initialState: State = {
  posts: [],
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

export type RootState = ReturnType<typeof reducer>;

export default reducer;
