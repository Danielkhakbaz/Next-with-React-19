"use client";

import { use } from "react";
// eslint-disable-next-line boundaries/element-types
import { CountProvider, CountContext } from "@/app/context/provider";

const ContextPage = () => {
  return (
    <CountProvider>
      <Counter />
    </CountProvider>
  );
};

const Counter = () => {
  const { count, dispatch } = use(CountContext);

  return (
    <CountProvider>
      <p>The value of count is: {count}</p>
      <button
        className="btn btn-primary mr-1"
        onClick={() => dispatch({ type: "INCREMENT" })}
      >
        Increment
      </button>
      <button
        className="btn btn-primary ml-1"
        onClick={() => dispatch({ type: "DECREMENT" })}
      >
        Decrement
      </button>
    </CountProvider>
  );
};

export default ContextPage;
