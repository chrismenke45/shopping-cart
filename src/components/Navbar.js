import React from "react";
import { Link } from "react-router-dom"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

function Navbar(props) {
    const { displayCartToggle, cartQuantity } = props
    return (
        <div id="navBar">
            {/*these are the links that lead to other oages */}
            <h1 id="pageTitle">FORTNITE - Upcoming Items</h1>
            <Link to="/" style={{ textDecoration: 'none' }}>
                <h3 className="navItem">Home</h3>
            </Link>
            <Link to="/shop" style={{ textDecoration: 'none' }}>
                <h3 className="navItem">Shop</h3>
            </Link>
            <button onClick={displayCartToggle}>
                <FontAwesomeIcon icon={faShoppingCart} />
                {cartQuantity ? //if cart is empty dont display number, otherwise display number of items
                    <sup> {cartQuantity}</sup>
                    :
                    null}
            </button>
        </div>
    );
}

export default Navbar;