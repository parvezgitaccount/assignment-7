import React from 'react';

const Cart = (props) => {
    const cart = props.cart;
    const total = cart.reduce((acc, current) => acc + current.price, 0);
    const totalPrice = total.toFixed(2);

    return (
        <div className = "col-12 text-center">
            <h2>Course: {cart.length}</h2>
            {
                cart.map(crt => (
                    <li className = "d-flex justify-content-between shadow p-2"><small>{crt.name}</small><small>$ {crt.price}</small></li>
                ))
            }
            <button className = "btn btn-primary btn-block mt-2">Checkout <span className = "badge badge-light">$ {totalPrice}</span></button>
        </div>
    );
};

export default Cart;