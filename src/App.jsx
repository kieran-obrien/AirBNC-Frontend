import { useState } from "react";
import "./App.css";
import Dock from "./components/Dock";
import PropertiesList from "./components/properties/PropertiesList";

function App() {
  const [isUser, setIsUser] = useState(true);
  const [userId, setUserId] = useState(2);
  return (
    <>
      <PropertiesList />
      <Dock isUser={isUser} setIsUser={setIsUser} setUserId={setUserId}/>
    </>
  );
}

export default App;
