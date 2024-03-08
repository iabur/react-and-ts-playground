import { useState } from "react";
import Alert from "./components/Alert";
import Button from "./components/Button";

function App() {
  const [isAlertVisible, setAlertVisible] = useState(false);

  return (
    <div>
      {isAlertVisible === true && (
        <Alert onClose={() => setAlertVisible(false)} children="Alert"></Alert>
      )}
      <Button
        name="Click me"
        color="primary"
        onclick={() => setAlertVisible(true)}
      />
    </div>
  );
}

export default App;
