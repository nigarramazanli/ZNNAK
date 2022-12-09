import './array.scss';
import React from 'react';

interface IArrayProps {
  header: string;
  text: string;
}
export const Array = (props: IArrayProps) => {
  const { header, text } = props;
  return (
    <div className="array">
      <b>{header}</b>
      <p>{text}</p>
    </div>
  );
};
