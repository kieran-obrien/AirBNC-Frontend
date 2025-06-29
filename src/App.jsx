import { useState } from "react";
import "./App.css";
import Dock from "./components/Dock";
import PropertiesList from "./components/properties/PropertiesList";

function App() {
  const [propertiesList, setPropertiesList] = useState([]);

  return (
    <>
      <PropertiesList
        propertiesList={propertiesList}
        setPropertiesList={setPropertiesList}
      />
      <Dock />
    </>
  );
}

export default App;
