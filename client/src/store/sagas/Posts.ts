import axios from '../../axios';
import { put, takeEvery, takeLeading } from 'redux-saga/effects';
import * as actionTypes from '../Actions/actions-type';
import { Action } from '../Actions/actions';

interface ResponseGenerator {
  config?: any;
  data?: any;
  headers?: any;
  request?: any;
  status?: number;
  statusText?: string;
}

export function* getPostsSaga(action: Action) {
  try {
    const response: ResponseGenerator = yield axios.get(`posts/`);
    console.log(response.data);
    yield put(actionTypes.getPostsDone(response.data));
  } catch (e) {
    console.log(e);
  }
}

export function* sendPostSaga(action: Action) {
  try {
    const newPost: ResponseGenerator = yield axios.post('posts/', { value: action.data });
    console.log(newPost.data);
    yield put(actionTypes.sendPost(newPost.data));
  } catch (e) {
    console.log(e);
  }
}

export function* watchPosts() {
  yield takeEvery(actionTypes.ActionType.GETPOSTSSTART, getPostsSaga);
  yield takeEvery(actionTypes.ActionType.SENDPOSTSTART, sendPostSaga);
}
