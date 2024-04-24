// OrdersPage.js

import axios from 'axios';
import React, { useState } from 'react';

function OrdersPage() {
    const [userId, setUserId] = useState('');
    const [orders, setOrders] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const handleSearch = async () => {
        axios.get('http://localhost:5000/api/orders?user_id=${userId}')
            .then(response => {console.log(response.data)})
            .catch(error => {console.log(error)})
    };

    return (
        <div style={{marginLeft: '10px'}}>
            <h1>Your Orders</h1>
            <div>
                <input
                    type="text"
                    value={userId}
                    onChange={(e) => setUserId(e.target.value)}
                    placeholder="SearchOrders (User ID)"
                />
                <button onClick={() => {handleSearch(); }}>Search</button>
            </div>
            <h2>Past Orders</h2>
            {loading && <p>Loading...</p>}
            {error && <p>{error}</p>}
            <ul>
                {orders.map((order) => (
                    <li key={order.order_id}>
                        Order ID: {order.order_id}, User ID: {order.user_id}, Structures: {order.structures.join(', ')}, Status: {order.status}, Date Submitted: {order.date_submitted}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default OrdersPage;