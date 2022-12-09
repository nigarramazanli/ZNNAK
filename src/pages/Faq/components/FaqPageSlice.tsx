import React from 'react';

interface IFaqPageSliceProps {
  header: string;
  text: string;
}

export const FaqPageSlice = (props: IFaqPageSliceProps) => {
  const { header, text } = props;
  return (
    <div className="FaqPageSlice">
      <b>{header}</b>
      <p>{text}</p>
    </div>
  );
};
