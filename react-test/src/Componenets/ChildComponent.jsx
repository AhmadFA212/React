import React, { useState } from "react";
import image from "/src/image.jpg";

const ChildComponent = (props) => {
  const [count, setCount] = useState(0);

  const incrementCount = () => {
    setCount(count + 1);
  };

  return (
    <div className="child">
      <h2>This is the Child Component</h2>
      <p>{props.message}</p>
      <p>Count: {count}</p>
      <button onClick={incrementCount}>Increment Count</button>

      <img src={image} style={{ width: "100px", height: "auto" }} alt="image" />
    </div>
  );
};

export default ChildComponent;
