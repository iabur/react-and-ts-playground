import { useState } from "react";

import { produce } from "immer";

function App() {
  const [bugs, setBugs] = useState([
    { id: 1, description: "Bug 1", status: "to do" },
    { id: 2, description: "Bug 2", status: "to do" },
  ]);

  const handleClick = () => {
    // update bug using immer library
    setBugs(
      produce((draft) => {
        const bug = draft.find((bug) => bug.id === 1);
        if (bug) {
          bug.status = "done";
        }
      })
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
