import React, { useState } from 'react';
import axios from 'axios';

function CheckoutPage({  }) {
    const handleOrder = async () => {
        
    };

    return (
        <div>
            <h2>Checkout</h2>
            <ul>
                {.map(item => (
                    <li key={item.structure_id}>
                        ID: {item.structure_id}, Type: {item.structure_type}, Quantity: {item.quantity}
                    </li>
                ))}
            </ul>
            <button onClick={handleOrder}>Order</button>
        </div>
    );
}

export default CheckoutPage;
