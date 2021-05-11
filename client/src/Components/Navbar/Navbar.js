import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
const Navbar = () => {
    return (
        <header>
            <h2>
                <i className="icon-plane" />
                <Link to="/">Authentification</Link>
            </h2>
            <nav>
                <ul>
                    <li>Hotels</li>

                    <li>Flights</li>

                    <ul className="ul_auth">
                        {/* {isAuth ? ( */}
                        <ul>
                            <Link to="/">
                                {" "}
                                <li>LOGOUT </li>
                            </Link>
                        </ul>
                        {/* ) : ( */}
                        <ul>
                            {" "}
                            <Link to="/register">
                                {" "}
                                <li className="auth">Register </li>
                            </Link>
                            <Link to="/login">
                                {" "}
                                <li className="auth">LogIn </li>
                            </Link>
                        </ul>
                    </ul>
                </ul>
            </nav>
        </header>
    );
};

export default Navbar;
