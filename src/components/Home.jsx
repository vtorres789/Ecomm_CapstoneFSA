import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles.css";
import Table from "./table";

export default function App() {
  const [items, setItems] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => setItems(json));
  }, []);

  const handleAddToCart = (item) => {
    setCart([...cart, item]);
  };

  const handleRemoveFromCart = (item) => {
    setCart(cart.filter((cartItem) => cartItem.id !== item.id));
  };

  const columns = React.useMemo(
    () => [
      {
        Header: "Product Image",
        accessor: "image",
        Cell: ({ value }) => {
          return (
            <img
              alt="product"
              className="img-fluid img-rounded"
              width={200}
              src={value}
            />
          );
        }
      },

      {
        Header: "Product Title",
        accessor: "title"
      },
      {
        Header: "Product Price",
        accessor: "price"
      },
      {
        Header: "Add to Cart",
        Cell: ({ value: item }) => {
          return (
            <button
              onClick={() => {
                // handleAddToCart(item);
                console.log("Added to Cart!")
              }}
            >
              Add to Cart
            </button>
          );
        }
      },
      {
        Header: "Product Description",
        accessor: "description"
      },
    ],
    []
  );

  const handleCheckout = () => {
    // TODO: Implement checkout logic
    console.log("Checkout!");
  };

  return (
    <div className="App">
      <h1>World Megastore Plus</h1>
      <Table columns={columns} data={items} />
      <h1>Cart</h1>
      <ul>
        {cart.map((item) => (
          <li key={item.id}>
            <h2>{item.title}</h2>
            <img src={item.image} alt={item.title} />
            <p>{item.description}</p>
            <button onClick={() => handleRemoveFromCart(item)}>Remove from Cart</button>
          </li>
        ))}
      </ul>
      <button onClick={() => handleCheckout()}>Checkout</button>
    </div>
  );
}
