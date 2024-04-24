import React, { useState, useEffect } from 'react';
import axios from 'axios';


function CheckoutPage({ cartItems }) {
    const [userId, setUserID] = useState('');
    const [cart, setCart] = useState([]);

    const Axios = () => {
        useEffect(() => {
          axios.get(`http://localhost:5000/addCart?user_id=${userId}`)
            .then((res) => {
              setCart(res.data.cart);
            })
        }, [])
    }
    

    
    const handleOrder = async () => {
        
    };

    return (
        <div>
            <h1>Checkout</h1>
            <ul>
                {cart.map((cart)=>  (
                    <li key={cart.user_id}>
                        User ID: {cart.user_id}, Designer: {cart.designer}, Cost: {cart.total_cost}
                    </li>
                ))}
            </ul>
            <button onClick={handleOrder}>Order</button>
        </div>
    );
}

export default CheckoutPage;
