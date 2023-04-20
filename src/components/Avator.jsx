import React from "react";
import "./Avator.css";

const Avator = ({ src }) => {
  return (
    <div className="avator">
      <img src={src} alt="user avator" />
    </div>
  );
};

export default Avator;
