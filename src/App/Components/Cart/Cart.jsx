import React from "react";
import PropTypes from "prop-types";
import { DeleteSVG } from '../Icons/Icons';

import "./Cart.scss";

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
                        <DeleteSVG/>
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
