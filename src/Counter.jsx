import { useState } from "react";

export default function Counter() {
  const [counter, setCount] = useState(0);
  //   console.log(abc);

  const handleAdd = () => {
    const newCount = counter + 1;
    setCount(newCount);
  };
  const handleReduce = () => {
    const newCount = counter - 1;
    setCount(newCount);
  };

  return (
    <div className="main-div">
      <h2>Count : {counter}</h2>
      <button onClick={handleAdd} style={{ marginRight: "10px" }}>
        Add
      </button>
      <button onClick={handleReduce}>Reduce</button>
    </div>
  );
}
