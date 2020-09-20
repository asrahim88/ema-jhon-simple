import React from 'react';
const Cart = (props) => {
    const cart = props.cart;
    const total = cart.reduce((total, product)=> total + product.price,0)
    const tax = total / 10;
    let shiiping = 0;
        if (total>35) {
            shiiping = 0;
        } else if (total > 15) {
            shiiping = 12.99
        } else if (total > 0) {
            shiiping = 4.99;
        }
        const formateNumber = num=>{
            const precision = num.toFixed(2);
            return Number(precision);
        }
        const grantTotal = total + shiiping + Number(formateNumber( tax))
    return (
        <div>
            <h1>Order Su mmary</h1>
            <p>Item ordered: {cart.length} </p>
            <p> <small> Shiiping Cost:</small> {shiiping}</p>
            <p> <small>Tax + vat: {formateNumber( tax)} </small> </p>
            <p>Product price: {formateNumber(total)}</p>
            <p>Total price: {grantTotal}</p> 
        </div>
    );
};

export default Cart;