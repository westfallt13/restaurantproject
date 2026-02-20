import { useState } from 'react';
import { submitOrder } from '../services/OrderService';

function OrderPage() {
  const [customerName, setCustomerName] = useState('');
  const [orderText, setOrderText] = useState('');
  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!customerName.trim() || !orderText.trim()) {
      setErrorMessage('Please fill in all fields');
      return;
    }

    setLoading(true);
    setErrorMessage('');
    setSuccessMessage('');

    const orderData = {
      customer_name: customerName,
      order_details: orderText
    };

    await submitOrder(orderData);

    setSuccessMessage('🎉 Order placed successfully! Thank you for dining with The Golden Plate.');
    setCustomerName('');
    setOrderText('');

    setTimeout(() => {
      setSuccessMessage('');
    }, 5000);

    setLoading(false);
  };

  return (
    <div className="order-page">
      <div className="order-container">
        <h1>Place Your Order</h1>
        <p className="order-subtitle">Let us prepare something special for you</p>

        {successMessage && (
          <div className="success-message">
            {successMessage}
          </div>
        )}

        {errorMessage && (
          <div className="error-message">
            {errorMessage}
          </div>
        )}

        <form onSubmit={handleSubmit} className="order-form">
          <div className="form-group">
            <label htmlFor="customerName">Your Name</label>
            <input
              type="text"
              id="customerName"
              value={customerName}
              onChange={(e) => setCustomerName(e.target.value)}
              placeholder="Enter your name"
              disabled={loading}
            />
          </div>

          <div className="form-group">
            <label htmlFor="orderText">Order Details</label>
            <textarea
              id="orderText"
              value={orderText}
              onChange={(e) => setOrderText(e.target.value)}
              placeholder="Tell us what you'd like to order..."
              rows="6"
              disabled={loading}
            />
          </div>

          <button 
            type="submit" 
            className="submit-button"
            disabled={loading}
          >
            {loading ? 'Processing...' : 'Place Order'}
          </button>
        </form>
      </div>
    </div>
  );
}

export default OrderPage;