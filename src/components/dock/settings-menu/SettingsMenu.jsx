import { useLocation } from "react-router";
import Line from "../../Line";

export default function SettingsMenu({ isUser, setIsUser }) {
  const location = useLocation();
  return (
    <nav className="dropdown dropdown-top dropdown-end h-full group">
      <button
        tabIndex={0}
        role="button"
        className="btn btn-xl btn-ghost h-full flex flex-col justify-center gap-0 font-light group-focus-within:text-secondary hover:[&>i]:rotate-12"
      >
        <i className="ri-settings-5-line text-3xl transition-transform duration-300 ease-in-out"></i>
        <span className="text-xs">Settings</span>
      </button>
      <div
        tabIndex={0}
        className="dropdown-content menu bg-base-200 z-1 p-0 m-0 rounded-t-xl border-3 border-b-0 border-secondary-content"
      >
        <section className="card-body">
          <label className="flex cursor-pointer gap-2 justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
            </svg>
            <input
              type="checkbox"
              defaultChecked
              value="light"
              className="toggle toggle-secondary theme-controller"
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="12" cy="12" r="5" />
              <path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
            </svg>
          </label>

          {location.pathname.startsWith("/users") ? null : (
            <>
              <Line />
              <div className="flex gap-2 justify-center">
                <p>Host</p>
                <input
                  type="checkbox"
                  checked={isUser}
                  className="toggle toggle-secondary theme-controller"
                  onChange={() => setIsUser(!isUser)}
                />
                <p>User</p>
              </div>
            </>
          )}
        </section>
      </div>
    </nav>
  );
}
