import { ActionType } from './actions-type';

export interface IAction<T> {
  type: ActionType;
  data: T;
}
