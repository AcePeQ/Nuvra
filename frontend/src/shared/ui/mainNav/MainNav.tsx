import React from "react";
import { NavLink } from "react-router-dom";

export default function MainNav() {
  return (
    <nav>
      <ul>
        <NavLink to="/shop">On Sale</NavLink>
        <NavLink to="/on-sale">On Sale</NavLink>
        <NavLink to="/new-arrivals">New Arrivals</NavLink>
        <NavLink to="/brands">Brands</NavLink>
      </ul>
    </nav>
  );
}
