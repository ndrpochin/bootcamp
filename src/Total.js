import React from "react";
import ReactDOM from "react-dom";

const Total = (props) => {
  return (
    <>
      <p>Number of exercises {props.ex1 + props.ex2 + props.ex3}</p>
    </>
  );
};

export default Total;
