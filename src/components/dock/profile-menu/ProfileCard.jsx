import { useEffect, useState } from "react";
import axios from "axios";
import Line from "../../Line";
import { Link } from "react-router-dom";

export default function ProfileCard({ userId }) {
  useEffect(() => {
    async function getUserDetails() {
      const {
        data: { user },
      } = await axios.get(
        `https://airbnc-backend.kieranobrien.dev/api/users/${userId}`
      );
      console.log(user);
      const userName = user.first_name + " " + user.surname;
      const isHost = user.is_host;
      const userImg = user.avatar;
      const userEmail = user.email;
      const createdAtDate = user.created_at.split("T")[0];
      const userMemberSince = createdAtDate;
      setUserDetails({
        ...userDetails,
        userName,
        isHost,
        userImg,
        userEmail,
        userMemberSince,
      });
    }
    getUserDetails();
  }, [userId]);

  const [userDetails, setUserDetails] = useState({});

  return (
    <section className="card-body flex flex-col relative gap-3 justify-center items-center">
      <Link
        to={`/users/${userId}`}
        className="btn btn hover:text-rose-500 btn-circle absolute top-2 right-2 z-10"
      >
        <i className="ri-user-settings-line text-xl font-light"></i>
      </Link>

      <div>
        <div className="avatar">
          <div className="mask mask-squircle w-32">
            <img src={userDetails.userImg} />
          </div>
        </div>
        <Line />
      </div>

      <div className="flex flex-col items-center gap-1 -mt-5">
        <h5 className="text-sm font-semibold">{userDetails.userName}</h5>
        <span className="badge badge-sm badge-secondary badge-outline">
          {userDetails.isHost ? "Host" : "Guest"}
        </span>
      </div>

      <p>
        <i className="ri-mail-line text-lg text-secondary mr-2"></i>
        {userDetails.userEmail}
      </p>

      <p>
        Member Since:{" "}
        <span className="font-semibold">{userDetails.userMemberSince}</span>
      </p>
    </section>
  );
}
