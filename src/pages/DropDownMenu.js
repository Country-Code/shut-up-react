import React, { useState } from "react";
import Logout from "./Logout";
import "../assets/css/pages/drop-down-menu.css";

function DropDownMenu() {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <div className="relative">
            <button onClick={toggleMenu} className="dropdown-button">
                <img className="header-avatar" src="avatar1.png" />
                <span>{menuOpen ? "▲" : "▼"}</span>
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
                    <Logout />
                </div>
            )}
        </div>
    );
}

export default DropDownMenu;
