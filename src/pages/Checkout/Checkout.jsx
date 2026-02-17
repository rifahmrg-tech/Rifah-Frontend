// import React, { useState, useEffect } from 'react';
// import { useParams, useNavigate } from 'react-router-dom';
// import { ArrowLeft, CreditCard, Shield, CheckCircle } from 'lucide-react';
// import styles from './Checkout.module.scss'; // We will create this next

// const Checkout = () => {
//   const { planId } = useParams();
//   const navigate = useNavigate();
  
//   // We define plans here (or import them from a shared file) to know what was clicked
//   const plans = {
//     silver: { name: 'Silver Membership', price: '₹3,000', gst: '₹540', total: '₹3,540', color: '#C0C0C0' },
//     gold: { name: 'Gold Membership', price: '₹5,000', gst: '₹900', total: '₹5,900', color: '#FFD700' },
//     platinum: { name: 'Platinum Membership', price: '₹25,000', gst: '₹4,500', total: '₹29,500', color: '#E5E4E2' },
//     diamond: { name: 'Diamond Membership', price: '₹50,000', gst: '₹9,000', total: '₹59,000', color: '#b9f2ff' }
//   };

//   const selectedPlan = plans[planId?.toLowerCase()];

//   const [formData, setFormData] = useState({
//     fullName: '',
//     email: '',
//     phone: '',
//     address: ''
//   });

//   if (!selectedPlan) {
//     return <div className={styles.error}>Plan not found! <button onClick={() => navigate('/subscriptions')}>Go Back</button></div>;
//   }

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Connect Payment Gateway Here
//     alert(`Starting payment for ${selectedPlan.name}`);
//   };

//   return (
//     <div className={styles.container}>
//       <button onClick={() => navigate(-1)} className={styles.backButton}>
//         <ArrowLeft size={20} /> Back to Plans
//       </button>

//       <div className={styles.content}>
//         {/* Left Side: Plan Summary */}
//         <div className={styles.summaryCard} style={{ borderTop: `5px solid ${selectedPlan.color}` }}>
//           <h3>Order Summary</h3>
//           <div className={styles.planName}>{selectedPlan.name}</div>
          
//           <div className={styles.row}>
//             <span>Subtotal</span>
//             <span>{selectedPlan.price}</span>
//           </div>
//           <div className={styles.row}>
//             <span>GST (18%)</span>
//             <span>{selectedPlan.gst}</span>
//           </div>
//           <hr />
//           <div className={`${styles.row} ${styles.total}`}>
//             <span>Total to Pay</span>
//             <span>{selectedPlan.total}</span>
//           </div>

//           <div className={styles.trustBadges}>
//             <div className={styles.badge}><Shield size={16}/> Secure Payment</div>
//             <div className={styles.badge}><CheckCircle size={16}/> Cancel Anytime</div>
//           </div>
//         </div>

//         {/* Right Side: Billing Form */}
//         <div className={styles.formSection}>
//           <h2>Billing Details</h2>
//           <form onSubmit={handleSubmit}>
//             <div className={styles.inputGroup}>
//               <label>Full Name</label>
//               <input type="text" name="fullName" placeholder="John Doe" onChange={handleChange} required />
//             </div>

//             <div className={styles.grid2}>
//               <div className={styles.inputGroup}>
//                 <label>Email Address</label>
//                 <input type="email" name="email" placeholder="john@example.com" onChange={handleChange} required />
//               </div>
//               <div className={styles.inputGroup}>
//                 <label>Phone Number</label>
//                 <input type="tel" name="phone" placeholder="+91 98765 43210" onChange={handleChange} required />
//               </div>
//             </div>

//             <div className={styles.inputGroup}>
//               <label>Billing Address</label>
//               <textarea name="address" placeholder="Street address, City, State" onChange={handleChange} rows="3" required></textarea>
//             </div>

//             <button type="submit" className={styles.payButton}>
//               <CreditCard size={20} /> Pay {selectedPlan.total}
//             </button>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Checkout;

//----------------------17/02------------3.58----------------

// import React, { useState } from 'react';
// import { useParams, useNavigate } from 'react-router-dom';
// import { ArrowLeft, CreditCard, Shield, CheckCircle } from 'lucide-react';
// import styles from './Checkout.module.scss';
// import axios from 'axios'; // Ensure you have axios installed

// const Checkout = () => {
//   const { planId } = useParams();
//   const navigate = useNavigate();
  
//   const plans = {
//     silver: { name: 'Silver Membership', price: 3000, gst: 540, total: 3540, color: '#C0C0C0' },
//     gold: { name: 'Gold Membership', price: 5000, gst: 900, total: 5900, color: '#FFD700' },
//     platinum: { name: 'Platinum Membership', price: 25000, gst: 4500, total: 29500, color: '#E5E4E2' },
//     diamond: { name: 'Diamond Membership', price: 50000, gst: 9000, total: 59000, color: '#b9f2ff' }
//   };

//   const selectedPlan = plans[planId?.toLowerCase()];

//   const [formData, setFormData] = useState({
//     fullName: '',
//     email: '',
//     phone: '',
//     address: ''
//   });

//   // 1. Helper to load Razorpay Script
//   const loadRazorpayScript = () => {
//     return new Promise((resolve) => {
//       const script = document.createElement("script");
//       script.src = "https://checkout.razorpay.com/v1/checkout.js";
//       script.onload = () => resolve(true);
//       script.onerror = () => resolve(false);
//       document.body.appendChild(script);
//     });
//   };

//   // 2. Handle Payment Click
//   const handlePayment = async (e) => {
//     e.preventDefault();

//     // Basic Validation
//     if(!formData.fullName || !formData.phone || !formData.email) {
//       alert("Please fill in all details");
//       return;
//     }

//     const res = await loadRazorpayScript();
//     if (!res) {
//       alert("Razorpay SDK failed to load. Are you online?");
//       return;
//     }

//     try {
//       // A. Create Order on Backend
//       // Replace with your actual backend URL if different
//       const result = await axios.post("http://localhost:5000/api/payment/orders", {
//         amount: selectedPlan.total, 
//       });

//       if (!result) {
//         alert("Server error. Are you online?");
//         return;
//       }

//       const { amount, id: order_id, currency } = result.data;

//       // B. Configure Razorpay Options
//       const options = {
//         key: "YOUR_RAZORPAY_KEY_ID", // Enter the Key ID generated from the Dashboard
//         amount: amount.toString(),
//         currency: currency,
//         name: "Rifah Chamber of Commerce",
//         description: `Payment for ${selectedPlan.name}`,
//         order_id: order_id, // This is the order_id created in step A
//         handler: async function (response) {
//           // C. Verify Payment on Backend
//           const data = {
//             razorpay_payment_id: response.razorpay_payment_id,
//             razorpay_order_id: response.razorpay_order_id,
//             razorpay_signature: response.razorpay_signature,
//           };

//           const verifyRes = await axios.post("http://localhost:5000/api/payment/verify", data);

//           if(verifyRes.status === 200) {
//               alert("Payment Successful!");
//               navigate('/dashboard'); // Redirect to dashboard or success page
//           }
//         },
//         prefill: {
//           name: formData.fullName,
//           email: formData.email,
//           contact: formData.phone,
//         },
//         theme: {
//           color: "#007bff",
//         },
//       };

//       // D. Open Razorpay Window
//       const paymentObject = new window.Razorpay(options);
//       paymentObject.open();

//     } catch (error) {
//       console.log(error);
//       alert("Error initiating payment. Check console.");
//     }
//   };

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   if (!selectedPlan) {
//     return <div className={styles.error}>Plan not found!</div>;
//   }

//   return (
//     <div className={styles.container}>
//       <button onClick={() => navigate(-1)} className={styles.backButton}>
//         <ArrowLeft size={20} /> Back to Plans
//       </button>

//       <div className={styles.content}>
//         {/* Left Side: Summary */}
//         <div className={styles.summaryCard} style={{ borderTop: `5px solid ${selectedPlan.color}` }}>
//           <h3>Order Summary</h3>
//           <div className={styles.planName}>{selectedPlan.name}</div>
          
//           <div className={styles.row}>
//             <span>Subtotal</span>
//             <span>₹{selectedPlan.price.toLocaleString()}</span>
//           </div>
//           <div className={styles.row}>
//             <span>GST (18%)</span>
//             <span>₹{selectedPlan.gst.toLocaleString()}</span>
//           </div>
//           <hr />
//           <div className={`${styles.row} ${styles.total}`}>
//             <span>Total to Pay</span>
//             <span>₹{selectedPlan.total.toLocaleString()}</span>
//           </div>

//           <div className={styles.trustBadges}>
//             <div className={styles.badge}><Shield size={16}/> Secure Payment</div>
//             <div className={styles.badge}><CheckCircle size={16}/> Cancel Anytime</div>
//           </div>
//         </div>

//         {/* Right Side: Form */}
//         <div className={styles.formSection}>
//           <h2>Billing Details</h2>
//           <form onSubmit={handlePayment}>
//             <div className={styles.inputGroup}>
//               <label>Full Name</label>
//               <input type="text" name="fullName" placeholder="John Doe" onChange={handleChange} required value={formData.fullName} />
//             </div>

//             <div className={styles.grid2}>
//               <div className={styles.inputGroup}>
//                 <label>Email Address</label>
//                 <input type="email" name="email" placeholder="john@example.com" onChange={handleChange} required value={formData.email} />
//               </div>
//               <div className={styles.inputGroup}>
//                 <label>Phone Number</label>
//                 <input type="tel" name="phone" placeholder="+91 98765 43210" onChange={handleChange} required value={formData.phone} />
//               </div>
//             </div>

//             <div className={styles.inputGroup}>
//               <label>Billing Address</label>
//               <textarea name="address" placeholder="Street address, City, State" onChange={handleChange} rows="3" required value={formData.address}></textarea>
//             </div>

//             <button type="submit" className={styles.payButton}>
//               <CreditCard size={20} /> Pay ₹{selectedPlan.total.toLocaleString()}
//             </button>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Checkout;

//----------------------17/02------------5.07----------------

import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, CreditCard, Shield, CheckCircle, Loader } from 'lucide-react';
import styles from './Checkout.module.scss';

const Checkout = () => {
  const { planId } = useParams();
  const navigate = useNavigate();
  const [isProcessing, setIsProcessing] = useState(false); // To show loading state
  
  const plans = {
    silver: { name: 'Silver Membership', price: '₹3,000', gst: '₹540', total: '₹3,540', color: '#C0C0C0' },
    gold: { name: 'Gold Membership', price: '₹5,000', gst: '₹900', total: '₹5,900', color: '#FFD700' },
    platinum: { name: 'Platinum Membership', price: '₹25,000', gst: '₹4,500', total: '₹29,500', color: '#E5E4E2' },
    diamond: { name: 'Diamond Membership', price: '₹50,000', gst: '₹9,000', total: '₹59,000', color: '#b9f2ff' }
  };

  const selectedPlan = plans[planId?.toLowerCase()];

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    address: '',
    paymentMethod: 'card'
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // ✅ MOCK PAYMENT HANDLER
  const handlePayment = (e) => {
    e.preventDefault();

    // 1. Basic Validation
    if(!formData.fullName || !formData.phone || !formData.email) {
      alert("Please fill in all details");
      return;
    }

    // 2. Start Simulation
    setIsProcessing(true);

    // 3. Fake a 2-second network delay
    setTimeout(() => {
      setIsProcessing(false);
      
      // 4. Success! Navigate to a success page
      navigate('/payment-success', { 
        state: { 
          planName: selectedPlan.name, 
          amount: selectedPlan.total,
          transactionId: "TXN_" + Math.random().toString(36).substr(2, 9).toUpperCase()
        } 
      });
      
    }, 2000);
  };

  if (!selectedPlan) {
    return <div className={styles.error}>Plan not found! <button onClick={() => navigate('/subscriptions')}>Go Back</button></div>;
  }

  return (
    <div className={styles.container}>
      <button onClick={() => navigate(-1)} className={styles.backButton}>
        <ArrowLeft size={20} /> Back to Plans
      </button>

      <div className={styles.content}>
        {/* Left Side: Summary */}
        <div className={styles.summaryCard} style={{ borderTop: `5px solid ${selectedPlan.color}` }}>
          <h3>Order Summary</h3>
          <div className={styles.planName}>{selectedPlan.name}</div>
          
          <div className={styles.row}>
            <span>Subtotal</span>
            <span>{selectedPlan.price}</span>
          </div>
          <div className={styles.row}>
            <span>GST (18%)</span>
            <span>{selectedPlan.gst}</span>
          </div>
          <hr />
          <div className={`${styles.row} ${styles.total}`}>
            <span>Total to Pay</span>
            <span>{selectedPlan.total}</span>
          </div>

          <div className={styles.trustBadges}>
            <div className={styles.badge}><Shield size={16}/> Secure Payment</div>
            <div className={styles.badge}><CheckCircle size={16}/> Cancel Anytime</div>
          </div>
        </div>

        {/* Right Side: Form */}
        <div className={styles.formSection}>
          <h2>Billing Details</h2>
          <form onSubmit={handlePayment}>
            <div className={styles.inputGroup}>
              <label>Full Name</label>
              <input type="text" name="fullName" placeholder="John Doe" onChange={handleChange} required />
            </div>

            <div className={styles.grid2}>
              <div className={styles.inputGroup}>
                <label>Email Address</label>
                <input type="email" name="email" placeholder="john@example.com" onChange={handleChange} required />
              </div>
              <div className={styles.inputGroup}>
                <label>Phone Number</label>
                <input type="tel" name="phone" placeholder="+91 98765 43210" onChange={handleChange} required />
              </div>
            </div>

            <div className={styles.inputGroup}>
              <label>Billing Address</label>
              <textarea name="address" placeholder="Street address, City, State" onChange={handleChange} rows="3" required></textarea>
            </div>
            
            <div className={styles.inputGroup}>
              <label>Payment Method</label>
              <select name="paymentMethod" onChange={handleChange} value={formData.paymentMethod}>
                <option value="card">Credit / Debit Card</option>
                <option value="upi">UPI (GPay / PhonePe)</option>
                <option value="netbanking">Net Banking</option>
              </select>
            </div>

            {/* ✅ UPDATED BUTTON WITH LOADING STATE */}
            <button type="submit" className={styles.payButton} disabled={isProcessing}>
              {isProcessing ? (
                <>Processing...</>
              ) : (
                <><CreditCard size={20} /> Pay {selectedPlan.total}</>
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Checkout;