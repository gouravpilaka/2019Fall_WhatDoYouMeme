import React, { useState } from 'react';
import { NavLink } from "react-router-dom";

export default ()=> {

    const [isOpen, setIsOpen] = useState(false);

    return (
  <nav className="navbar" role="navigation" aria-label="main navigation">
    <div className="navbar-brand">
        <NavLink  className="navbar-item" to="/">
            <i className="fas fa-home fa-pull-left"></i>
            Home
        </NavLink>

        <a onClick={()=> setIsOpen(!isOpen) } role="button" className="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
        </a>
    </div>

    <div id="navbarBasicExample" className={ `navbar-menu ${ isOpen ? 'is-active' : '' }` } >
        <div className="navbar-start">

        <NavLink  className="navbar-item" to="/about">
            <i className="fab fa-vuejs fa-pull-left"></i>
            About
        </NavLink>

        <NavLink  className="navbar-item" to="/game">
            <i className="fas fa-ghost fa-pull-left"></i>
            Game
        </NavLink>

        <div className="navbar-item has-dropdown is-hoverable">
            <a className="navbar-link" >
            More
            </a>

            <div className="navbar-dropdown">
                <NavLink className="navbar-item" to="/about" >
                    <i className="fab fa-vuejs fa-pull-left"></i>
                    About
                </NavLink>
            <a className="navbar-item">
                Jobs
            </a>
            <a className="navbar-item">
                Contact
            </a>
            <hr className="navbar-divider" />
            <a className="navbar-item">
                Report an issue
            </a>
            </div>
        </div>
        </div>

        <div className="navbar-end">
        <div className="navbar-item">
            <div className="buttons">
            <a className="button is-primary">
                <strong>Sign up</strong>
            </a>
            <a className="button is-light">
                Log in
            </a>
            </div>
        </div>
        </div>
    </div>
    </nav>
    )
}


