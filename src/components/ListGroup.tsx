import { useState } from "react";

interface Prop {
  items: String[];
  heading: String;
  onSelectedItems: (items: String) => void;
}

function ListGroup({ items, heading, onSelectedItems }: Prop) {
  const getMessage = () => {
    if (items.length === 0) {
      return <h1>No items found</h1>;
    }
  };

  let [selectedState, changeState] = useState(-1);

  return (
    <>
      <h1 className="list-group">{heading}</h1>
      {getMessage()}
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            className={
              selectedState === index
                ? "list-group-item active"
                : "list-group-item"
            }
            onClick={() => {
              changeState(index);
              onSelectedItems(item);
            }}
            key={index}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
