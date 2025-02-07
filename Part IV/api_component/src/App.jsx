import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

// Components
import Fetch from "./components/Fetch";

function App() {
  return (
    <>
      <h2>A simple React Component to fetch from an API endpoint.</h2>
      <br />
      <br />
      <Fetch />
    </>
  );
}

export default App;
