import React from "react";

import TextField from "./TextField";

function Container() {
  return (
    <div className="container">
      <h1 style={{ fontSize: "28px" }}>
        <span style={{ color: "#a7727d" }}>C</span>
        <span style={{ color: "#6096b4" }}>o</span>
        <span style={{ color: "#a791cc" }}>l</span>
        <span style={{ color: "#a7727d" }}>o</span>
        <span style={{ color: "#ffaacf" }}>r</span>
        <span style={{ color: "#6096b4" }}>f</span>
        <span style={{ color: "#e59dd1" }}>u</span>
        <span style={{ color: "#a791cc" }}>l</span>
        <span style={{ color: "#6096b4" }}> N</span>
        <span style={{ color: "#6096b4" }}>o</span>
        <span style={{ color: "#a791cc" }}>t</span>
        <span style={{ color: "#e59dd1" }}>e</span>
        <span style={{ color: "#a7727d" }}>s</span>
      </h1>
      <TextField />
    </div>
  );
}

export default Container;
