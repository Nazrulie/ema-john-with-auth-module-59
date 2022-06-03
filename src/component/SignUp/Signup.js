import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
// import './SignUp.css';
import img1 from '../../images/icon-1.png';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const Signup = () => {
    const [email, setemail] = useState('')
    const [password, setpassword] = useState('')
    const [confirmPassword, setconfirmpassword] = useState('')
    const [error, seterror] = useState('');
    const navigate = useNavigate();

    const [createUserWithEmailAndPassword, user] = useCreateUserWithEmailAndPassword(auth)

    const handleEmailblur = (event) => {
        setemail(event.target.value)
    }
    const handlePasswordblur = (event) => {
        setpassword(event.target.value)
    }
    const handleconfirmpassblur = (event) => {
        setconfirmpassword(event.target.value)
    }

    if (user) {
        navigate('/shop')
    }

    const handkeCreateUser = event => {
        event.preventDefault();
        if (password !== confirmPassword) {
            seterror('password incarrect');
            return
        }
        if (password.length < 6) {
            seterror('password must be 6 characters or logner')
            return;
        }
        createUserWithEmailAndPassword(email, password)
    }
    return (
        <div className='form-container'>
            <div>
                <h2 className='form-title'>sign up</h2>
                <form onSubmit={handkeCreateUser}>
                    <div className="input-grup">
                        <label htmlFor="email">Email</label>
                        <input onBlur={handleEmailblur} type="email" name="email" id="" required />
                    </div>
                    <div className="input-grup">
                        <label htmlFor="password">password</label>
                        <input onBlur={handlePasswordblur} type="password" name="password" id="" required />
                    </div>
                    <div className="input-grup">
                        <label htmlFor="Confirm-password">Confirm password</label>
                        <input onBlur={handleconfirmpassblur} type="password" name="password" id="" required />
                    </div>
                    <div>
                        <p style={{ color: 'red' }}>{error}</p>
                    </div>
                    <input className='form-submit' type="submit" value="signup" />
                </form>
                <p>Already have an account ? <Link className='form-link' to='/login'>Login</Link></p>
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

export default Signup;