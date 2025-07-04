export default function EditDetailsFieldset({ editMode, userDetails }) {
  return (
    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
      <legend className="fieldset-legend">User Details</legend>

      <label className="label">First Name</label>
      <input
        type="text"
        className="input userDetailInput"
        defaultValue={userDetails.userFirstName}
        disabled={!editMode}
        minLength={1}
        maxLength={100}
        required
      />

      <label className="label">Surname</label>
      <input
        type="text"
        className="input userDetailInput"
        defaultValue={userDetails.userSurname}
        disabled={!editMode}
        minLength={1}
        maxLength={100}
        required
      />

      <label className="label">Email Address</label>
      <input
        type="email"
        className="input userDetailInput"
        defaultValue={userDetails.userEmail}
        disabled={!editMode}
        required
      />

      <label className="label">Phone</label>
      <input
        type="tel"
        className="input userDetailInput"
        defaultValue={userDetails.userPhone}
        disabled={!editMode}
        required
      />

      <label className="label">Avatar Image URL</label>
      <input
        type="url"
        className="input userDetailInput"
        defaultValue={userDetails.userAvatar}
        disabled={!editMode}
        required
      />
    </fieldset>
  );
}
