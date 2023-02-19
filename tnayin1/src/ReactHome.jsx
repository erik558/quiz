import React, { useState } from "react";

function ReactHome() {
  const [count, setCount] = useState(5);

  function minus(){
    setCount((c) => c - 10)
  }

  function plus(){
    setCount((c) => c + 10)
  }

  return (
    <div>
      <button onClick={() => count > 0 && minus()}>-</button>
      <h3 className="nole">{count}</h3>
      <button onClick={() => plus()}>+</button>
    </div>
  );
}

export default ReactHome;
