import Button from "./components/Button/Button";

function App() {
  return (
    <div>
      <Button name="Click me" onclick={() => console.log("Button clicked")} />
    </div>
  );
}

export default App;
