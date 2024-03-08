import ListGroup from "./components/ListGroup";

function App() {
  let items = ["Dhaka", "Chittagong", "Sylhet", "Khulna", "Dinajpur"];
  return (
    <div>
      <ListGroup items={items} heading="List Of Cities" />
    </div>
  );
}

export default App;
