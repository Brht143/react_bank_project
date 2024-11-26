import { NavLink } from "react-router-dom";
import React from 'react'


const Nav = () => {
  return (
        <div className="NavList">
        <NavLink className="navItem" to="/Home">
            Home
        </NavLink>
        <NavLink className="navItem" to="/Transactions">
            Transactions
        </NavLink>
        <NavLink className="navItem" to="/Users">
            Users
        </NavLink>
        <NavLink className="navItem" to="/Profile">
            Profile
        </NavLink>
    </div>
  )
}

export default Nav
