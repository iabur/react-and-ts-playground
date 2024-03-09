import { useState } from "react";

function App() {
  const [array, setArray] = useState(["first", "second", "third"]);

  const handleClick = () => {
    // push
    setArray([...array, "fourth"]);
    // remove
    setArray(array.filter((arrayItem) => arrayItem !== "second"));
    // update;
    setArray(
      array.map((arrayItem) => (arrayItem === "first" ? "updated" : arrayItem))
    );
  };

  return (
    <div>
      <button onClick={handleClick}>{array.map((item) => `${item} `)}</button>
    </div>
  );
}

export default App;
