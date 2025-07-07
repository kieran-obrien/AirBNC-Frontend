import { useState } from "react";
import "./App.css";
import Dock from "./components/dock/Dock";
import PropertiesList from "./components/properties-page/PropertiesList";
import { Route, Routes } from "react-router-dom";
import ProfilePage from "./components/profile-page/ProfilePage";
import FavouritesPage from "./components/favourites-page/FavouritesPage";
import SinglePropertyPage from "./components/single-property-page/SinglePropertyPage";

function App() {
  const [isUser, setIsUser] = useState(true);
  const [userId, setUserId] = useState(2);

  return (
    <>
      <Dock
        isUser={isUser}
        userId={userId}
        setIsUser={setIsUser}
        setUserId={setUserId}
      />
      <Routes>
        <Route path="/" element={<PropertiesList />} />
        <Route path="/properties" element={<PropertiesList />} />
        <Route path="/properties/:id" element={<SinglePropertyPage />} />
        <Route path="/users/:id" element={<ProfilePage userId={userId} />} />
        <Route path="/favourites" element={<FavouritesPage />} />
      </Routes>
    </>
  );
}

export default App;
