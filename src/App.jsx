import { createContext } from "react";
import "./App.css";
import { useState } from "react";
import Cart from "./Cart";
import AddSub from "./AddSub";
import { useReducer } from "react";
import FilterPage from "./FilterPage";

export const cartProvider = createContext(null);
function App() {
  const [cart, setCart] = useReducer(createAction, []);

  const product = [
    { id: 1, name: "Keyboard", Price: 2000, mqty: 10 },
    { id: 2, name: "Mouse", Price: 1500, mqty: 10 },
    { id: 3, name: "Monitor", Price: 1200, mqty: 10 },
  ];

  function createAction(state, action) {
    switch (action.type) {
      case "addToCart": {
        const product = action.payload;

        const exists = state.some((item) => item.id === product.id);

        if (exists) {
          return state.map((item) =>
            item.id === product.id ? { ...item, qty: item.qty + 1 } : item
          );
        }

        return [...state, { ...product, qty: 1 }];
      }
      case "quantityIncrease": {
        const prduct = action.payload;
        return state.map((item) =>
          item.id === prduct.id ? { ...item, qty: item.qty + 1 } : { ...item }
        );
      }

      case "decrement": {
        const prduct = action.payload;

        return state.map((item) =>
          item.id === prduct.id ? { ...item, qty: item.qty - 1 } : { ...item }
        );
      }

      case "clear":
        return [];
      default:
        throw new Error(`Unknown action: ${action.type}`);
    }
  }

  return (
    <div>
      {/* <div>Product list</div>
      <div>
        {product.map((data) => (
          <div key={data.id}>
            <div>product Id : {data.id}</div>
            <div>Product name : {data.name}</div>
            <div>Product price : {data.Price}</div>
            <button
              onClick={() => setCart({ type: "addToCart", payload: data })}
            >
              Add to cart
            </button>
          </div>
        ))}
      </div> */}
      <FilterPage/>
      <cartProvider.Provider value={{ cart, setCart }}>
        {/* <Cart />
        <AddSub /> */}
     
      </cartProvider.Provider>
    </div>
  );
}

export default App;
