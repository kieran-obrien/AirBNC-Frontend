import { Link } from "react-router-dom";

export default function PermissionDenied() {
  return (
    <div className="h-full flex flex-col items-center justify-center m-20 mt-4">
      <i className="ri-emotion-sad-line font-light text-secondary text-6xl mb-2"></i>
      <p className="text-center font-semibold">
        Oops! Looks like you aren't logged in as this user!
      </p>
      <Link to={`/`}>
        <button className="btn btn-md hover:text-rose-500 btn-circle mt-5">
          <i className="ri-home-smile-line text-2xl font-light text-secondary"></i>
        </button>
      </Link>
    </div>
  );
}
