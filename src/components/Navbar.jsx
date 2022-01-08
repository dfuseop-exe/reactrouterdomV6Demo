import React from 'react';
import '../App.css'
import {Link} from "react-router-dom";

const Navbar = (props) => {
    const user = props.user;
    return (
        <div className="navbar">
            <span className="logo"><Link className= "link" to="/"><span>Dfuse</span>.exe</Link></span>
            {user ? (
                <ul className="list">
                <li className="listItem">
                    <img
                    src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
                    alt="ing"
                    className="avatar"
                    />
                </li>
                <li className="listItem">Sushant Shinde</li>
                <li className="listItem">
                <Link onClick={props.handlelogout} className="link" to="/login">Logout</Link>
                </li>
            </ul>
            ) : (<Link className="link" to="/login">Login</Link>)}
        </div>
    ) 
}

export default Navbar
