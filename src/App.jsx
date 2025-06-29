import { useState } from "react";
import "./App.css";
import Dock from "./components/Dock";

function App() {
  return (
    <>
      <h1 className="text-red-400">Hello AirBNC!</h1>
      <Dock />
    </>
  );
}

export default App;
