import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  let [counter, setCounter] = useState(0);
  const incrementFunc = () => {
    if (counter <= 19) return setCounter(counter + 1);
    else return setCounter(20);
  };
  const removeFunc = () => {
    if (counter >= 1) return setCounter(counter - 1);
    else return setCounter(0);
  };
  return (
    <>
      <h1>Ali Hassan</h1>
      <h1>Counter</h1>
      <p>Counte Value is : {counter}</p>
      <button onClick={incrementFunc}>Add Counter</button>
      <button onClick={removeFunc}>Remove Value</button>
    </>
  );
}
export default App;
