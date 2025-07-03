import { useEffect } from "react";
import SearchMenu from "./search-menu/SearchMenu";
import SettingsMenu from "./settings-menu/SettingsMenu";
import ProfileMenu from "./profile-menu/ProfileMenu";
import FavouritesNavButton from "./favourites-menu/FavouritesNavButton";

export default function Dock({ isUser, setIsUser, userId, setUserId }) {
  useEffect(() => {
    isUser ? setUserId(2) : setUserId(1);
  }, [isUser]);

  return (
    <div className="bg-base-200 w-screen fixed bottom-0 left-0 right-0 flex justify-center items-center z-50 h-18">
      <SearchMenu />
      <FavouritesNavButton />
      <ProfileMenu userId={userId} />
      <SettingsMenu isUser={isUser} setIsUser={setIsUser} />
    </div>
  );
}
