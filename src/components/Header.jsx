import './Style/Header.css'

import { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import logo  from "../assets/LNTube.bg.svg"
export function Header(){

  const [menuOpen, setMenuOpen] = useState(false);
    return(
        <>
      <header className="header">

      <Link to="/" className="logo">

        <span className="logo-icon">
  <img src={logo} alt="LNTube Logo" className="logo-img" />
</span>

        <h1>LNTube</h1>

      </Link>

    <div className={`nav-links ${menuOpen ? "open" : ""}`}>
         <Link to="/workspace">Learn</Link>
        <Link to="/notes">Notes</Link>
        <Link to="/profile">Profile</Link>
    </div>

    <div
    className="menu-btn"
    onClick={() => setMenuOpen(!menuOpen)}
>
    {menuOpen ? <FaTimes /> : <FaBars />}
</div>

</header>
        </>

    );

}