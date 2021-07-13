import React from "react";
import "./style.css";

export const Card = (props) => {
  const src =
    "https://robohash.org/" + props.robot.id + "?set=set2&size=180x180";
  return (
    <div className="card-container">
      <img key={props.robot.div} src={src} alt="" />
      <h2>
        {props.robot.id} | {props.robot.name}{" "}
      </h2>
      <p> {props.robot.email} </p>
    </div>
  );
};
