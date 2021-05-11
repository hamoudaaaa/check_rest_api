import React from "react";
import { useSelector } from "react-redux";
import ContactCard from "../ContactCard/ContactCard";

const Contactlist = () => {
    const contact = useSelector((state) => state.ContactReducer.Contact);
    return (
        <div className="contacts-content">
            <div className="contacts-list">
                {contact.map((e, i) => (
                    <ContactCard contact={e} key={i} />
                ))}
            </div>
        </div>
    );
};

export default Contactlist;
