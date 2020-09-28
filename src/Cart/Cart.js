import React from 'react';

const Cart = (props) => {
    // console.log(props);
    const cart = props.cart;
    let total = 0;
    for (let i = 0; i < cart.length; i++) {
        const course = cart[i];
        total = (total+course.price);
        
    }
    console.log();
    return (
        <div>
           <h1>Total Price:{total} </h1> 
           <h2>Total Item:{cart.length} </h2>
        </div>
    );
};

export default Cart;