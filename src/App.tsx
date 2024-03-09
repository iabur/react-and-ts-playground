import { useState } from "react";

function App() {
  const [currentState, setState] = useState({
    title: "My form",
    price: 100,
  });

  const handleClick = () => {
    var newObject = {
      ...currentState,
      price: currentState.price + 1,
    };
    setState(newObject);
  };

  return (
    <div>
      <button onClick={handleClick}>{currentState.price} Click me</button>
    </div>
  );
}

export default App;
