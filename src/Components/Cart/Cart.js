import React from 'react';
const Cart = (props) => {
    const cart = props.cart;
    // const total = cart.reduce((total, product)=> total + product.price * product.quantity,0)
    let total = 0;
    for (let i = 0; i < cart.length; i++) {
        const product = cart[i];
        total = total + product.price * product.quantity;
       
    }
    const tax = total / 10;
    let shipping = 0;
        if (total>35) {
            shipping = 0;
        } else if (total > 15) {
            shipping = 12.99
        } else if (total > 0) {
            shipping = 4.99;
        }
        const formateNumber = num=>{
            const precision = num.toFixed(2);
            return Number(precision);
        }
        const grantTotal = total + shipping + Number(formateNumber( tax))
    return (
        <div>
            <h1>Order Summary</h1>
            <p>Item ordered: {cart.length} </p>
            <p> <small> shipping Cost:</small> {shipping}</p>
            <p>Product price: {formateNumber(total)}</p>
            <p> <small>Tax + vat: {formateNumber( tax)} </small> </p>
            <p>Total price: $ {formateNumber(grantTotal)}</p>
            {
                props.children
            } 
           
        </div>
    );
};

export default Cart;