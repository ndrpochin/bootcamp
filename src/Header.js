import React from "react";

const Header = (props) => {
  let { name } = props.course;
  return (
    <>
      <h1>{name}</h1>
    </>
  );
};

export default Header;
