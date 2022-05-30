import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../product/Product';
import { addToDb, getStoredCart } from '../../utilities/fakedb'
import './Shop.css'
import useProducts from '../../hooks/useProducts';
import { Link } from 'react-router-dom';

const Shop = () => {
    const [products, setPrducts] = useProducts()
    const [cart, setcart] = useState([])


    useEffect(() => {
        const storedCard = getStoredCart();
        const savedcard = [];
        for (const id in storedCard) {
            const addedproduct = products.find(product => product.id === id);
            if (addedproduct) {
                const quantity = storedCard[id]
                addedproduct.quantity = quantity
                savedcard.push(addedproduct)
            }
        }
        setcart(savedcard);
    }, [products])

    const handleClick = (selectedProduct) => {
        // console.log(product);
        // cart.push(product)
        let newCart = [];
        const exists = cart.find(product => product.id === selectedProduct.id);
        if (!exists) {
            selectedProduct.quantity = 1;
            newCart = [...cart, selectedProduct];
        }
        else {
            const rest = cart.filter(product => product.id !== selectedProduct.id);
            exists.quantity = exists.quantity + 1;
            newCart = [...rest, exists];
        }

        setcart(newCart);
        addToDb(selectedProduct.id)
    }
    return (
        <div className='shop'>
            <div className='products-container'>
                {
                    products.map(product => <Product
                        key={product.id}
                        product={product}
                        handleClick={handleClick}></Product>)
                }
            </div>
            <div className='cart-container'>
                <Cart cart={cart}>
                    <Link to='/orders'>
                        <button>Review Order</button>
                    </Link>
                </Cart>
            </div>
        </div>
    );
};

export default Shop;