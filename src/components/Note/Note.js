import React from "react";
import "./note.css";
import { useDispatch } from "react-redux";
import { deleteNote } from "../../redux/noteSlice";

function Note({ item }) {
  const dispatch = useDispatch();
  const classes = `${item.color} note`;
  const handleClick = () => {
    dispatch(deleteNote(item.id));
  };
  return (
    <div className="noteDiv">
      <textarea readOnly className={classes} value={item.text} />
      <button className="deleteBtn" onClick={handleClick}>
        x
      </button>
    </div>
  );
}

export default Note;
