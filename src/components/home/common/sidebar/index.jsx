import React from "react";
import { SidebarData } from "../../../../data/sidebar";
import "./sidebar.css";
import SidebarOption from "./sidebar-option";
import { SlOptions } from "react-icons/sl";
import { PiSquaresFourLight } from "react-icons/pi";
import { BiHelpCircle } from "react-icons/bi";

function Sidebar() {
    const topOptions = SidebarData;

    return (
        <div className="sidebar">
            <div className="sidebar-top">
                <div>
                    {topOptions.map((option) => {
                        return (
                            <SidebarOption key={option.id} option={option} />
                        );
                    })}
                </div>
                <div>
                    <SidebarOption option={{ icon: <SlOptions /> }} />
                </div>
            </div>
            <div className="sidebar-bottom">
                <SidebarOption
                    option={{
                        icon: <PiSquaresFourLight />,
                        name: "Applications",
                    }}
                />
                <SidebarOption
                    option={{ icon: <BiHelpCircle />, name: "Help" }}
                />
            </div>
        </div>
    );
}

export default Sidebar;
