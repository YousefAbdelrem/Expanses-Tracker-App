import React from "react";
interface Props {
   onClick: () => void; 
}

function Alert({onClick} : Props) {
  return (
    <div className="alert alert-warning alert-dismissible fade show" role="alert">
      <strong>Holy guacamole!</strong> You should check in on some of those
      fields below.
      <button
        type="button"
        className="btn-close"
        data-bs-dismiss="alert"
        aria-label="Close"
        onClick={onClick}
      ></button>
    </div>
  );
}

export default Alert;
