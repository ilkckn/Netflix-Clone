import React, { useEffect, useState, useRef } from "react";
import "./Navbar.css";
import logo from "../../assets/logo.png";
import searchIcon from "../../assets/search_icon.svg";
import bellIcon from "../../assets/bell_icon.svg";
import profileIcon from "../../assets/profile_img.png";
import caretIcon from "../../assets/caret_icon.svg";
import { logout } from "../../firebase";
import { RiMenu3Fill } from "react-icons/ri";
import { LuArrowRightToLine } from "react-icons/lu";

function Navbar() {
  const navRef = useRef();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 120) {
        navRef.current.classList.add("navbarBlack");
      } else {
        navRef.current.classList.remove("navbarBlack");
      }
    });
  }, []);

  return (
    <div className="navbar" ref={navRef}>
      <div className="navbarLeft">
        <img src={logo} alt="" />
        <ul>
          <li>Home</li>
          <li>TV Shows</li>
          <li>Movies</li>
          <li>New & Popular</li>
          <li>My List</li>
          <li>Browse by Languages</li>
        </ul>
      </div>
      <div className="navbarRight">
        <RiMenu3Fill
          className="burgerIcon"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        />
        <img src={searchIcon} alt="" className="icons" />
        <p>Children</p>
        <img src={bellIcon} alt="" className="icons" />
        <div className="navbarProfile">
          <img src={profileIcon} alt="" className="profile" />
          <img src={caretIcon} alt="" />
          <div className="dropdown">
            <p
              onClick={() => {
                logout();
              }}
            >
              sign out
            </p>
          </div>
        </div>
      </div>
      {isMenuOpen ? (
        <div className="burger-menu">
          <div className="right-burger-links">
            <div className="search-bell">
              <img src={searchIcon} alt="" className="icons" />
              <img src={bellIcon} alt="" className="icons" />
            </div>
            <div className="navbarBurgerProfile">
              <img src={profileIcon} alt="" className="profile" />
              <img src={caretIcon} alt="" />
              <p>Children</p>
              <div className="burger-dropdown">
                <p
                  onClick={() => {
                    logout();
                  }}
                >
                  sign out
                </p>
              </div>
            </div>
          </div>
          <ul>
            <li>Home</li>
            <li>TV Shows</li>
            <li>Movies</li>
            <li>New & Popular</li>
            <li>My List</li>
            <li>Browse by Languages</li>
          </ul>
          <div className="closeIcon" onClick={() => setIsMenuOpen(false)}>
            <LuArrowRightToLine />
          </div>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
}

export default Navbar;
