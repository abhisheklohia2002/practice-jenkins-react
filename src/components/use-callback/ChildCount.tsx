import React from "react";

const ChildCount = React.memo(({ onClick }:any) => {
  console.log("Child Rendered");
  return <button onClick={onClick}>Click Child</button>;
});

export default ChildCount;