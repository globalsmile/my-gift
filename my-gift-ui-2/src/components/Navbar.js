import React from "react";
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className="links">
            <nav className="Navbar">
                <Link to="/"> Gifts</Link>
                <Link to="/Receivers"> Receivers</Link>
                <Link to="/Records">  Records</Link>
                <Link to="/Reminders"> Reminders</Link>
                <Link to="/Suggestions"> Suggestions</Link>
            </nav>
        </div>
    );
};
 
export default Navbar;