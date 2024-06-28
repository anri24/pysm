import React, { useState } from 'react';
import { PayPalScriptProvider, PayPalButtons } from '@paypal/react-paypal-js';
import axiosClient from '../../axios-client';
import { useStateContext } from '../../context/ContextProvider';
import { Navigate } from 'react-router-dom';

const PaymentComponent = () => {
    const [orderId, setOrderId] = useState(null);
    const {selectedOrderData, setSelectedOrderData, setIsModalOpen} = useStateContext();

    const createOrder = (data, actions) => {
        return actions.order.create({
            purchase_units: [{
                amount: {
                    currency_code: 'USD',
                    value: selectedOrderData?.price.toFixed(2)  // Replace with dynamic value if needed
                }
            }]
        });
    };

    const onApprove = (data, actions) => {
        return actions.order.capture().then(details => {
            const { orderID } = data;
            const result = {
                dataId: selectedOrderData.id,
                orderID,
            }
            
            // Send orderID to backend for execution
            axiosClient.post('execute-payment', result)
            .then(() => {
                console.log('Payment successful:', data);
                setSelectedOrderData({})
                setIsModalOpen(false)
            }).catch(err => {
                console.error('Error executing payment:', err);
            })
            // fetch('http://127.0.0.1:8000/api/execute-payment', {
            //     method: 'POST',
            //     headers: {
            //         'Content-Type': 'application/json',
            //     },
            //     body: JSON.stringify({ orderID }),
            // })
            //     .then(response => response.json())
            //     .then(data => {
            //         // Handle success response
            //         console.log('Payment successful:', data);
            //     })
            //     .catch(error => {
            //         // Handle error
            //         console.error('Error executing payment:', error);
            //     });
        });
    };

    return (
        <PayPalScriptProvider options={{ 'client-id': 'AfaefJZ2mxxS2uQsb9aiqROWKvybHZbm9nPK2YEgvD1iJI2PIGQC8JOLg7g8EkQPRq0cmSUchzC9-Aur' }}>
            <PayPalButtons
                createOrder={createOrder}
                onApprove={onApprove}
            />
        </PayPalScriptProvider>
    );
};

export default PaymentComponent;
