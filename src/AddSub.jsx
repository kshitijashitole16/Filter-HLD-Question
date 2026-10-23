import React from "react";
import { useReducer } from "react";

const AddSub = () => {
  const [state, addSub] = useReducer(createReducer, { count: 0 });
  function createReducer(state, action) {
    switch (action.type) {
      case "increment":
        return { ...state ,count: state.count + 1 };
      case "decrement":
        return { ...state , count: state.count - 1 };
    case "add" : return {...state ,count : state.count + action.payload}
      case "reset":
        return {...state , count: 0 };
    }
  }

  return (
    <div>
      <button onClick={() => addSub({ type: "increment" })}>+</button>
      <button onClick={() => addSub({ type: "decrement" })}>-</button>
      <button onClick={() => addSub({ type: "reset" })}>Reset</button>
      <button onClick={() => addSub({ type: "add" , payload: 5 })}>Add</button>
      <div>show : {state.count}</div>
    </div>
  );
};

export default AddSub;
