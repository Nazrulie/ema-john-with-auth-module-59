
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee, faShoppingCart, faTrashAlt } from '@fortawesome/free-solid-svg-icons'
import React from 'react';
import './Reviwitem.css'

const Reviwitem = (props) => {
    const { product, handleremoveProdcut } = props;
    const { name, img, price, shipping, quantity } = props.product;
    return (
        <div className='review-item'>
            <div>
                <img src={img} alt="" />
            </div>
            <div className='review-item-details-container'>
                <div className="review-item-details">
                    <p className='product-name'> {name}</p>
                    <p>Price : <span className='orange-color'>{price}</span></p>
                    <p><small>Shipping : {shipping}</small></p>
                    <p><small>Quantity : {quantity}</small></p>
                </div>
                <div className="delete-container">
                    <button onClick={() => handleremoveProdcut(product)} className='delete-button'>
                        <FontAwesomeIcon className='delete-icon' icon={faTrashAlt}></FontAwesomeIcon>
                    </button>
                </div>

            </div>
        </div>
    );
};

export default Reviwitem;