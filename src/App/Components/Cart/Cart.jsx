import React from "react";
import PropTypes from "prop-types";
import "./Cart.scss";

const deleteIcon = <svg xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24">
    <path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"/>
</svg>;

const Cart = (props) => {
    let totalPrice = 0;

    return <div className="cart-wrapper">
        <h2 className="cart-headline">
            Warenkorb
        </h2>
        <hr/>
        <ul className="cart-list">
            {props.cart && !props.cart.length && "Aktuell gibt es keine Bücher im Warenkorb."}
            {props.cart.map((cartItem, index) => {
                totalPrice += cartItem.price;
                return <li key={cartItem.isbn + index} className="cart-list-item">
                    <p>{cartItem.title} - <strong>{cartItem.price} €</strong></p>
                    <button onClick={() => props.removeItemFromCart(index)}>
                        {deleteIcon}
                    </button>
                </li>
            })}
        </ul>
        <div className="cart-footer">
            <span>Preis:</span>
            <span>{totalPrice.toFixed(2)} €
                      </span>
        </div>
    </div>;
};

Cart.propTypes = {
    cart: PropTypes.array,
    removeItemFromCart: PropTypes.func
};




export default Cart;
