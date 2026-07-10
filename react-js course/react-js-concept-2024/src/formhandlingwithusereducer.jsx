import { useReducer, useEffect } from "react";

const initialState = {
  name: "",
  age: "",
  count: 0
};

function reducer(state, action) {
  switch (action.type) {
    case "NAME_VALUE":
      return {
        ...state,
        name: action.value
      };
    case "AGE_VALUE":
      return {
        ...state,
        age: action.value
      };
    case "INCREMENT":
      return {
        ...state,
        count: state.count + 1
      };
    case "DECREMENT":
      return {
        ...state,
        count: state.count - 1
      };
    case "RESET":
      return initialState;
    default:
      return state;
  }
}

function getLocalState() {
  const stored = localStorage.getItem("formState");
  return stored ? JSON.parse(stored) : initialState;
  
}



export default function FormhandlingUseReducer() {
  const [state, dispatch] = useReducer(reducer, initialState, getLocalState);

  // Save to localStorage on every state change
  useEffect(() => {
    localStorage.setItem("formState", JSON.stringify(state));
  }, [state]);

  return (
    <div>
      <form>
        <label>Name:</label>
        <input
          type="text"
          placeholder="Enter Name"
          value={state.name}
          onChange={(e) =>
            dispatch({ type: "NAME_VALUE", value: e.target.value })
          }
        />
        <br />
        <br />
        <label>Age:</label>
        <input
          type="number"
          placeholder="Enter Age"
          value={state.age}
          onChange={(e) =>
            dispatch({ type: "AGE_VALUE", value: e.target.value })
          }
        />
        <br />
        <br />
        <h4>Count is {state.count}</h4>
        <br />
        <br />
        <button
          type="button"
          onClick={() => dispatch({ type: "INCREMENT" })}
        >
          Increment
        </button>
        <br />
        <br />
        <button
          type="button"
          onClick={() => dispatch({ type: "DECREMENT" })}
        >
          Decrement
        </button>
        <br />
        <br />
        <button type="button" onClick={() => dispatch({ type: "RESET" })}>
          Reset
        </button>
      </form>
      <pre>{JSON.stringify(state, null, 2)}</pre>
    </div>
  );
}
