// import mouse event from react
import { MouseEvent } from "react";

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

  const getMessage = () => {
    if (items.length === 0) {
      return <h1>No items found</h1>;
    }
  };

  const getEvent = (event: MouseEvent) => console.log(event);

  return (
    <>
      <h1 className="list-group">List Group</h1>
      {getMessage()}
      <ul className="list-group">
        {items.map((item) => (
          <li
            className="list-group-item active"
            onClick={getEvent}
            key={item.id}
          >
            {item.name}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
