import { useState } from "react";
import "./App.css";
import Dock from "./components/dock/Dock";
import PropertiesList from "./components/properties/PropertiesList";
import { Route, Routes } from "react-router";

function App() {
  const [isUser, setIsUser] = useState(true);
  const [userId, setUserId] = useState(2);

  return (
    <>
      <Dock isUser={isUser} setIsUser={setIsUser} setUserId={setUserId} />
      <Routes>
        <Route path="/" element={<PropertiesList />} />
        <Route path="/properties" element={<PropertiesList />} />
      </Routes>
    </>
  );
}

export default App;
