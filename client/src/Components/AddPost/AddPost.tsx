import React, { FC, useEffect, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { sendPostStart } from '../../store/Actions/actions-type';
import { Input } from '../Input/Input';
import './AddPost.css';

export interface AddPostProps {}

export const AddPost: FC<AddPostProps> = (props) => {
  const textInput = useRef<HTMLInputElement>(null);

  const dispatch = useDispatch();

  const sendPost = () => {
    dispatch(sendPostStart(textInput.current?.value));
  };

  return (
    <div className="AddPost_Container">
      <Input ref={textInput} />
      <button className="Submit_Button" onClick={sendPost}>
        submit
      </button>
    </div>
  );
};
