import React from "react";
import "./AppBar.css";

const AppBar = ({ orgLogoUrl, profileImageUrl, profileName }) => {
  return (
    <div className="app-bar">
      <div className="org-name">
        <img src={orgLogoUrl} alt="Organization Logo" />
      </div>
      <div className="profile-button">
        <div className="profile-image">
          <img src={profileImageUrl} alt="Profile" />
        </div>
        <div className="profile-name">{profileName}</div>
      </div>
    </div>
  );
};

export default AppBar;
