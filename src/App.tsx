import { useState } from "react";

function App() {
  const [customer, setCustomer] = useState({
    name: "iabur Rahman",
    address: {
      city: "Dhaka",
      country: "Bangladesh",
    },
  });

  const handleClick = () => {
    setCustomer({
      ...customer,
      address: {
        ...customer.address,
        city: "Chittagong",
      },
    });
  };

  return (
    <div>
      <button onClick={handleClick}>{customer.address.city} Click me</button>
    </div>
  );
}

export default App;
