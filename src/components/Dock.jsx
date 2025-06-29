export default function Dock() {
  return (
    <div className="bg-base-200 w-full fixed bottom-0 left-0 right-0 flex justify-center items-center z-50 h-18">
      <div className="dropdown dropdown-top">
        <div
          tabIndex={0}
          role="button"
          className="btn btn-xl btn-ghost flex flex-col justify-around gap-0 font-light"
        >
          <i className="ri-menu-search-line text-3xl"></i>
          <span className="text-xs">Search</span>
        </div>
        <ul
          tabIndex={0}
          className="dropdown-content menu bg-base-200  z-1 w-52 p-2 my-1 rounded-tr-xl"
        >
          <li>
            <a>Item 1</a>
          </li>
          <li>
            <a>Item 2</a>
          </li>
        </ul>
      </div>

      <div className="dropdown dropdown-top">
        <div
          tabIndex={0}
          role="button"
          className="btn btn-xl btn-ghost flex flex-col justify-around gap-0 font-light"
        >
          <i className="ri-heart-2-line text-3xl"></i>
          <span className="text-xs">Favourites</span>
        </div>
      </div>

      <div className="dropdown dropdown-top dropdown-end">
        <div
          tabIndex={0}
          role="button"
          className="btn btn-xl btn-ghost flex flex-col justify-around gap-0 font-light"
        >
          <i className="ri-user-5-line text-3xl"></i>
          <span className="text-xs">Profile</span>
        </div>
        <ul
          tabIndex={0}
          className="dropdown-content menu bg-base-200  z-1 w-52 p-2 my-1 rounded-t-xl"
        >
          <li>
            <a>Item 1</a>
          </li>
          <li>
            <a>Item 2</a>
          </li>
        </ul>
      </div>

      <div className="dropdown dropdown-top dropdown-end">
        <div
          tabIndex={0}
          role="button"
          className="btn btn-xl btn-ghost flex flex-col justify-around gap-0 font-light"
        >
          <i className="ri-settings-5-line text-3xl"></i>
          <span className="text-xs">Settings</span>
        </div>
        <div
          tabIndex={0}
          className="dropdown-content menu bg-base-200 z-1 p-2 my-1 rounded-tl-xl"
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
            <hr className="my-3" />
            <div className="flex gap-2 justify-center">
              <p>User</p>
              <input type="checkbox" className="toggle theme-controller" />
              <p>Host</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
