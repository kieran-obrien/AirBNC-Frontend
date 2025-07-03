import { Link } from "react-router-dom";

export default function FavouritesNavButton() {
  return (
    <nav className="h-full group">
      <Link
        to={"/favourites"}
        className="btn btn-xl btn-ghost h-full flex flex-col justify-center gap-0 font-light group-focus-within:text-secondary"
      >
        <i className="ri-heart-2-line text-3xl"></i>
        <span className="text-xs">Favourites</span>
      </Link>
    </nav>
  );
}
