import React, {useState} from "react";


const Add = (props) => {

   const [newProducts, setNewProducts] = useState({
    name: "",
    price: 0.01,
    id: 3,
  });

  const [isNameValid, setIsNameValid] = useState(true);
  const [isPriceValid, setIsPriceValid] = useState(true);

  const changeName = (e) => {
    setNewProducts((prev) => ({ ...prev, name: e.target.value }));
  };

  const changePrice = (e) => {
    setNewProducts((prev) => ({ ...prev, price: e.target.value }));
  };

  const nameValid = () => {
    if (newProducts.name.trim() === "" || newProducts.name.length < 2) {
      setIsNameValid(false);
      return;
    }
    setIsNameValid(true);
    };

  const priceValid = () => {
    if (newProducts.price <= 0) {
      setIsPriceValid(false);
      return;
    }
    setIsPriceValid(true);
  };

  const addProducts = () => {
        props.onAddProduct(setNewProducts, newProducts, isNameValid, setIsNameValid, isPriceValid, setIsPriceValid)
    }


  return(
    <div className="add">
        <label>Product name</label>
        <input
          onInput={changeName}
          value={newProducts.name}
          onBlur={nameValid}
          type="text"
          className={isNameValid ? "" : "invalid"}
        />
        <label>Product price</label>
        <input
          onInput={changePrice}
          value={newProducts.price}
          onBlur={priceValid}
          type="number"
          className={isPriceValid ? "" : "invalid"}
        />
        <button onClick={addProducts} type="button">
          Add
        </button>
      </div>
  )

}


export default Add;