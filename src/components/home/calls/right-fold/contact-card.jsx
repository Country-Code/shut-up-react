import React from "react";
import "./contact-card.css";

function ContactCard({ contact }) {
    return (
        <div className="contact-card">
            <div className="contact-top">
                <img src={contact.avatar} alt="" className="contact-avatar" />
                <div className="contact-info">
                    <label className="contact-name">{contact.name}</label>
                    <label className="contact-type">{contact.type}</label>
                </div>
            </div>
            <div className="contact-icons">
                <div className="contact-icon">
                    <i className="fi-rr-microphone"></i>
                </div>
                <div className="contact-icon">
                    <i className="fi-rr-play-alt"></i>
                </div>
                <div className="contact-icon">
                    <i className="fi-rr-menu-dots"></i>
                </div>
            </div>
        </div>
    );
}

export default ContactCard;
