import React, { FC } from 'react';
import './Post.css';
export interface PostProps {
  value: number;
}

export const Post: FC<PostProps> = (props) => {
  return (
    <div className="PostContainer">
      {props.value}
      {props.children}
    </div>
  );
};
