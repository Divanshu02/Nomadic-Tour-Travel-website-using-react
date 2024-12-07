import React, { useState } from "react";
import "./header.css";
import { nav } from "../../data/Data";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const [navList, setNavList] = useState(false);
  const location = useLocation(); // Get current route

  return (
    <>
      <header>
        <div className="container flex">
          <div className="logo">
            <img src="./images/logo.png" alt="" />
          </div>
          <div className="nav">
            <ul className={navList ? "small" : "flex"}>
              {nav.map((list, index) => {
                const isActive = location.pathname === list.path; // Check if the current route matches the link's path
                const linkStyle = isActive
                  ? { color: "#ff6347", fontWeight: "light", }
                  : {};

                return (
                  <li key={index}>
                    <Link
                      to={list.path}
                      style={linkStyle} // Apply 'active' class if it's the active route
                    >
                      {list.text}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="button flex">
            <button className="btn1" style={{ backgroundColor: "black" }}>
              <i className="fa fa-sign-out"></i>
              <Link to="/login" style={{ color: "white" }}>
                Sign In
              </Link>
            </button>
          </div>

          <div className="toggle">
            <button onClick={() => setNavList(!navList)}>
              {navList ? (
                <i className="fa fa-times"></i>
              ) : (
                <i className="fa fa-bars"></i>
              )}
            </button>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
