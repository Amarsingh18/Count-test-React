import React, { useState } from 'react';
import './App.css'

function Counter() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  const getColor = () => {
    if (count >= 0 && count <= 4) {
      return 'green';
    } else if (count >= 5 && count <= 9) {
      return 'blue';
    } else {
      return 'red';
    }
  };

  return (
    <div>
      <h1 className="c" style={{ color: getColor() }}>{count}</h1>
      <button  className="a"  onClick={increment}> + </button>
      <button  className="b" onClick={decrement}> - </button>
    </div>
  );
}

export default Counter;
