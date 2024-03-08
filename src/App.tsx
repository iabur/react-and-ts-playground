import ListGroup from "./components/ListGroup";

function App() {
  let items = ["Dhaka", "Chittagong", "Sylhet", "Khulna", "Dinajpur"];
  let printSelectedItems = (item: String) => {
    console.log(item);
  };
  return (
    <div>
      <ListGroup
        items={items}
        heading="List Of Cities"
        onSelectedItems={printSelectedItems}
      />
    </div>
  );
}

export default App;
