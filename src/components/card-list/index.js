import React from "react";
import { Card } from "../card";
import "./style.css";

export const CardList = (props) => (
  <div className="card-list">
    {props.robots.map((item) => (
      <Card key={item.id} robot={item} />
    ))}
  </div>
);
