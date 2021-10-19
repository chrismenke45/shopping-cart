import React from "react";
import { Link } from "react-router-dom"

function Navbar(props) {
    const { displayCartToggle } = props
    return (
        <div>
            <ul>
                <Link to="/">
                    <li>Home</li>
                </Link>
                <Link to="/shop">
                    <li>Shop</li>
                </Link>
            </ul>
            <button onClick={displayCartToggle}>cart</button>
        </div>
    );
}

export default Navbar;