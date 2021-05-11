import React from "react";
import { useDispatch } from "react-redux";
import avatar from "../../Assets/avatar.png";
import deleteBtn from "../../Assets/delete.png";
import editBtn from "../../Assets/edit.png";
import {
    deleteContact,
    getcontactss,
    toggle_true,
} from "../../Redux/Action/Contactaction";
import "./Contactcard.css";
import { Link } from "react-router-dom";
const ContactCard = ({ contact }) => {
    const dispatch = useDispatch();

    return (
        <div className="contact-card">
            <img src={avatar} alt="avatar" className="avatar" />
            <h3>{contact.name}</h3>
            <span>{contact.email}</span>
            <span>{contact.age}</span>
            <div className="delete-edit-btns">
                <img
                    src={deleteBtn}
                    alt="delete-icon"
                    onClick={() => dispatch(deleteContact(contact._id))}
                />
                {}
                <Link to="/editContact">
                    <img
                        src={editBtn}
                        alt="edit-icon"
                        onClick={() => {
                            dispatch(toggle_true());
                            dispatch(getcontactss(contact._id));
                        }}
                    />
                </Link>
            </div>
        </div>
    );
};

export default ContactCard;
