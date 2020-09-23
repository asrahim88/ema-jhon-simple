import React from 'react';
const Cart = (props) => {
    const cart = props.cart;
    const total = cart.reduce((total, product)=> total + product.price,0)
    const tax = total / 10;
    let Shiping = 0;
        if (total>35) {
            Shiping = 0;
        } else if (total > 15) {
            Shiping = 12.99
        } else if (total > 0) {
            Shiping = 4.99;
        }
        const formateNumber = num=>{
            const precision = num.toFixed(2);
            return Number(precision);
        }
        const grantTotal = total + Shiping + Number(formateNumber( tax))
    return (
        <div>
            <h1>Order Summary</h1>
            <p>Item ordered: {cart.length} </p>
            <p> <small> Shiping Cost:</small> {Shiping}</p>
            <p> <small>Tax + vat: {formateNumber( tax)} </small> </p>
            <p>Product price: {formateNumber(total)}</p>
            <p>Total price: {formateNumber(grantTotal)}</p> 
        </div>
    );
};

export default Cart;