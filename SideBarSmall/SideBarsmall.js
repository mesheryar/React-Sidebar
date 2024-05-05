import React, { useState } from "react";
import "./SideBarsmall.css";
import Logo from "../../assets/MainLogo.png";
import { RxDashboard } from "react-icons/rx";
import { BsHandbag, BsPeople } from "react-icons/bs";
import { FaRegFileLines } from "react-icons/fa6";
import { LuFolderMinus } from "react-icons/lu";
import { IoSettingsOutline, IoLogOut } from "react-icons/io5";

export default function SideBarsmall() {
  const [activeIcon, setActiveIcon] = useState(null);

  const handleIconClick = (iconName) => {
    setActiveIcon(iconName);
  };

  const getIconStyle = (iconName) => {
    return iconName === activeIcon ? { backgroundColor: "#b67571" } : {};
  };

  const getIconColor = (iconName) => {
    return iconName === activeIcon ? "#FFF" : "#53545C";
  };

  return (
    <div className="SideBareMainContainer">
      <div className="SiderbarLogo">
        <img src={Logo} alt="Logo" style={{ width: "74px", height: "37px" }} />
      </div>
      {}
      <div
        className="Sidebaricons"
        style={getIconStyle("dashboard")}
        onClick={() => handleIconClick("dashboard")}
      >
        <RxDashboard size={24} color={getIconColor("dashboard")} />
      </div>
      <div
        className="Sidebaricons"
        style={getIconStyle("shopping")}
        onClick={() => handleIconClick("shopping")}
      >
        <BsHandbag size={24} color={getIconColor("shopping")} />
      </div>
      <div
        className="Sidebaricons"
        style={getIconStyle("people")}
        onClick={() => handleIconClick("people")}
      >
        <BsPeople size={24} color={getIconColor("people")} />
      </div>
      <div
        className="Sidebaricons"
        style={getIconStyle("folder")}
        onClick={() => handleIconClick("folder")}
      >
        <LuFolderMinus size={20} color={getIconColor("folder")} />{" "}
        {/* Placeholder icon */}
      </div>
      <div
        className="Sidebaricons"
        style={getIconStyle("contract")}
        onClick={() => handleIconClick("contract")}
      >
        <FaRegFileLines size={24} color={getIconColor("contract")} />
      </div>
      <div
        className="Sidebaricons"
        style={getIconStyle("settings")}
        onClick={() => handleIconClick("settings")}
      >
        <IoSettingsOutline size={24} color={getIconColor("settings")} />
      </div>
      <div
        className="Sidebaricons"
        style={getIconStyle("Logout")}
        onClick={() => handleIconClick("Logout")}
      ></div>
      <div className="sidbarLogout">
        <IoLogOut size={24} color={getIconColor("Logout")} />
      </div>
    </div>
  );
}
