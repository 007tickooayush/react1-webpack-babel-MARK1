import React from 'react';

// Parent component
function Product(props){
    return <div>
        <h1>Product Parent of Cart</h1>
        <h2>  Parent component name: {props.name}</h2>
        </div>;
}

export default Product;