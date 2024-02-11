import React from "react";
import "./UserInformationSection.css";
const UserInformationSection = ({ avatar, name, bio }) => {
  return (
    <div className="user-info-section">
      <img src={avatar} alt="User Avatar" className="avatar" />
      <h2>{name}</h2>
      <p>{bio}</p>
    </div>
  );
};

export default UserInformationSection;
