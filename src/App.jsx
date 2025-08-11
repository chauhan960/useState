
import React, { useState } from "react";
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


function Counter() {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    if (count < 100) {
      setCount(count + 1);
    }
  };

  const handleDecrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Counter: {count}</h1>
      <button onClick={handleDecrement} disabled={count === 0}>
        -
      </button>
      <button onClick={handleIncrement} disabled={count === 100}>
        +
      </button>
    </div>
  );
}



export default Counter
