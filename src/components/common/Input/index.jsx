import React from 'react';

const Input = ({ type, className, name, inputValue, setInputValue, error }) => {
  return (
    <div>
      <input
        style={{ width: '100%' }}
        type={type}
        className={className}
        name={name}
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <div className="small text-danger">{error}</div>
    </div>
  );
};

export default Input;
