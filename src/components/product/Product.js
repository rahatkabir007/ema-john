import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import './Product.css';
import Rating from 'react-rating';


const Product = (props) => {
    const { name, img, seller, price, stock, star} = props.product;
    return (
        <div className= "product">
            <div className="product-image">
                <img src={img} alt="" />
            </div>
            <div className="product-details">
                <h4 className="product-name">{name}</h4>
                <p><small>by: {seller}</small></p>
                <p>Price: ${price}</p>
                <p><small>Only {stock} are in stock!</small></p>
                <Rating
                    initialRating = {star}
                    emptySymbol="far fa-star rating"
                    fullSymbol = "fas fa-star rating"
                    readonly></Rating>
                <br />
                <br/>
                {/* <p> {features}</p> */}
                <button onClick={() => props.handleAddtoCart(props.product)} className="main-btn"><FontAwesomeIcon icon={faShoppingCart} />
                    Add to Cart</button>
           </div>
        </div>
    );
};

export default Product;