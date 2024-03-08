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

  //   items = [];

  if (items.length === 0) {
    return (
      <>
        <h1>List Group</h1>;<h1>No items</h1>;
      </>
    );
  }

  return (
    <>
      <h1>List Group</h1>
      {items.map((item) => (
        <li key={item.id}>{item.name}</li>
      ))}
    </>
  );
}
export default ListGroup;
