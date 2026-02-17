import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { CheckCircle } from 'lucide-react';

const PaymentSuccess = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { planName, amount, transactionId } = location.state || {};

  return (
    <div style={{ 
      textAlign: 'center', 
      padding: '50px', 
      maxWidth: '500px', 
      margin: '50px auto', 
      background: 'white', 
      borderRadius: '12px',
      boxShadow: '0 4px 20px rgba(0,0,0,0.1)' 
    }}>
      <CheckCircle size={80} color="#28a745" style={{ marginBottom: '20px' }} />
      <h1 style={{ color: '#333', marginBottom: '10px' }}>Payment Successful!</h1>
      <p style={{ color: '#666', fontSize: '1.1rem' }}>Thank you for subscribing to <strong>{planName || 'Membership'}</strong>.</p>
      
      <div style={{ background: '#f8f9fa', padding: '15px', borderRadius: '8px', margin: '20px 0', textAlign: 'left' }}>
        <p><strong>Amount Paid:</strong> {amount}</p>
        <p><strong>Transaction ID:</strong> {transactionId || 'N/A'}</p>
        <p><strong>Status:</strong> Completed</p>
      </div>

      <button 
        onClick={() => navigate('/dashboard')}
        style={{
          background: '#007bff',
          color: 'white',
          border: 'none',
          padding: '12px 25px',
          borderRadius: '6px',
          fontSize: '1rem',
          cursor: 'pointer'
        }}
      >
        Go to Dashboard
      </button>
    </div>
  );
};

export default PaymentSuccess;