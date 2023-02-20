import React, { useContext } from "react";
import { CartContext } from "../context/Cart";

const Cart = (props) => {
    const cart = useContext(CartContext);

    const total = cart.items.reduce((a, b) => a + Number(b.price), 0)
    return (
        <div className="cart">
            <h1>Cart</h1>
            {
                cart && cart.items.map((item) =>
                    <li>{item.name} - ₹{item.price} </li>)
            }
            <h2>Total Price :- ₹{total}</h2>
        </div>
    );
}

export default Cart;