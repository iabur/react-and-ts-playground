import Button from "./components/Button";

function App() {
  return (
    <div>
      <Button
        name="Click me"
        color="primary"
        onclick={() => console.log("clicked")}
      />
    </div>
  );
}

export default App;
