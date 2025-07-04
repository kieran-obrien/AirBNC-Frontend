import { Link } from "react-router-dom";

export default function PropertiesNavButton() {
  return (
    <nav className="h-full group">
      <Link
        to={"/"}
        className="btn btn-xl btn-ghost h-full flex flex-col justify-center gap-0 font-light group-focus-within:text-secondary"
      >
        <i className="ri-home-smile-line text-3xl"></i>
        <span className="text-xs">Homes</span>
      </Link>
    </nav>
  );
}
