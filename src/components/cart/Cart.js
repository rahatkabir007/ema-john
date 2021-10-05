import React from 'react';
import './Cart.css'

const Cart = (props) => {
    const { cart } = props;
    console.log(props);

    let totalQuantity = 0;
    let total = 0;
    for (const product of cart) {
        if (!product.quantity) {
            product.quantity = 1;
        }
        total = total + product.price * product.quantity;
        totalQuantity = totalQuantity + product.quantity;
        total.toFixed(2);
    }
    const shipping = total > 0 ? 15 : 0;
    const tax = total > 0 ? 0.2 : 0;
    const grandTotal = total + shipping * tax;
    return (
        <div className="cart-details">
            <div className="cart">
                <h3 style={{ fontSize: "1.17em", fontWeight: "bold" }}>Order Summary</h3>
                <h5 >Items Ordered: {totalQuantity}</h5>
            </div>

            <table className="order-details">
                <tbody>
                    <tr>
                        <td>Items Price:</td>
                        <td>${total.toFixed(2)}</td>
                    </tr>
                    <tr>
                        <td>Shipping &  Handling:</td>
                        <td>${shipping}</td>
                    </tr>
                    <tr>
                        <td>Total before tax:</td>
                        <td>${total.toFixed(2)}</td>
                    </tr>
                    <tr>
                        <td>Estimated Tax:</td>
                        <td>${tax.toFixed(2)}</td>
                    </tr>
                    <tr className="total-row">
                        <td>Order Total:</td>
                        <td>${grandTotal.toFixed(2)}</td>
                    </tr>
                </tbody>
                <div id="review-button">
                    {props.children}
                </div>
            </table>

        </div>
    );
};

export default Cart;