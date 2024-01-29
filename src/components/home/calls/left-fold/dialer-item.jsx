import React from "react";
import "./dialer-item.css";

function DialerItem({ item }) {
    return (
        <div className="dialer-item">
            <img src={item.avatar} alt="" className="dialer-item-avater" />
            <div className="dialer-item-info">
                <label className="dialer-item-name">{item.name}</label>
                <label className="dialer-item-type">{item.type}</label>
            </div>
            <div className="dialer-item-icons">
                <div className="dialer-item-icon">
                    <i className="fi-rr-microphone"></i>
                </div>
                <div className="dialer-item-icon">
                    <i className="fi-rr-play-alt"></i>
                </div>
            </div>
        </div>
    );
}

export default DialerItem;
