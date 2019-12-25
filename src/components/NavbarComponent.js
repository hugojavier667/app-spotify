// @flow
import * as React from "react";
import { NavLink } from "react-router-dom";

export const NavbarComponent = props => {
  return (
    <nav className="navbar navbar-expand-md navbar-dark bg-dark">
        <a className="navbar-brand" href="/">
          <img src="img/banner-ico.png" width="30" height="30" alt="" />{" "}
          Spotiapp
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <NavLink className="nav-link" to="/albums">
                Albums
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/artists">
                Artists
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/search">
                Search
              </NavLink>
            </li>
          </ul>
        </div>
    </nav>
  );
};
