import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './input.css';
const Input = ({
  type = 'text',
  placeholder = '',
  value = '',
  onChange,
  disabled = false,
  label = '',
  danger = false,
  defaultValue = '',
}) => {
  const [inputValue, setInputValue] = useState(value || defaultValue);

  const handleChange = (event) => {
    setInputValue(event.target.value);
    if (onChange) {
      onChange(event.target.value);
    }
  };

  return (
    <div className={`input-container ${danger ? 'danger' : ''}`}>
      {label && <label className="input-label">{label}</label>}
      <input
        type={type}
        value={inputValue}
        onChange={handleChange}
        placeholder={placeholder}
        disabled={disabled}
        className={`input-field ${danger ? 'danger' : ''}`}
      />
    </div>
  );
};

Input.propTypes = {
  type: PropTypes.string,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
  disabled: PropTypes.bool,
  label: PropTypes.string,
  danger: PropTypes.bool,
  defaultValue: PropTypes.string,
};

export default Input;
