import React, { FC, useEffect, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { sendReplyStart } from '../../store/Actions/actions-type';
import { IPost } from '../../store/IPost';
import './Post.css';
export interface PostProps {
  value: number;
  comments: IPost[];
  id: string;
}

export const Post: FC<PostProps> = (props) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const selectRef = useRef<HTMLSelectElement>(null);
  const dispatch = useDispatch();

  const sendComment = (e: React.SyntheticEvent) => {
    e.preventDefault();
    const newComment = {
      value: inputRef.current?.value as string,
      op: selectRef.current?.value as string,
      parentId: props.id,
    };
    dispatch(sendReplyStart({ newComment, comments: props.comments }));
    if (inputRef.current?.value) {
      inputRef.current.value = '';
    }
  };

  useEffect(() => {}, [props.comments]);

  return (
    <div className="PostContainer">
      {props.value}
      <form onSubmit={(e: React.SyntheticEvent) => sendComment(e)}>
        <input type="number" ref={inputRef} />
        <select ref={selectRef} name="operation">
          <option value="+">+</option>
          <option value="-">-</option>
          <option value="*">*</option>
          <option value="/">/</option>
        </select>
        <button>reply</button>
      </form>
      {props.comments.map((c) => {
        return <Post key={c._id} value={c.value} comments={c.comments} id={c._id} />;
      })}
    </div>
  );
};
