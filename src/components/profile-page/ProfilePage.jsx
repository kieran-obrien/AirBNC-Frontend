import ProfilePageCard from "./ProfilePageCard";

export default function ProfilePage({ userId }) {
  return (
    <div className="flex items-center flex-col">
      <ProfilePageCard userId={userId} />
    </div>
  );
}
