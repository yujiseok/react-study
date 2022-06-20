import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  const increase = () => {
    setCount(count + 1);
  };
  const decrease = () => {
    setCount(count - 1);
  };

  return (
    <div>
      <h1>Counter</h1>
      <button onClick={increase} type="button">
        +1
      </button>
      <button onClick={decrease} type="button">
        -1
      </button>
      <p>{count}</p>
    </div>
  );
};

export default Counter;
