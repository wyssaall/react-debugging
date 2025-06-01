import React, { useState } from "react";
import ChildComponent from "./components/ChildComponet";

function App() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("Wissal");

  return (
    <div>
      <h1>Hello {name}</h1>
      <h2>Count: {count}</h2>
      <ChildComponent count={count} setCount={setCount} />
    </div>
  );
}

export default App;
