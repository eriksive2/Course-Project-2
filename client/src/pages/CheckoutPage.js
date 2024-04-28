import "../styles/CheckoutPage.css";
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const CheckoutPage = () => {
    const [cartData, setCartData] = useState([]);
    const [orderID, setOrderID] = useState('');

    useEffect(() => {
        fetchCartData();
    }, []);

    const fetchCartData = () => {
        axios.get('http://localhost:5000/addCart')
            .then(response => {
                setCartData(response.data);
            })
            .catch(error => console.error('Error fetching cart data:', error));
    }

    const submitCartDataToOrders = () => {
        const data = {
            orderID: generateOrderID(), // Generate or fetch the orderID
            addtocart: cartData // Pass the cartData array
        };

        axios.post('http://localhost:5000/orders/add', data)
            .then(response => {
                console.log('Order submitted successfully:', response.data);
                clearCart();
            })
            .catch(error => console.error('Error submitting order:', error));
    }

    const clearCart = () => {
        setCartData([]);
    }

    const generateOrderID = () => {
        // Implement your logic to generate or fetch the orderID
        // For example, you can generate a random ID or use a timestamp
        return Math.random().toString(36).substring(7);
    }

    return (
        <div className="checkout-container">
            <h1>Checkout</h1>
            {cartData.length > 0 ? (
    cartData.map((item, index) => (
        <div className="cart-item" key={index}>
            {Object.entries(item).map(([key, value]) => (
                <p key={key}>
                    <strong>{key}:</strong> {value}
                </p>
            ))}
        </div>
    ))
) : (
    <div>No items in the cart</div>
)}


            <button onClick={submitCartDataToOrders}>Submit Order</button>
        </div>
    );
}

export default CheckoutPage;
