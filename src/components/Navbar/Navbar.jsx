import React, { useState } from "react";
import images from "../../constants/images";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdOutlineRestaurantMenu } from "react-icons/md";
import "./Navbar.css";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const handleClick = () => {
    setToggle(false);
  };
  return (
    <nav className="app__navbar">
      <div className="app__navbar-logo">
        <img src={images.gericht} alt="" />
      </div>
      <ul className="app__navbar-links">
        <li className="p__opensans">
          <a href="#home">Home</a>
        </li>
        <li className="p__opensans">
          <a href="#about">About</a>
        </li>
        <li className="p__opensans">
          <a href="#menu">Menu</a>
        </li>
        <li className="p__opensans">
          <a href="#awards">Awards</a>
        </li>
        <li className="p__opensans">
          <a href="#contact">Contact</a>
        </li>
      </ul>
      <div className="app__navbar-login">
        <a href="#login" className="p__opensans">
          Login / Register
        </a>
        <div />
        <a href="/" className="p__opensans">
          Reserve Table
        </a>
      </div>
      <div className="app__navbar-smallscreen">
        <GiHamburgerMenu
          color="#fff"
          size={27}
          onClick={() => setToggle(true)}
          className="open_overlay"
        />
        {toggle && (
          <div className="app__navbar-smallscreen_overlay flex__center slide-bottom">
            <MdOutlineRestaurantMenu
              color="#fff"
              size={27}
              className="overlay__screen"
              onClick={() => setToggle(false)}
            />
            <ul className="app__navbar-smallscreen-links">
              <li className="p__opensans" onClick={handleClick}>
                <a href="#home">Home</a>
              </li>
              <li className="p__opensans" onClick={handleClick}>
                <a href="#about">About</a>
              </li>
              <li className="p__opensans" onClick={handleClick}>
                <a href="#menu">Menu</a>
              </li>
              <li className="p__opensans" onClick={handleClick}>
                <a href="#awards">Awards</a>
              </li>
              <li className="p__opensans" onClick={handleClick}>
                <a href="#contact">Contact</a>
              </li>
            </ul>
            <div className="app__navbar-smallscreen-login">
              <a href="#login" className="p__opensans" onClick={handleClick}>
                Login / Register
              </a>
              <a href="/" className="p__opensans" onClick={handleClick}>
                Reserve Table
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
