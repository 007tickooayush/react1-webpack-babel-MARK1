import React from 'react';

// child component
function Cart(props){
    return <div>
        <h1>Cart Component </h1>
        <h2>  Parent component name: {props.name}</h2>
        </div>;
}

export default Cart;