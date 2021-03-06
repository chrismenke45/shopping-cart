import React from "react";
import { Link } from "react-router-dom"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

function Navbar(props) {
    const { displayCartToggle, cartQuantity } = props
    return (
        <nav id="navBar">
            {/*these are the links that lead to other oages */}
            <Link to="/" style={{ textDecoration: 'none' }}>
                <h1 id="pageTitle">FORTNITE - Upcoming Items</h1>
            </Link>
            <Link to="/shop" style={{ textDecoration: 'none' }}>
                <h3 className="navItem">Shop</h3>
            </Link>
            <button id="cartButton" onClick={displayCartToggle}>
                <FontAwesomeIcon className="navItem" icon={faShoppingCart} />
                {cartQuantity ? //if cart is empty dont display number, otherwise display number of items
                    <sup> {cartQuantity}</sup>
                    :
                    null}
            </button>
        </nav>
    );
}

export default Navbar;