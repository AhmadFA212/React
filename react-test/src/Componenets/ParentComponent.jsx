// ParentComponent.jsx
import React from "react";
import ChildComponent from "./ChildComponent";

const ParentComponent = () => {
  return (
    <div>
      <h1>This is the Parent Component</h1>
      <ChildComponent message="Hello from Parent" />
    </div>
  );
};

export default ParentComponent;
