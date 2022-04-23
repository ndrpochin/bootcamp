import React from "react";
import ReactDOM from "react-dom";

const Content = (props) => {
  return (
    <>
      <p>
        {props.part} {props.exercise}
      </p>
    </>
  );
};
export default Content;
