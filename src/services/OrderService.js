import { ORDERS_URL, APIKEY } from './EnvAccess.js';

export const submitOrder = async (orderData) => {
  try {
    const response = await fetch(ORDERS_URL, {
      method: 'POST',
      headers: {
        'apikey': APIKEY,
        'Authorization': `Bearer ${APIKEY}`,
        'Content-Type': 'application/json',
        'Prefer': 'return=representation'
      },
      body: JSON.stringify(orderData)
    });
    
    if (!response.ok) {
      throw new Error('Failed to submit order');
    }
    
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error submitting order:', error);
    throw error;
  }
};