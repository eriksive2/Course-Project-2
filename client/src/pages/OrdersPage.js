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
        <div style={{marginLeft: '20px'}}>
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
            <div style={{marginLeft: "20px"}}>
                d
            </div>
        </div>
    );
}

export default OrdersPage;