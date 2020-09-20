import React from 'react';
import fakeData from '../../fakeData';
import { useState } from 'react';
import './Shop.css';
import Product from '../Product/Product';
import Cart from '../Cart/Cart';
const Shop = () => {
   const first10 = fakeData.slice(0, 20);
    const [products, setproducts] = useState(first10)
    const [cart, setCart] = useState([])
    const handleAddProduct = (item) => {
        console.log("clicker", item)
        const newCart = [...cart, item]
        setCart(newCart)
    }
    return ( 
        <div className = "shop-container">
        <div className="product-container">
       
        {
            products.map(pd => <Product Item = {pd} handleAddProduct = {handleAddProduct}></Product>)
        }
        
        </div>
        
        <div className="cart-container">
       <Cart cart = {cart}></Cart>
        </div>
        
        </div>
    );
};

export default Shop;