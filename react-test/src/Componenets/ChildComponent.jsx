import React from "react";
import image from "/src/image.jpg";

const ChildComponent = (Prop) => {
  const img_link = "/src/image.jpg";
  return (
    <div className="child">
      <h2>This is the Child Component</h2>
      <p>{Prop.message}</p>

      <img src={image} style={{ width: "100px", height: "auto" }} alt="image" />
    </div>
  );
};

export default ChildComponent;
