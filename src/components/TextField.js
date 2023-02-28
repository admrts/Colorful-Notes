import React, { useState } from "react";
import ColorButton from "./ColorButton";
import { useDispatch, useSelector } from "react-redux";
import { saveNote } from "../redux/noteSlice";
import { nanoid } from "@reduxjs/toolkit";

function TextField() {
  const { color } = useSelector((store) => store.note);
  const dispatch = useDispatch();
  const [text, setText] = useState("");
  const classes = `${color} textfield`;
  const handleChange = (e) => {
    setText(e.target.value);
  };
  const addClick = () => {
    dispatch(saveNote({ text, id: nanoid() }));
    setText("");
  };
  return (
    <div className="textFieldDiv">
      <textarea
        name="textarea"
        cols="55"
        rows="13"
        className={classes}
        placeholder="Write text here..."
        value={text}
        onChange={handleChange}
      />

      <button className="addButton" onClick={addClick}>
        Add
      </button>
      <ColorButton />
    </div>
  );
}

export default TextField;
