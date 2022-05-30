import React from 'react';
import { Link } from 'react-router-dom';
import useCart from '../../hooks/useCart';
import useProducts from '../../hooks/useProducts';
import { removeFromDb } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Reviwitem from '../Reviwitem/Reviwitem';
import './Order.css'

const Order = () => {
    const [products, setProducts] = useProducts();
    const [cart, setCart] = useCart(products);
    const handleremoveProdcut = product => {
        const rest = cart.filter(pd => pd.id !== product.id);
        setCart(rest);
        removeFromDb(product.id)
    }
    return (
        <div className='shop'>
            <div className='review-item-container'>
                {
                    cart.map(product => <Reviwitem
                        key={product.id}
                        product={product}
                        handleremoveProdcut={handleremoveProdcut}
                    ></Reviwitem>)
                }

            </div>
            <div className='cart-container'>
                <Cart cart={cart}>
                    <Link to='/inventory'>
                        <button>Proceed Checkout</button>
                    </Link>
                </Cart>

            </div>

        </div>
    );
};

export default Order;