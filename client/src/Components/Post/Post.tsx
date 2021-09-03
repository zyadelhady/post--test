import React, { FC } from 'react';
import { IPost } from '../../store/Post';
import './Post.css';
export interface PostProps {
  value: number;
  comments: any[];
}

export const Post: FC<PostProps> = (props) => {
  return (
    <div className="PostContainer">
      {props.value}
      {props.comments.map((c: any) => {
        // if (c === '6132806c47d3a754de49bf0c') return null;
        return <Post key={c._id} value={c.value} comments={c.comments} />;
      })}
    </div>
  );
};
