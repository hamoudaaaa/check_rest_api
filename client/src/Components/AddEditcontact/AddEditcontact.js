import React, { useState, useEffect } from "react";
import addBtn from "../../Assets/add.png";
import editBtn from "../../Assets/edit.png";
import { Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";

import "./AddEditcontact.css";
import { addContact, editcontact } from "../../Redux/Action/Contactaction";

const AddEditcontact = ({ history }) => {
    const dispatch = useDispatch();
    //Strore bech tjib is edit bech tchoufha true wala false
    const edit = useSelector((state) => state.ContactReducer.isEdit);
    const update = useSelector((state) => state.ContactReducer.user);
    const [user, setUser] = useState({ name: " ", email: " ", age: 0 });
    const handleChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value });
    };
    useEffect(() => {
        edit ? setUser(update) : setUser({ name: " ", email: " ", age: 0 });
    }, [edit, update]);
    // useEffect(() => {
    //     edit ? setUser(editUser):setUser({name:" ",email:" ",phone:0})
    //    }, [edit,editUser])
    return (
        <Form className="my-form">
            {/* input name */}
            <Form.Group className="my-little-form">
                <Form.Control
                    type="text"
                    placeholder="Enter contact name ..."
                    name="name"
                    value={user.name}
                    onChange={handleChange}
                    // onChange={(e) => setUser({ ...user, name: e.target.value })}
                />
                <Form.Text className="text-muted">
                    Name is required !!
                </Form.Text>
            </Form.Group>
            {/* input email */}
            <Form.Group>
                <Form.Control
                    type="text"
                    placeholder="Enter contact email ..."
                    name="email"
                    value={user.email}
                    onChange={handleChange}
                />
                <Form.Text className="text-muted">
                    Email is required !!
                </Form.Text>
            </Form.Group>
            {/* input phone */}
            <Form.Group>
                <Form.Control
                    type="number"
                    placeholder="Enter contact phone ..."
                    name="age"
                    value={user.age}
                    onChange={handleChange}
                />
            </Form.Group>
            {/* add or edit button */}
            {edit ? (
                <img
                    src={editBtn}
                    alt="add"
                    className="edit-btn"
                    onClick={() => {
                        dispatch(editcontact(update._id, user));
                        history.push("/");
                    }}
                />
            ) : (
                <img
                    src={addBtn}
                    alt="add"
                    className="add-btn"
                    onClick={() => {
                        dispatch(addContact(user));
                        history.push("/");
                    }}
                />
            )}
        </Form>
    );
};

export default AddEditcontact;
