import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import './Login.css';
import img1 from '../../images/icon-1.png'
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const Login = () => {
    const [email, setemail] = useState('')
    const [password, setpassword] = useState('')
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);
    const navigate = useNavigate()

    const location = useLocation()
    const from = location.state?.from?.pathname || '/'

    const handleEmailblur = event => {
        setemail(event.target.value);
    }
    const handlePasswordblur = event => {
        setpassword(event.target.value)
    }
    if (user) {
        navigate(from, { replace: true });
    }

    const handleUserSignin = event => {
        event.preventDefault();
        signInWithEmailAndPassword(email, password)
    }
    return (
        <div className='form-container'>
            <div>
                <h2 className='form-title'>Login</h2>
                <form onSubmit={handleUserSignin}>
                    <div className="input-grup">
                        <label htmlFor="email">Email</label>
                        <input onBlur={handleEmailblur} type="email" name="email" id="" required />
                    </div>
                    <div className="input-grup">
                        <label htmlFor="password">password</label>
                        <input onBlur={handlePasswordblur} type="password" name="password" id="" required />
                    </div>
                    <p style={{ color: 'red' }}>{error?.message}</p>
                    <input className='form-submit' type="submit" value="Login" />
                </form>
                <p>New to ema-john? <Link className='form-link' to='/signup'>Create an account</Link></p>
                {
                    loading && <p>Loading....</p>
                }
                <div className='line-part'>
                    <div></div>
                    <p>or</p>
                    <div></div>
                </div>
                <button className='google-btn google-container'>
                    <img src={img1} alt="" />
                    <p className=''> Continue with Google</p>
                </button>
            </div>
        </div>
    );
};

export default Login;