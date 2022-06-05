import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';
import logo from '../../images/Logo.svg'
import './Header.css'

const Header = () => {
    const [user] = useAuthState(auth);

    const handlesignout = () => {
        signOut(auth);
    }
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
                {
                    user ?
                        <button onClick={handlesignout}>Sign out</button>
                        :
                        <Link to='/login'>Login</Link>}

            </div>
        </nav>
    );
};

export default Header;