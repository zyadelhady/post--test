import React, { FC } from 'react';
import { Input } from '../Input/Input';
import './Post.css';
export interface PostProps {
  value: number;
  comments: any[];
}

export const Post: FC<PostProps> = (props) => {
  return (
    <div className="PostContainer">
      {props.value}
      <Input />
      {props.comments.map((c: any) => {
        return <Post key={c._id} value={c.value} comments={c.comments} />;
      })}
    </div>
  );
};
