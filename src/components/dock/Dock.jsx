import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import SearchMenu from "./search-menu/SearchMenu";
import SettingsMenu from "./settings-menu/SettingsMenu";
import ProfileMenu from "./profile-menu/ProfileMenu";
import FavouritesNavButton from "./favourites-menu/FavouritesNavButton";
import PropertiesNavButton from "./properties-menu/PropertiesNavButton";
import ProfileBlankIcon from "./profile-menu/ProfileBlankIcon";
import FavouritesBlankIcon from "./favourites-menu/FavouritesBlankIcon";

export default function Dock({ isUser, setIsUser, userId, setUserId }) {
  const location = useLocation();

  useEffect(() => {
    isUser ? setUserId(2) : setUserId(1);
  }, [isUser]);

  return (
    <div className="bg-base-200 w-screen fixed bottom-0 left-0 right-0 flex justify-center items-center z-50 h-18">
      {location.pathname === "/" || location.pathname === "/properties" ? (
        <SearchMenu />
      ) : (
        <PropertiesNavButton />
      )}

      {location.pathname !== "/favourites" ? (
        <FavouritesNavButton />
      ) : (
        <FavouritesBlankIcon />
      )}

      {!location.pathname.startsWith("/users") ? (
        <ProfileMenu userId={userId} />
      ) : (
        <ProfileBlankIcon />
      )}

      <SettingsMenu isUser={isUser} setIsUser={setIsUser} />
    </div>
  );
}
