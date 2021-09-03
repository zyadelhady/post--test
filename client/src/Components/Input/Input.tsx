import React from 'react';
import './Input.css';

export interface InputProps {}

export const Input = React.forwardRef<HTMLInputElement>((props, ref) => {
  return (
    <>
      <input type="number" name="number" id="Value" className="Input" ref={ref} />
    </>
  );
});
