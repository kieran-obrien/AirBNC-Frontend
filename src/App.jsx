import { useState, useEffect } from "react";
import "./App.css";
import Dock from "./components/dock/Dock";
import PropertiesList from "./components/properties-page/PropertiesList";
import { Route, Routes } from "react-router-dom";
import ProfilePage from "./components/profile-page/ProfilePage";
import FavouritesPage from "./components/favourites-page/FavouritesPage";
import SinglePropertyPage from "./components/single-property-page/SinglePropertyPage";
import PageNotFound from "./components/PageNotFound";

function App() {
  const [userId, setUserId] = useState(() => {
    return Number(localStorage.getItem("userId")) || 2;
  });
  const [isUser, setIsUser] = useState(() => {
    return userId === 2 ? true : false;
  });

  useEffect(() => {
    localStorage.setItem("userId", userId);
  }, [userId]);

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
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </>
  );
}

export default App;
