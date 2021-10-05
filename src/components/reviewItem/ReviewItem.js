import React from 'react';

const ReviewItem = (props) => {
    const { name, price, quantity, key } = props.product;
    const {handleRemoveData} = props;
    return (
        <div className="product">
            <div className="product-details">
                <h4 className="product-name">Name: {name}</h4>
                <p>Price:{price}</p>
                <p>Quantity: {quantity}</p>
                <button onClick={()=>handleRemoveData(key)} className="main-btn">Remove</button>
            </div>
        </div>
    );
};

export default ReviewItem;