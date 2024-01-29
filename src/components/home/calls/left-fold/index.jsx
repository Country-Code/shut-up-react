import React from "react";
import { CallsMenu, DialerList } from "../../../../data/calls";
import DialerItem from "./dialer-item";
import "./left-fold.css";
import MenuItem from "./menu-item";

function LeftFold() {
    const menu = CallsMenu;
    const dialer = DialerList;
    return (
        <div className="leftFold">
            <div className="fold-title">Calls</div>
            <div className="fold-main">
                <div className="leftFold-menu">
                    <div className="menu-items">
                        {menu.map((item) => {
                            return <MenuItem key={item.id} item={item} />;
                        })}
                    </div>
                </div>
                <div className="leftFold-dialer">
                    <label className="dialer-label">Make a call</label>
                    <div className="dialer-search">
                        <input type="text" placeholder="Type a name" />
                    </div>
                    <div className="dialer-suggested">
                        <label className="suggested-label">Suggested</label>
                        <div className="suggested-list">
                            {dialer.map((item) => {
                                return <DialerItem key={item.id} item={item} />;
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default LeftFold;
