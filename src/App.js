import React, { useState } from "react";
import Product from "./components/Product";
import Add from "./components/Add";

function App() {
  const productsList = [
    { name: "Iphone", price: 800, id: 1 },
    { name: "Watch", price: 100, id: 2 },
  ];
  const [products, setProducts] = useState(productsList);
  const [clear, setClear] = useState({ name: "", price: 0.01, id: 3 });

  const addProducts = (setNewProducts, newProducts, isNameValid, isPriceValid) => {
    if (newProducts.name == "" || newProducts.price == "") { return; }
    if(isNameValid && isPriceValid){
      let key = Math.random();
    setNewProducts((prev) => ({ ...prev, id: key }));
    setProducts((prev) => [...prev, newProducts]);
    setNewProducts((prev) => ({ ...prev, name: "", price: "" }));
    }

  };

  const removeProduct = (id) => {
    const newList = products.filter((product) => product.id !== id);
    setProducts(newList);
  };

  return (
    <div className="wrapper">
      <Add onAddProduct={addProducts}/>
      <div className="list">
        {products.map((product) => (
          <Product
            onRemove={removeProduct}
            key={product.id}
            id={product.id}
            name={product.name}
            price={`${product.price} $`}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
