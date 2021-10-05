import React from 'react';
import useCart from '../../hooks/UseCart';
import useProducts from '../../hooks/UseProducts';
import Cart from '../cart/Cart';
import ReviewItem from '../../components/reviewItem/ReviewItem';
import { removeFromDb, clearTheCart } from '../../utilities/fakedb';
import { useHistory } from 'react-router-dom';

const OrderReview = () => {
    const [products] = useProducts();
    const [cart, setCart] = useCart(products);
    const history = useHistory()
    const handleRemoveData = key => {
        const newCart = cart.filter(product => product.key !== key);
        setCart(newCart);
        removeFromDb(key)
    }

    const handlePlaceOrder = () => {
        history.push('/placeorder');
        setCart([]);
        clearTheCart();
    }

    return (
        <div className="shop-container">
            <div className="product-container">
                {
                    cart.map(product => <ReviewItem key={product.key} product={product} handleRemoveData={handleRemoveData} ></ReviewItem>)
                }
            </div>
            <div className="cart-container">
                <Cart cart={cart}>

                    <button onClick={handlePlaceOrder} className="main-btn">Place Order</button>
                </Cart>
            </div>


        </div>
    );
};

export default OrderReview;