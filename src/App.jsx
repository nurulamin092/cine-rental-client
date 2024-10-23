import { useReducer } from "react";
import { useState } from "react";
import { MovieContext, ThemeContext } from "./context";
import Page from "./Page/Page";
import { CartReducer, initialState } from "./reducers/CartReducer";

function App() {
  const [darkMode, setDarkMode] = useState(true);
  // const [cartData, setCartData] = useState([]);

  const [state, dispatch] = useReducer(CartReducer, initialState);
  return (
    <>
      <ThemeContext.Provider value={{ darkMode, setDarkMode }}>
        <MovieContext.Provider value={{ state, dispatch }}>
          <Page />
        </MovieContext.Provider>
      </ThemeContext.Provider>
    </>
  );
}

export default App;
