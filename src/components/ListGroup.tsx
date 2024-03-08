function ListGroup() {
  const items = [
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
