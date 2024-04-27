// CheckoutPage.js
import "../styles/CheckoutPage.css";
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const CheckoutPage = () => {
    const [cartData, setCartData] = useState([]);

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
        axios.post('http://localhost:5000/orders/add', cartData)
            .then(response => {
                console.log('Order submitted successfully:', response.data);
                clearCart();
            })
            .catch(error => console.error('Error submitting order:', error));
    }

    const clearCart = () => {
        setCartData([]);
    }

    return (
        <div className="checkout-container">
            <h1>Checkout</h1>
            {cartData.length > 0 ? (
                cartData.map(item => (
                    <div className="cart-item" key={item.user_id}>
                        <p><strong>User ID:</strong> {item.user_id}</p>
                        <p><strong>Designer:</strong> {item.designer}</p>
                        <p><strong>Product Name:</strong> {item.product_id}</p>
                        <p><strong>Beds:</strong> {item.numBed}</p>
                        <p><strong>Baths:</strong> {item.numBath}</p>
                        <p><strong>Quantity:</strong> {item.q}</p>
                        <p><strong>Total Cost:</strong> {item.total_cost}</p>
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
