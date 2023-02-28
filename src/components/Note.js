import React from "react";

function Note({ item }) {
  const classes = `${item.color} note`;

  return (
    <div className="noteDiv">
      <textarea readOnly className={classes} value={item.text} />
      <button className="deleteBtn">x</button>
    </div>
  );
}

export default Note;
