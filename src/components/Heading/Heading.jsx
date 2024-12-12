import React from 'react';
import './Heading.css';

const Heading = ({ level = 1, className = '', children }) => {
  const Tag = `h${level}`;

  return (
    <Tag className={className}>
      {children}
    </Tag>
  );
};

export default Heading;
