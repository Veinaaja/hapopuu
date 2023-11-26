import React, { useState } from "react";
import { AiOutlineBars } from "react-icons/ai";
import { RiCloseLine } from "react-icons/ri";
import logo from "../../assets/logo.png";
import smallLogo from "../../assets/smallLogo.png"
import Button from "../UI/Button/Button";
import "../UI/Button/Button.css";

import "./Navbar.css";
import Divider from "../Divider";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div>
      <nav className="navbar container">
      <div className="logo">
      <picture>
        <source media="(min-width:600px)" srcset={logo} />
        <img src={smallLogo} alt="HP"/>
      </picture>
      </div>
      <menu>
        <ul
          className="nav-links"
          id={showMenu ? "nav-links-mobile" : "nav-links-mobile-hide"}
        >
          <li>
          {/* eslint-disable */}
            <a href="#">Kotisivu</a>
          </li>
          <li>
            <a href="#features">Ominaisuudet</a>
          </li>
          <li className="nav-btn">
            <Button text={"Ota lisää selvää"} btnClass={"btn-dark"} href={"#faq"} />
          </li>
        </ul>
      </menu>
      <div className="menu-icons" onClick={toggleMenu}>
        {showMenu ? (
          <RiCloseLine color="#fff" size={30} />
        ) : (
          <AiOutlineBars color="#fff" size={27} />
        )}
      </div>
    </nav>
    <Divider />
    </div>
    
  );
};

export default Navbar;
