import React from "react";
import "./header.css";
import { CiGrid42, CiSearch } from "react-icons/ci";
import { SlOptions } from "react-icons/sl";
import ProfileActions from "./profile-actions/ProfileActions";

function Header() {
    return (
        <div className="header">
            <div className="header-menu">
                <CiGrid42 size={30} />
            </div>
            <div className="header-leftFold">
                <label className="header-label">Shut-up</label>
            </div>
            <div className="header-rightFold">
                <div className="header-search">
                    <CiSearch size={20} />
                    <input type="text" placeholder="Search" />
                </div>
                <div className="header-profile">
                    <div className="header-options">
                        <SlOptions />
                    </div>
                    <ProfileActions />
                </div>
            </div>
        </div>
    );
}

export default Header;
