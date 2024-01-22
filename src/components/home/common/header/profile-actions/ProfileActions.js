import React, { useState } from "react";
import Disconnect from "./Disconnect";
import "../../../../../assets/css/header/profile-actions.css";

function ProfileActions() {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <div className="relative">
            <button onClick={toggleMenu} className="dropdown-button">
                <img className="header-avatar" src="avatar1.png" />
            </button>
            {menuOpen && (
                <div className="dropdown-menu">
                    {" "}
                    <button  className="dropdown-item">
                        Option 1
                    </button>
                    <button  className="dropdown-item">
                        Option 2
                    </button>
                    <button  className="dropdown-item">
                        Option 3
                    </button>
                    <Disconnect />
                </div>
            )}
        </div>
    );
}

export default ProfileActions;
