import axios from '../../axios';
import { AxiosResponse } from 'axios';
import { put, takeEvery } from 'redux-saga/effects';
import * as actionTypes from '../Actions/actions-type';
import { IAction } from '../Actions/actions';
import { IPost } from '../IPost';
import { ISendReplyType } from '../Actions/actions-type';

export function* getPostsSaga(action: IAction<IPost[]>) {
  try {
    const response: AxiosResponse<IPost[]> = yield axios.get<IPost[]>(`posts/`);
    yield put(actionTypes.getPostsDone(response.data));
  } catch (e) {
    console.log(e);
  }
}

export function* sendPostSaga(action: IAction<IPost[]>) {
  try {
    const newPost: AxiosResponse<IPost[]> = yield axios.post('posts/', { value: action.data });
    yield put(actionTypes.sendPostDone(newPost.data));
  } catch (e) {
    console.log(e);
  }
}

export function* sendReplySaga(action: IAction<ISendReplyType>) {
  try {
    const reply: AxiosResponse<IPost> = yield axios.post('posts/comment/', {
      value: action.data.newComment.value,
      parentId: action.data.newComment.parentId,
      op: action.data.newComment.op,
    });
    action.data.comments.push(reply.data);
    yield put(actionTypes.sendReplyDone());
  } catch (e) {
    console.log(e);
  }
}

export function* watchPosts() {
  yield takeEvery(actionTypes.ActionType.GETPOSTSSTART, getPostsSaga);
  yield takeEvery(actionTypes.ActionType.SENDPOSTSTART, sendPostSaga);
  yield takeEvery(actionTypes.ActionType.SENDREPLYSTART, sendReplySaga);
}
