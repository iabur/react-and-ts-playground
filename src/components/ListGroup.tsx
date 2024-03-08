import { useState } from "react";

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

  let [selectedState, changeState] = useState(-1);

  return (
    <>
      <h1 className="list-group">List Group</h1>
      {getMessage()}
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            className={
              selectedState === index
                ? "list-group-item active"
                : "list-group-item"
            }
            onClick={() => changeState(index)}
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
