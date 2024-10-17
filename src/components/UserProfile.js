import React from "react";
import "./UserProfile.css";

const UserProfile = ({ user }) => {
  return (
    <div className="main-content">
      <div className="user-profile-container">
        <img
          src={user.profilePicture}
          alt="User Avatar"
          className="avatar-user-profile"
        />
        <h2 className="user-name-user-profile">{user.username}</h2>
      </div>
    </div>
  );
};

export default UserProfile;
