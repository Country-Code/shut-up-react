import React from 'react';
import { CallsContacts } from '../../../../data/calls';
import ContactCard from './contact-card';
import "./right-fold.css";

function RightFold() {
    const contactList = CallsContacts;
    return (
        <div className='rightFold'>
            <div className="fold-title">Contacts</div>
            <div className="fold-main">
                <div className='rightFold-options'>
                    <div className='contact-search'>
                        <input type="text" placeholder='Find a Contact' />
                        <div className='contact-search-icon'>
                            <i className='fi-rr-search'></i>
                        </div>
                    </div>
                    <div className='add-button'>
                        <div className='add-icon'>
                            <i className='fi-rr-user-add'></i>
                        </div>
                        <label className="add-label">Add Contact</label>
                    </div>
                </div>
                <div className='contact-list'>
                    {contactList.map((contact => {
                        return <ContactCard  key={contact.id} contact={contact} />
                    }))}
                </div>
            </div>
        </div>
    )
}

export default RightFold