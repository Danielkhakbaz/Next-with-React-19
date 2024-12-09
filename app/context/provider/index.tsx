import { createContext, useReducer, Dispatch, PropsWithChildren } from "react";

type ContextType = {
  count: number;
  dispatch: Dispatch<{ type: string }>;
};

const defaultCount = {
  count: 0,
  dispatch: () => {},
};

export const CountContext = createContext<ContextType>(defaultCount);

const CountReducer = (state: ContextType, action: { type: string }) => {
  switch (action.type) {
    case "INCREMENT": {
      return { ...state, count: state.count + 1 };
    }
    case "DECREMENT": {
      return { ...state, count: state.count - 1 };
    }
    default: {
      return { ...state };
    }
  }
};

export const CountProvider = ({ children }: PropsWithChildren) => {
  const [state, dispatch] = useReducer(CountReducer, defaultCount);

  return <CountContext value={{ ...state, dispatch }}>{children}</CountContext>;
};
