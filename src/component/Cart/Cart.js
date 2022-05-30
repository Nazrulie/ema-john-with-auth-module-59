import React from 'react';
import './Cart.css'

const Cart = (props) => {
    const { cart } = props;
    console.log(props)

    let total = 0;
    let shipping = 0;
    let quantity = 0;
    for (const product of cart) {
        quantity = quantity + product.quantity;
        total = total + product.price * product.quantity;
        shipping = shipping + product.shipping
    }
    const tax = (total * 0.1).toFixed(2);
    const grandTotal = total + shipping + parseFloat(tax)

    return (
        <div className='cart'>
            <h4>Order summary</h4>
            <p>Selected Items: {quantity}</p>
            <p>Total Price : {total}$</p>
            <p>Shipping : {shipping}$</p>
            <p>tax : {tax}</p>
            <h5>Grand Total : {grandTotal.toFixed(2)}$</h5>
            {
                props.children
            }
        </div>
    );
};

export default Cart;