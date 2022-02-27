import React, { useState } from "react";

function Item({ name, category }) {
  const [isInCart, setIsInCart]= useState('false');

  function handleAddCart (event){
    setIsInCart((isInCart)=>!isInCart);
    
  }

  return (
    <li className={!isInCart ? "in-cart" : ""}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={handleAddCart}>{isInCart? "Add to Cart":"Remove from Cart"}</button>
    </li>
  );
}

export default Item;
