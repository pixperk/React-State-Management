import React, { useReducer } from "react";

function App() {
  const [state, dispatch] = useReducer(
    (state, action) => {
      switch (action.type) {
        case "SET_NAME":
          return { ...state, name: action.payload };
      }
    },
    {
      names: [],
      name: "",
    }
  );
  return <div></div>;
}

export default App;
