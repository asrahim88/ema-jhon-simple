import React from 'react';

const ReviewItem = (props) => {
    
    const {name, quantity, key, price} = props.product;
    const style = {
        borderBottom: "1px solid lightGray",
        marginBottom: "5px",
        paddingTop: "5px",
        paddingBottom: "10px",
        marginLeft: "150px"
    }  
    return (
        <div style = {style} className = "reviewItem">
            <h4 className = "product-name">{name}</h4>
            <p >Quantity: {quantity}</p>
            <p><small>Price: ${price}</small></p>
           <br/>
           <button onClick = {() => props.removeProduct(key)} className = "main-button">Remove Order</button>
        </div>
    );
};

export default ReviewItem;