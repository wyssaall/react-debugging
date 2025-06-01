import React from "react";

function ChildComponent({ count, setCount }) {
  return <button onClick={() => setCount(count + 1)}>Increment</button>;
}

export default ChildComponent;
