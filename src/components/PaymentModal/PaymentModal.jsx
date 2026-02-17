import React, { useState } from 'react';
import './PaymentModal.module.scss'; // We will create simple styles for this below

const PaymentModal = ({ plan, onClose, onConfirm }) => {
  const [details, setDetails] = useState({
    name: '',
    email: '',
    phone: '',
    paymentMethod: 'card' // Default option
  });

  if (!plan) return null;

  const handleChange = (e) => {
    setDetails({ ...details, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Pass the collected details back to the parent component
    onConfirm(plan, details);
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="close-btn" onClick={onClose}>&times;</button>
        
        <h2>Checkout</h2>
        <div className="plan-summary">
          <p>You have selected:</p>
          <h3>{plan.title}</h3>
          <p className="price">{plan.price}</p>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Full Name</label>
            <input 
              type="text" 
              name="name" 
              value={details.name} 
              onChange={handleChange} 
              required 
              placeholder="Enter your name"
            />
          </div>

          <div className="form-group">
            <label>Email Address</label>
            <input 
              type="email" 
              name="email" 
              value={details.email} 
              onChange={handleChange} 
              required 
              placeholder="Enter your email"
            />
          </div>

          <div className="form-group">
            <label>Phone Number</label>
            <input 
              type="tel" 
              name="phone" 
              value={details.phone} 
              onChange={handleChange} 
              required 
              placeholder="Required for payment"
            />
          </div>

          <div className="form-group">
            <label>Payment Method</label>
            <select name="paymentMethod" value={details.paymentMethod} onChange={handleChange}>
              <option value="razorpay">Razorpay / UPI / Netbanking</option>
              <option value="card">Credit / Debit Card</option>
            </select>
          </div>

          <button type="submit" className="pay-btn">
            Proceed to Pay {plan.price}
          </button>
        </form>
      </div>
    </div>
  );
};

export default PaymentModal;