import React, { useState, useEffect } from 'react';
import axios from 'axios';

function CheckoutPage({ cartItems }) {
    const [cart, setCart] = useState([]);

    const handleCheckout = async () => {

    }
    useEffect(() => {
        axios.get(`http://localhost:5000/addCart`)
        .then(response => {
            console.log("checkout:...", response);
            setCart(response.data);
        })
        .catch(error => {
            console.error("Error fetching cart:...", error);
        }); 
    }, [])
    

    return (
        <div>
            <h1>Checkout</h1>
            <ul>
                {cart.map((cartList)=>  (
                    <li key={cartList.user_id}>
                        User ID: {cartList.user_id}, Designer: {cartList.designer}, Cost: {cartList.total_cost}
                    </li>
                ))}
            </ul>
            <button onClick = {handleCheckout} >Order</button>
        </div>
    );
}

export default CheckoutPage;