import React from "react";
import "./Box.css";

function Box({ boxArray }) {
  return (
    <div className="carre">
      {boxArray.map((el, i) => (
        <div className="carre1">
          <img src={el.pic} alt="pic" />
          <h3 className="titleBox">{el.title}</h3>
          <p> {el.tag}</p>
        </div>
      ))}
    </div>
  );
}

export default Box;
