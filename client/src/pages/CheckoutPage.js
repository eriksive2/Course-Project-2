import React, { useState, useEffect } from 'react';
import axios from 'axios';

function CheckoutPage({}) {
    const [cart, setCart] = useState([]);

    const handleCheckout = async () => {
        axios.post('http://localhost:5000/api/orders')
        .then(response => {
            console.log("checkout:...", response);
            setCart(response.data);
        })
        .catch(error => {
            console.error("Error fetching cart:...", error);
        }); 
    }
    useEffect(() => {
        axios.get(`http://localhost:5000/api/orders`)
        .then(response => {
            console.log("checkout:...", response);
            setCart(response.data);
        })
        .catch(error => {
            console.error("Error fetching cart:...", error);
        }); 
    }, [])
    

    return (
        <div style= {{marginLeft: "30px"}}>
            <h1>Checkout</h1>
            <div style={{marginLeft: "20px"}}>
                {cart.map((cartItems)=>  (
                    <ul key={cartItems.user_id}>
                        User ID: {cartItems.user_id}, Designer: {cartItems.designer}, Cost: {cartItems.total_cost}, Product Id: {cartItems.product_id}, Ordered at: {cartItems.createdAt}
                    </ul>
                ))}
                
            </div>
            <button onClick = {handleCheckout} style={{marginLeft:"10px"}} >Order</button>
        </div>
    );
}

export default CheckoutPage;
