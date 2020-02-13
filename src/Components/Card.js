import React from "react";
import "./Box.css";

function Card({ boxCard }) {
  return (
    <div className="Pic">
      {boxCard.map((el, i) => (
        <div>
          <img src={el.pic} alt="pic" />
          <div className="btn">
            <p>{el.title}</p>
            <button>See openning</button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Card;
