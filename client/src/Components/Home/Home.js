import React from "react";
import { useDispatch } from "react-redux";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import {
    getContact,
    toggle_false,
    toggle_true,
} from "../../Redux/Action/Contactaction";

function Home() {
    const dispatch = useDispatch();

    return (
        <div>
            <h1>welcome to my home</h1>
            <Link to="/">
                <Button
                    variant="primary"
                    onClick={() => dispatch(getContact())}
                >
                    contact list
                </Button>
            </Link>
            <br />
            <br />
            <Link to="/addcontact">
                <Button
                    variant="secondary"
                    onClick={() => dispatch(toggle_false())}
                >
                    add contact
                </Button>
            </Link>
            {/* <button className="app-btn"> contact list</button> <br />
            <button className="app-btn"> add contact </button> */}
        </div>
    );
}

export default Home;
