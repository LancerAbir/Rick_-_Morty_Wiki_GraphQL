import React from "react";
import { Link } from "react-router-dom";
import logo from "../../logo/Rick_and_Morty_logo.png";

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <Link className="navbar-brand logo" to="/">
                <img src={logo} alt="logo" />
            </Link>
            <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
            >
                <span className="navbar-toggler-icon"></span>
            </button>

            <div
                className="collapse navbar-collapse"
                id="navbarSupportedContent"
            >
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item">
                        <Link className="nav-link active" active to="/">
                            Home
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link active" active to="/episodes">
                            Episodes
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link
                            className="nav-link active"
                            active
                            to="/characters"
                        >
                            Characters{" "}
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link
                            className="nav-link active"
                            active
                            to="/locations"
                        >
                            Locations
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
