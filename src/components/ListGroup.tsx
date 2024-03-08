function ListGroup() {
  let items = [
    {
      id: 1,
      name: "Item 1",
    },
    {
      id: 2,
      name: "Item 2",
    },
    {
      id: 3,
      name: "Item 3",
    },
  ];

  items = [];

  const getMessage = () => {
    if (items.length === 0) {
      return <h1>No items found</h1>;
    }
  };

  return (
    <>
      <h1>List Group</h1>
      {getMessage()}
      {items.map((item) => (
        <li key={item.id}>{item.name}</li>
      ))}
    </>
  );
}
export default ListGroup;
