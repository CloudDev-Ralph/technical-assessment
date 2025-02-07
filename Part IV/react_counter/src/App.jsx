import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>Simple React Counter</h1>
      <h2>Count: {count}</h2>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          + Increment
        </button>
        <br />
        <br />
        <button onClick={() => setCount((count) => count - 1)}>
          - Decrement
        </button>
      </div>
    </>
  );
}

export default App;
