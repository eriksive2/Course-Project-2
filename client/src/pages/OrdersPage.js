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
            setUserId(response.data)
        })
        .catch(error => {
            console.error("Error fetching orders:...", error);
        }); 
    }, [])   
    
    const handleSearch = async () => {
        setLoading(true);
        const data = await axios.get(`http://localhost:5000/orders?user_id=${userId}`)
        .then(response => {
            console.log("your search:...", response);
            setOrders(response.data);
        })
        .catch(error => {
            console.error("Error fetching orders:...", error);
        }); 
        setLoading(false);
    }

    return (
        <div style={{marginLeft: '20px'}}>
            <h1>Your Orders</h1>
            <div>
                <input
                    type="text"
                    value={userId}
                    onChange={(e) => setUserId(e.target.value)}
                    placeholder="Search Here"
                />
                <button onClick={handleSearch}>Search</button>
            </div>
            <h2>Past Orders</h2>
            {loading && <p>Loading...</p>}
            {error && <p>{error}</p>}
            <div style={{marginLeft: "20px"}}>
                {orders.map((order)=>  (
                    <ul key={order.user_id}>
                        User ID: {order.user_id}, Designer: {order.designer}, Cost: {order.total_cost}, Product Id: {order.product_id}, Ordered at: {order.createdAt}
                    </ul>
                ))}
                
            </div>
        </div>
    );
};

export default OrdersPage;