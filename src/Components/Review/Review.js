import React, { useEffect, useState } from 'react';
import { getDatabaseCart, processOrder, removeFromDatabaseCart } from '../../utilities/databaseManager';
import fakeData from '../../fakeData';
import ReviewItem from '../ReviewItem/ReviewItem';
import Cart from '../Cart/Cart';
import happyImage from '../../images/giphy.gif';

  
const Review = () => {
    
    const [cart, setCart] = useState([]);

    const [orderPlaced, setOrderPlaced] = useState(false);

    const handlePlaceOrder = () => {
        setCart([]);
        setOrderPlaced(true);
        processOrder();
    }


    const removeProduct = (productKey) => {
        const newCart = cart.filter(pd => pd.key !== productKey); 
        setCart(newCart);
       removeFromDatabaseCart(productKey) 
    }
    useEffect(() => {
        const saveCart = getDatabaseCart();
        const productKeys = Object.keys(saveCart);
        const cartProducts = productKeys.map(key => {
            const product = fakeData.find( pd => pd.key === key)
            product.quantity = saveCart[key];
            return product;
        });
        setCart(cartProducts);  
    }, [])
   
    let thankyou;
    if (orderPlaced) {
        thankyou = <img src ={happyImage} alt= ''/>
    }  
    return (
        <div className =  "twin-container">   
           <div className = "product-container">
           
          
           {
               cart.map(pd => <ReviewItem removeProduct = {removeProduct} key = {pd.key} product = {pd}></ReviewItem>)
           }
           {
              thankyou
           } 
           </div>
           <div className = "cart-container">
          
           <Cart cart = {cart}>
           <button onClick = {handlePlaceOrder} className = "main-button">Place Order</button>
           </Cart>
           </div>
        </div>
    );
};

export default Review;