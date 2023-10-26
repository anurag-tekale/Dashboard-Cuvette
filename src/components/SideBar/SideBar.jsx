import React, { useState } from "react";
import "./Sidebar.css";
import EqualizerOutlinedIcon from "@mui/icons-material/EqualizerOutlined";
import InsertDriveFileOutlinedIcon from "@mui/icons-material/InsertDriveFileOutlined";
import WorkspacePremiumOutlinedIcon from "@mui/icons-material/WorkspacePremiumOutlined";

const sidebarButtons = [
  { name: "Dashboard", icon: EqualizerOutlinedIcon },
  { name: "Skill Test", icon: WorkspacePremiumOutlinedIcon },
  { name: "Internships", icon: InsertDriveFileOutlinedIcon },
];

const Sidebar = () => {
  const [activeButton, setActiveButton] = useState("Skill Test");

  const handleButtonClick = (buttonName) => {
    setActiveButton(buttonName);
  };

  return (
    <div className="sidebar">
      {sidebarButtons.map((button, index) => (
        <div className="sidebar-button" key={index}>
          <button
            className={activeButton === button.name ? "active" : ""}
            onClick={() => handleButtonClick(button.name)}
          >
            {React.createElement(button.icon, {
              className: activeButton === button.name ? "button-icon" : "",
              style: { marginRight: 15, fontSize: 20 },
            })}
            {button.name}
          </button>
        </div>
      ))}
    </div>
  );
};

export default Sidebar;
