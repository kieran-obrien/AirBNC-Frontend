import Line from "../Line";

export default function ProfilePageAvatar({ userDetails }) {
  return (
    <div>
      <div className="avatar">
        <div className="mask mask-squircle w-48">
          <img src={userDetails.userImg} />
        </div>
      </div>
      <Line />
    </div>
  );
}
