import React, { useState } from "react";
import "./Sidebar.css";
import EqualizerOutlinedIcon from "@mui/icons-material/EqualizerOutlined";
import InsertDriveFileOutlinedIcon from "@mui/icons-material/InsertDriveFileOutlined";
import WorkspacePremiumOutlinedIcon from "@mui/icons-material/WorkspacePremiumOutlined";

const Sidebar = () => {
  const [activeButton, setActiveButton] = useState("Skill Test"); // Set "Dashboard" as the initial activeButton

  const handleButtonClick = (buttonName) => {
    setActiveButton(buttonName);
  };

  return (
    <div className="sidebar">
      <div className="sidebar-button">
        <button
          className={activeButton === "Dashboard" ? "active" : ""}
          onClick={() => handleButtonClick("Dashboard")}
        >
          <EqualizerOutlinedIcon
            className={activeButton === "Dashboard" ? "button-icon" : ""}
            style={{ marginRight: 15, fontSize: 20 }}
          />
          Dashboard
        </button>
      </div>
      <div className="sidebar-button">
        <button
          className={activeButton === "Skill Test" ? "active" : ""}
          onClick={() => handleButtonClick("Skill Test")}
        >
          <WorkspacePremiumOutlinedIcon
            className={activeButton === "Skill Test" ? "button-icon" : ""}
            style={{ marginRight: 15, fontSize: 20 }}
          />
          Skill Test
        </button>
      </div>
      <div className="sidebar-button">
        <button
          className={activeButton === "Internships" ? "active" : ""}
          onClick={() => handleButtonClick("Internships")}
        >
          <InsertDriveFileOutlinedIcon
            className={activeButton === "Internships" ? "button-icon" : ""}
            style={{ marginRight: 15, fontSize: 20 }}
          />
          Internships
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
