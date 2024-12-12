import React from 'react';
import PropTypes from 'prop-types';
import './Typography.css';

const Typography = ({ textSize = 'md', className = '', children }) => {
  const sizeClass = `typography-${textSize}`;

  return (
    <p className={`${sizeClass} ${className}`}>
      {children}
    </p>
  );
};

Typography.propTypes = {
  textSize: PropTypes.oneOf(['sm', 'md', 'lg']),
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export default Typography;
