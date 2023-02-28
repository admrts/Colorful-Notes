import React from "react";

import { changeColor } from "../redux/noteSlice";
import { useDispatch } from "react-redux";

function ColorButton() {
  const dispatch = useDispatch();
  const handleClick = (e) => {
    const color = e.target.id;

    dispatch(changeColor(color));
  };
  return (
    <div className="colorButtons">
      <button className="btn red" id="red" onClick={handleClick}></button>
      <button className="btn yellow" id="yellow" onClick={handleClick}></button>
      <button className="btn green" id="green" onClick={handleClick}></button>
      <button className="btn blue" id="blue" onClick={handleClick}></button>
      <button className="btn purple" id="purple" onClick={handleClick}></button>
    </div>
  );
}

export default ColorButton;
