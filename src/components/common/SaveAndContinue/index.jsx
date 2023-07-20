import React from 'react';

const SaveAndContinue = ({ className, submit }) => {
  return (
    <div className={`save-continue ${className}`}>
      <div className="d-flex justify-content-end gap-3">
        <button id="save-button" type="submit">
          Save
        </button>
        <div id="save-button">Save and Continue Edit</div>
      </div>
    </div>
  );
};

export default SaveAndContinue;
