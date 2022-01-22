import React, { useReducer } from "react"

const initialState = { count: 0 };

function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 };
    case 'decrement':
      return { count: state.count - 1 };
    default:
      throw new Error();
  }
}

function Counter() {
  //при вызове функции dispatch вызывается функция reducer, где описывается что делать со стейтом
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <>
      <h1>Count: {state.count}</h1>
      <button onClick={() => dispatch({ type: 'decrement' })}>-</button>
      <button onClick={() => dispatch({ type: 'increment' })}>+</button>
    </>
  );
}

export default Counter