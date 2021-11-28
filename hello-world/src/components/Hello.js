import React from "react";

const Hello = () => {
  //return <h1 className='dummyClass'>Hello, Alvi Hasan</h1>;
  return React.createElement(
    "div",
    null,
    React.createElement(
      "h1",
      { id: "hello", className: "dummyClass" },
      "Hello, Alvi Hasan"
    )
  );
};

export default Hello;
