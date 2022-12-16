import './FaqItem.scss';
import React from 'react';

interface FaqItemProps {
  header: string;
  text: string;
}

export const FaqItem = (props: FaqItemProps) => {
  const { header, text } = props;
  return (
    <div className="text-box">
      <div className="FaqItem">
        <b>{header}</b>
        <p>{text}</p>
      </div>
    </div>
  );
};
