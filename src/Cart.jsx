import React from "react";
import { useContext } from "react";
import { cartProvider } from "./App";
import { useState } from "react";
import { useEffect } from "react";
import { useReducer } from "react";

const Cart = () => {
    const { cart, setCart } = useContext(cartProvider);


  //   function removeProduct(prduct) {}
  //   function clearCart() {
  //     setCart([]);
  //   }
  //   function quantityIncrease(item) {}
  const totalSum = cart?.reduce(
    (sum, item) => (sum = sum + item.Price * item.qty),
    0
  );
 

  return (
    <div>
      <div>Your cart</div>
      <button onClick={() => setCart({ type: "clear"})}>Clear cart </button>

      {cart.length === 0 && <p>Your cart is empty.</p>}
      {cart.map((item, index) => (
        <div key={item.id} id={index}>
          <button onClick={() => setCart({ type: "quantityIncrease" , payload : item})}>
            +
          </button>
          <div>product Id : {item.id}</div>
          <div>Product name : {item.name}</div>
          <div>Product price : {item.Price}</div>
          <div>Qty {item.qty ? item.qty : "-"}</div>
          <button onClick={() => setCart({ type: "decrement" , payload : item})}>-</button>
        </div>
      ))}
      <div>Total : {totalSum}</div>
    </div>
  );
};

export default Cart;
