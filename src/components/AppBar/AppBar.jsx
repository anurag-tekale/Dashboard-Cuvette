import React from "react";
import "./AppBar.css";

const AppBar = () => {
  return (
    <div className="app-bar">
      <div className="org-name">
        <img
          src="https://cuvette.tech/app/static/media/logo.74bda650.svg"
          alt=""
        />
      </div>
      <div className="profile-button">
        <div className="profile-image">
          <img src="/images/me-org.png" alt="Profile" />
        </div>
        <div className="profile-name">Anurag Tekale</div>
      </div>
    </div>
  );
};

export default AppBar;
