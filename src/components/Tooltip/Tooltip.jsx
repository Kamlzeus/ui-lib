// src/components/Tooltip.jsx
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './Tooltip.css'; // Подключаем стили для Tooltip

const Tooltip = ({ text, position, children }) => {
  const [isVisible, setIsVisible] = useState(false);

  const showTooltip = () => setIsVisible(true);
  const hideTooltip = () => setIsVisible(false);

  return (
    <div
      className="tooltip-container"
      onMouseEnter={showTooltip}
      onMouseLeave={hideTooltip}
    >
      {children}
      {isVisible && (
        <div className={`tooltip tooltip-${position}`}>
          {text}
        </div>
      )}
    </div>
  );
};

Tooltip.propTypes = {
  text: PropTypes.string.isRequired,
  position: PropTypes.oneOf(['top', 'bottom', 'left', 'right']),
  children: PropTypes.node.isRequired,
};

Tooltip.defaultProps = {
  position: 'top', // Позиция по умолчанию
};

export default Tooltip;
