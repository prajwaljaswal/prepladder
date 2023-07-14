import React from 'react';

const CancelAndSave = ({ submit, cancel, edit, clearFile }) => {
  return (
    <div className="cancel-save-container">
      <button className="button-cancel" onClick={cancel}>
        Cancel
      </button>
      <button
        className="btn btn-primary"
        onClick={() => {
          submit();
          if (clearFile) {
            clearFile();
          }
        }}
      >
        {edit ? 'Edit' : 'Save'}
      </button>
    </div>
  );
};

export default CancelAndSave;
