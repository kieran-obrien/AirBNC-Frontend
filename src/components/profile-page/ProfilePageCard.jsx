import { useEffect, useState } from "react";
import axios from "axios";
import Line from "../Line";
import { Link } from "react-router-dom";
import EditDetailsFieldset from "./EditDetailsFieldset";
import EditModeToggler from "./EditModeToggler";
import ProfilePageAvatar from "./ProfilePageAvatar";

export default function ProfilePageCard({ userId }) {
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
        userFirstName: user.first_name,
        userSurname: user.surname,
        userPhone: user.phone_number,
        userAvatar: user.avatar,
      });
    }
    getUserDetails();
  }, [userId]);

  const handleSaveChanges = (e) => {
    setEditMode(!editMode);
    const form = e.target;
    if (!form.checkValidity()) {
      e.preventDefault();
      form.reportValidity(); // triggers native validation messages
      return;
    }
    e.preventDefault();
    const inputs = Array.from(form.getElementsByClassName("userDetailInput"));
    console.log(inputs);
    setUserDetails({
      ...userDetails,
      userName: inputs[0].value + " " + inputs[1].value,
      userEmail: inputs[2].value,
      userPhone: inputs[3].value,
      userImg: inputs[4].value,
    });
    async function patchUserDetails() {
      const {
        data: { user },
      } = await axios.patch(
        `https://airbnc-backend.kieranobrien.dev/api/users/${userId}`,
        {
          first_name: inputs[0].value,
          surname: inputs[1].value,
          email: inputs[2].value,
          phone_number: inputs[3].value,
          avatar: inputs[4].value,
        }
      );
      console.log(user);
    }
    patchUserDetails();
  };

  const [userDetails, setUserDetails] = useState({});
  const [editMode, setEditMode] = useState(false);

  return (
    <section className="card-body w-90 flex flex-col m-5 pb-20 relative gap-3 justify-center items-center bg-base-200 rounded-xl border-3 border-b-0 border-secondary-content">
      <ProfilePageAvatar userDetails={userDetails} />

      <div className="flex flex-col items-center gap-1 -mt-5">
        <h5 className="text-2xl font-semibold">{userDetails.userName}</h5>
        <span className="badge badge-sm badge-secondary badge-outline">
          {userDetails.isHost ? "Host" : "Guest"}
        </span>
        <EditModeToggler editMode={editMode} setEditMode={setEditMode} />
      </div>

      <form
        className="flex flex-col items-center gap-4"
        onSubmit={handleSaveChanges}
      >
        <EditDetailsFieldset editMode={editMode} userDetails={userDetails} />
        <button
          disabled={!editMode}
          className="btn btn-small btn-outline btn-secondary"
        >
          Save Changes
        </button>
      </form>
    </section>
  );
}
