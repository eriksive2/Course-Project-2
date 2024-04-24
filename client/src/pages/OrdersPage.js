// OrdersPage.js

import axios from 'axios';
import React, { useState, useEffect } from 'react';

function OrdersPage() {
    const [userId, setUserId] = useState('');
    const [orders, setOrders] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);


    useEffect(() => {
        axios.get(`http://localhost:5000/orders`)
        .then(response => {
            console.log("your orders:...", response);
            setOrders(response.data);
        })
        .catch(error => {
            console.error("Error fetching orders:...", error);
        }); 
    }, [])   
    
    const handleOrders = () => {
        
    }

    return (
        <div style={{marginLeft: '20px'}}>
            <h1>Your Orders</h1>
            <div>
                <input
                    type="text"
                    value={userId}
                    onChange={(e) => setUserId(e.target.value)}
                    placeholder="SearchOrders (User ID)"
                />
                <button onClick={() => {handleOrders( userId ); }}>Search</button>
            </div>
            <h2>Past Orders</h2>
            {loading && <p>Loading...</p>}
            {error && <p>{error}</p>}
            <div style={{marginLeft: "20px"}}>
            {orders.map((orders)=>  (
                    <li key={orders.user_id}>
                        User ID: {orders.user_id}, Designer: {orders.designer}, Cost: {orders.total_cost}
                    </li>
                ))}
            </div>
        </div>
    );
};

export default OrdersPage;