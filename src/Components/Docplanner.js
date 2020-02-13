import React from "react";
import "./Box.css";

function Docplanner({ textBoxArray }) {
  return (
    <div className="box-container">
      {textBoxArray.map((el, index) => (
        <div
          key={index}
          className={el.select ? "box green-Box" : "box blue-Box"}
        >
          <h5 className="tagBox">{el.tag}</h5>
          <h3 className="textBox">{el.title}</h3>

          {el.select ? (
            <select>
              {" "}
              {el.select.map(item => (
                <option>{item}</option>
              ))}
            </select>
          ) : null}
          <img className="picBox" src={el.pic} alt="..." />
        </div>
      ))}
    </div>
  );
}
export default Docplanner;
