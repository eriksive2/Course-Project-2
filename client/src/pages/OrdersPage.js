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
    
    const handleSearch = async () => {
        setLoading(true);
        try {
            const response = await axios.get(`http://localhost:5000/orders?user_id=${userId}`);
            console.log("your search:...", response);
            setOrders(response.data);
        } catch (error) {
            console.error("Error fetching orders:...", error);
            setError(error.message);
        } finally {
            setLoading(false);
        }
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
                {orders.map((order) => (
                    <div key={order._id.$oid}>
                        <h3>Order ID: {order.orderID}</h3>
                        <ul>
                            {order.structuresOrdered.map((structure) => (
                                <li key={structure._id.$oid}>
                                    User ID: {structure.user_id}, Designer: {structure.designer}, Product ID: {structure.product_id}, Beds: {structure.numBed}, Baths: {structure.numBath}, Quantity: {structure.q}, Total Cost: {structure.total_cost}
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default OrdersPage;
