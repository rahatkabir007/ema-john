import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../images/logo.png';
import "./Header.css";

const Header = () => {
    return (
        <div className='header'>
            <img src={logo} alt="ema-john-logo" />
            <nav className="nav">
                <div className="nav-items">
                    <NavLink to="/shop">Shop</NavLink>
                    <NavLink to="/review">Order Review</NavLink>
                    <NavLink to="/inventory">Manage Inventory Here</NavLink>
                </div>
            </nav>
        </div>
    );
};

export default Header;