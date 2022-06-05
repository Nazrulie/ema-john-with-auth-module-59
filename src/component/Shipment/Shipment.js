import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import img1 from '../../images/icon-1.png';

const Shipment = () => {
    const [user] = useAuthState(auth)
    const [email, setemail] = useState('')
    const [name, setName] = useState('')
    const [address, setaddress] = useState('')
    const [phonenumber, setphone] = useState('')
    const [error, seterror] = useState('');
    // const navigate = useNavigate();

    // const [createUserWithEmailAndPassword, user] = useCreateUserWithEmailAndPassword(auth)

    const handleNameblur = event => {
        setName(event.target.value)
    }

    const handleAddressBlur = (event) => {
        setaddress(event.target.value)
    }
    const handlePhoneBlur = (event) => {
        setphone(event.target.value)
    }


    const handleCreateUser = event => {
        event.preventDefault();
        const shipping = { name, email, address, phonenumber };
        console.log(shipping)

    }
    return (
        <div className='form-container'>
            <div>
                <h2 className='form-title'>Shipping Infrrmation</h2>
                <form onSubmit={handleCreateUser}>
                    <div className="input-grup">
                        <label htmlFor="email">Name</label>
                        <input onBlur={handleNameblur} type="text" name="name" id="" required />
                    </div>
                    <div className="input-grup">
                        <label htmlFor="email">Email</label>
                        <input value={user?.email} readOnly type="email" name="email" id="" required />
                    </div>
                    <div className="input-grup">
                        <label htmlFor="password">Address</label>
                        <input onBlur={handleAddressBlur} type="text" name="address" id="" required />
                    </div>
                    <div className="input-grup">
                        <label htmlFor="phone">Phone Number</label>
                        <input onBlur={handlePhoneBlur} type="text" name="phone" id="" required />
                    </div>
                    <div>
                        <p style={{ color: 'red' }}>{error}</p>
                    </div>
                    <input className='form-submit' type="submit" value="Add Shipping" />
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

export default Shipment;