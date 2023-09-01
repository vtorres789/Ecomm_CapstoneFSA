import { useEffect, useState } from "react";

export default function Home() {
 
    useEffect(() => {
      fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then(json=>console.log(json))
    }, []);

    return (
      <div className="home">
        <h1>World Soccer MegaShop Plus</h1>
        <div className="products">
          <div className="product">Item</div>
          <div className="product">Item</div>
          <div className="product">Item</div>
          <div className="product">Item</div>
        </div>
      </div>
    );
  }
