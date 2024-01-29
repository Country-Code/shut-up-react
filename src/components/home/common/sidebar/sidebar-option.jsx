import React from "react";
import "./sidebar-option.css";
import { useLocation, useNavigate } from "react-router-dom";

function SidebarOption({ option }) {
    const location = useLocation();
    const navigate = useNavigate();
    const isActive = location.pathname.startsWith(option.path);
    const classList = isActive ? "sidebar-option active" : "sidebar-option";

    return (
        <div className={classList} onClick={() => navigate(option.path)}>
            <div className="sidebar-option-icon">{option.icon}</div>
            {option.name && (
                <label className="sidebar-option-label">{option.name}</label>
            )}
        </div>
    );
}

export default SidebarOption;
