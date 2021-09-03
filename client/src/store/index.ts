import { combineReducers } from 'redux';
import postsreducer from './reducer';
const reducers = combineReducers({
  posts: postsreducer,
});

export default reducers;
