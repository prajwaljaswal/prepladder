import React from 'react';

const SaveAndContinue = ({ className }) => {
  return (
    <div className={`save-continue ${className}`}>
      <div className="d-flex justify-content-end gap-3">
        <div className="save-button">Save</div>
        <div className="save-button">Save and Continue Edit</div>
      </div>
    </div>
  );
};

export default SaveAndContinue;
