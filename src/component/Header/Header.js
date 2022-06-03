import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/Logo.svg'
import './Header.css'

const Header = () => {
    return (
        <nav className='header'>
            <img src={logo} alt="" />
            <div>
                {/* <a href="/shop">Shop</a>
                <a href="/orders">Orders</a>
                <a href="/inventory">Invantory</a>
                <a href="/about">About Us</a> */}
                <Link to='/shop'>Shop</Link>
                <Link to='/orders'>Orders</Link>
                <Link to='/inventory'>Invantory</Link>
                <Link to='/orders'>About Us</Link>
                <Link to='/login'>Login</Link>
            </div>
        </nav>
    );
};

export default Header;