import React, { FC, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Post } from '../../Components/Post/Post';
import { getPostsStart } from '../../store/Actions/actions-type';
import { IPost } from '../../store/IPost';

export interface PostsProps {}

export const Posts: FC<PostsProps> = (props) => {
  const dispatch = useDispatch();
  const posts = useSelector((state: any) => state.posts.posts);

  useEffect(() => {
    dispatch(getPostsStart());
  }, [dispatch]);

  return (
    <div>
      {posts.map((p: IPost) => {
        return <Post key={p._id} value={p.value} comments={p.comments} id={p._id} />;
      })}
    </div>
  );
};
