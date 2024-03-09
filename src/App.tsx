import { useState } from "react";

function App() {
  const [bugs, setBugs] = useState([
    { id: 1, description: "Bug 1", status: "to do" },
    { id: 2, description: "Bug 2", status: "to do" },
  ]);

  const handleClick = () => {
    setBugs(
      bugs.map((bug) => (bug.id === 1 ? { ...bug, status: "done" } : bug))
    );
  };

  return (
    <div>
      {bugs.map((bug) => (
        <p key={bug.id}>
          {bug.id} - {bug.description} - {bug.status}
        </p>
      ))}

      <button onClick={handleClick}>Update Bug</button>
    </div>
  );
}

export default App;
