import React, { useEffect, useState, useRef } from "react";
import Disconnect from "./Disconnect";
import "../../../../../assets/css/header/profile-actions.css";

function ProfileActions() {
    const [menuOpen, setMenuOpen] = useState(false);
    let menuRef = useRef();

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    useEffect(() => {

        let handler = (e) => {
            if (!menuRef.current.contains(e.target)) {
                setMenuOpen(false);
            }
        };

        document.addEventListener('mousedown', handler);

        return () => {
            document.removeEventListener('mousedown', handler);
        }
    });


    return (
        <div className="relative" ref={menuRef}>
            <button onClick={toggleMenu} className="dropdown-button">
                <img className="header-avatar" src="avatar1.png" />
            </button>
            {menuOpen && (
                <div className="dropdown-menu">
                    {" "}
                    <button className="dropdown-item">
                        Option 1
                    </button>
                    <button className="dropdown-item">
                        Option 2
                    </button>
                    <button className="dropdown-item">
                        Option 3
                    </button>
                    <Disconnect />
                </div>
            )}
        </div>
    );
}

export default ProfileActions;
