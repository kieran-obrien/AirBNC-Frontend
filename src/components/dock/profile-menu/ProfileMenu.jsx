import ProfileCard from "./ProfileCard";

export default function ProfileMenu({ userId }) {
  return (
    <nav className="dropdown dropdown-top dropdown-end h-full group">
      <button
        tabIndex={0}
        role="button"
        className="btn btn-xl btn-ghost h-full flex flex-col justify-center gap-0 font-light group-focus-within:text-secondary"
      >
        <i className="ri-user-5-line text-3xl"></i>
        <span className="text-xs">Profile</span>
      </button>
      <section
        tabIndex={0}
        className="dropdown-content menu bg-base-200 w-60 z-1 p-0 m-0 rounded-t-xl border-3 border-b-0 border-secondary-content"
      >
        <ProfileCard userId={userId} />
      </section>
    </nav>
  );
}
