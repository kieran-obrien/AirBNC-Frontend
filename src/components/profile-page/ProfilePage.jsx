import ProfilePageCard from "./ProfilePageCard";
import { useParams } from "react-router-dom";
import PageNotFound from "../PageNotFound";
import PermissionDenied from "./PermissionDenied";

export default function ProfilePage({ userId }) {
  const { id } = useParams();

  return isNaN(id) ? (
    <PageNotFound />
  ) : Number(id) !== userId ? (
    <PermissionDenied />
  ) : (
    <div className="flex items-center flex-col">
      <ProfilePageCard userId={userId} />
    </div>
  );
}
