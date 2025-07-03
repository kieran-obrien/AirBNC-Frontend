import { useEffect } from "react";

export default function Dock({ isUser, setIsUser, setUserId }) {
  useEffect(() => {
    isUser ? setUserId(2) : setUserId(1);
  }, [isUser]);

  return (
    <div className="bg-base-200 w-full fixed bottom-0 left-0 right-0 flex justify-center items-center z-50 h-18">
      <div className="dropdown dropdown-top h-full group">
        <div
          tabIndex={0}
          role="button"
          className="btn btn-xl btn-ghost h-full flex flex-col justify-center gap-0 font-light group-focus-within:text-secondary"
        >
          <i className="ri-menu-search-line text-3xl"></i>
          <span className="text-xs">Search</span>
        </div>
        <div
          tabIndex={0}
          className="dropdown-content menu bg-base-200 z-1 w-80 p-0 m-0 rounded-t-xl border-3 border-b-0 border-secondary-content"
        >
          <div className="card-body">
            <div className="filter" id="sortBy">
              <input
                className="btn btn-secondary filter-reset"
                type="radio"
                name="sortBy"
                aria-label="All"
              />
              <input
                className="btn btn-secondary"
                type="radio"
                name="sortBy"
                aria-label="Popularity"
              />
              <input
                className="btn btn-secondary"
                type="radio"
                name="sortBy"
                aria-label="Price Per Night"
              />
            </div>

            <div className="filter" id="order">
              <input
                className="btn btn-secondary filter-reset"
                type="radio"
                name="order"
                aria-label="All"
              />
              <input
                className="btn btn-secondary"
                type="radio"
                name="order"
                aria-label="Ascending"
              />
              <input
                className="btn btn-secondary"
                type="radio"
                name="order"
                aria-label="Descending"
              />
            </div>

            <hr className="text-secondary-content my-3"></hr>

            <p className="font-bold text-xs">Min Price</p>
            <input
              type="range"
              min={0}
              max="500"
              defaultValue="0"
              className="range range-secondary"
            />

            <p className="font-bold text-xs">Max Price</p>
            <input
              type="range"
              min={0}
              max="500"
              defaultValue="500"
              className="range range-secondary"
            />

            <hr className="text-secondary-content my-3"></hr>

            <button className="btn w-1/2 btn-secondary">Filter</button>
          </div>
        </div>
      </div>

      <div className="dropdown dropdown-top h-full group">
        <div
          tabIndex={0}
          role="button"
          className="btn btn-xl btn-ghost h-full flex flex-col justify-center gap-0 font-light group-focus-within:text-secondary"
        >
          <i className="ri-heart-2-line text-3xl"></i>
          <span className="text-xs">Favourites</span>
        </div>
      </div>

      <div className="dropdown dropdown-top dropdown-end h-full group">
        <div
          tabIndex={0}
          role="button"
          className="btn btn-xl btn-ghost h-full flex flex-col justify-center gap-0 font-light group-focus-within:text-secondary"
        >
          <i className="ri-user-5-line text-3xl"></i>
          <span className="text-xs">Profile</span>
        </div>
        <div
          tabIndex={0}
          className="dropdown-content menu bg-base-200 z-1 p-0 m-0 rounded-t-xl border-3 border-b-0 border-secondary-content"
        >
          <div className="card-body">
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
                <circle cx="12" cy="12" r="5" />
                <path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
              </svg>
              <input
                type="checkbox"
                value="dark"
                className="toggle theme-controller"
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
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
              </svg>
            </label>
            <hr className="text-secondary-content my-3" />
            <div className="flex gap-2 justify-center">
              <p>User</p>
              <input type="checkbox" className="toggle theme-controller" />
              <p>Host</p>
            </div>
          </div>
        </div>
      </div>

      <div className="dropdown dropdown-top dropdown-end h-full group">
        <div
          tabIndex={0}
          role="button"
          className="btn btn-xl btn-ghost h-full flex flex-col justify-center gap-0 font-light group-focus-within:text-secondary"
        >
          <i className="ri-settings-5-line text-3xl"></i>
          <span className="text-xs">Settings</span>
        </div>
        <div
          tabIndex={0}
          className="dropdown-content menu bg-base-200 z-1 p-0 m-0 rounded-t-xl border-3 border-b-0 border-secondary-content"
        >
          <div className="card-body">
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
            <hr className="text-secondary-content my-3" />
            <div className="flex gap-2 justify-center">
              <p>Host</p>
              <input
                type="checkbox"
                defaultChecked
                className="toggle toggle-secondary theme-controller"
                onChange={() => setIsUser(!isUser)}
              />
              <p>User</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
