import React from 'react';

const Input = ({ type, className, name, inputValue, setInputValue, error, style }) => {
  return (
    <div>
      <input
        style={style}
        type={type}
        className={className}
        name={name}
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        required
      />
      <div className="small text-danger">{error}</div>
    </div>
  );
};

export default Input;
