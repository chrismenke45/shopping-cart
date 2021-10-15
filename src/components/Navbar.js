import React from "react";
import { Link } from "react-router-dom"

function Navbar() {
  return (
    <ul>
      <Link to="/">
      <li>Home</li>
      </Link>
      <Link to="/shop">
      <li>Shop</li>
      </Link>
    </ul>
  );
}

export default Navbar;