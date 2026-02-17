// import React, { useState } from 'react';
// import { Check, Shield, Star, Gem, Award } from 'lucide-react';
// import styles from './Subscriptions.module.scss'; 
// // ✅ Import the new Modal
// import PaymentModal from '../../components/PaymentModal/PaymentModal';

// const Subscriptions = () => {
//   // ✅ State to track which plan is selected
//   const [selectedPlan, setSelectedPlan] = useState(null);

//   const plans = [
//     {
//       id: 1,
//       name: 'Silver',
//       price: '₹3,000',
//       duration: '1 Year',
//       gst: '+18% GST',
//       icon: <Shield size={40} color="#C0C0C0" />, 
//       color: '#C0C0C0',
//       features: ['Basic Networking', 'Event Access', 'Newsletter'],
//     },
//     {
//       id: 2,
//       name: 'Gold',
//       price: '₹5,000',
//       duration: '2 Years',
//       gst: '+18% GST',
//       icon: <Star size={40} color="#FFD700" />, 
//       color: '#FFD700',
//       isPopular: true,
//       features: ['Priority Support', 'Business Listing', 'All Silver Features'],
//     },
//     {
//       id: 3,
//       name: 'Platinum',
//       price: '₹25,000',
//       duration: '10 Years',
//       gst: '+18% GST',
//       icon: <Award size={40} color="#E5E4E2" />, 
//       color: '#E5E4E2',
//       features: ['VIP Access', 'Strategic Consulting', 'Global Networking'],
//     },
//     {
//       id: 4,
//       name: 'Diamond',
//       price: '₹50,000',
//       duration: '25 Years',
//       gst: '+18% GST',
//       icon: <Gem size={40} color="#b9f2ff" />, 
//       color: '#b9f2ff',
//       features: ['Lifetime Mentorship', 'Investment Opportunities', 'Board Access'],
//     },
//   ];

//   // ✅ Handle opening the modal
//   const handleChoosePlan = (plan) => {
//     setSelectedPlan(plan);
//   };

//   // ✅ Handle closing the modal
//   const handleCloseModal = () => {
//     setSelectedPlan(null);
//   };

//   // ✅ Handle the actual payment submission
//   const handlePaymentSubmit = (plan, userDetails) => {
//     console.log("Processing Payment for:", plan.name);
//     console.log("User Details:", userDetails);
    
//     // TODO: Call your backend API here (Razorpay/Stripe)
//     alert(`Thank you, ${userDetails.name}! initializing payment for ${plan.name} Plan...`);
    
//     handleCloseModal();
//   };

//   return (
//     <div className={styles.container}>
//       <h2 className={styles.title}>Membership Plans</h2>
//       <p className={styles.subtitle}>Choose the plan that fits your business goals</p>

//       <div className={styles.grid}>
//         {plans.map((plan) => (
//           <div 
//             key={plan.id} 
//             className={`${styles.card} ${plan.isPopular ? styles.popular : ''}`}
//             style={{borderTop: `4px solid ${plan.color}`}}
//           >
//             {plan.isPopular && <div className={styles.badge}>Most Popular</div>}
            
//             <div className={styles.iconWrapper}>{plan.icon}</div>
//             <h3>{plan.name} Membership</h3>
//             <div className={styles.price}>
//               {plan.price} <span className={styles.duration}>/ {plan.duration}</span>
//             </div>
//             <div className={styles.tax}>{plan.gst}</div>
            
//             <ul className={styles.features}>
//               {plan.features.map((feature, index) => (
//                 <li key={index}><Check size={16} className={styles.check} /> {feature}</li>
//               ))}
//             </ul>

//             {/* ✅ Updated Button to trigger modal */}
//             <button 
//               className={styles.button} 
//               style={{backgroundColor: plan.color === '#C0C0C0' ? '#6c757d' : '#007bff'}}
//               onClick={() => handleChoosePlan(plan)}
//             >
//               Choose {plan.name}
//             </button>
//           </div>
//         ))}
//       </div>

//       {/* ✅ Render the Modal if a plan is selected */}
//       {selectedPlan && (
//         <PaymentModal 
//           plan={selectedPlan} 
//           onClose={handleCloseModal} 
//           onConfirm={handlePaymentSubmit}
//         />
//       )}
//     </div>
//   );
// };

// export default Subscriptions;

//----------------------17/02------------3.43----------------

import React from 'react';
import { useNavigate } from 'react-router-dom'; // ✅ Import Navigation Hook
import { Check, Shield, Star, Gem, Award } from 'lucide-react';
import styles from './Subscriptions.module.scss'; 

const Subscriptions = () => {
  const navigate = useNavigate(); // ✅ Initialize hook

  const plans = [
    {
      id: 1,
      name: 'Silver',
      price: '₹3,000',
      duration: '1 Year',
      gst: '+18% GST',
      icon: <Shield size={40} color="#C0C0C0" />, 
      color: '#C0C0C0',
      features: ['Basic Networking', 'Event Access', 'Newsletter'],
    },
    {
      id: 2,
      name: 'Gold',
      price: '₹5,000',
      duration: '2 Years',
      gst: '+18% GST',
      icon: <Star size={40} color="#FFD700" />, 
      color: '#FFD700',
      isPopular: true,
      features: ['Priority Support', 'Business Listing', 'All Silver Features'],
    },
    {
      id: 3,
      name: 'Platinum',
      price: '₹25,000',
      duration: '10 Years',
      gst: '+18% GST',
      icon: <Award size={40} color="#E5E4E2" />, 
      color: '#E5E4E2',
      features: ['VIP Access', 'Strategic Consulting', 'Global Networking'],
    },
    {
      id: 4,
      name: 'Diamond',
      price: '₹50,000',
      duration: '25 Years',
      gst: '+18% GST',
      icon: <Gem size={40} color="#b9f2ff" />, 
      color: '#b9f2ff',
      features: ['Lifetime Mentorship', 'Investment Opportunities', 'Board Access'],
    },
  ];

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Membership Plans</h2>
      <p className={styles.subtitle}>Choose the plan that fits your business goals</p>

      <div className={styles.grid}>
        {plans.map((plan) => (
          <div 
            key={plan.id} 
            className={`${styles.card} ${plan.isPopular ? styles.popular : ''}`}
            style={{borderTop: `4px solid ${plan.color}`}}
          >
            {plan.isPopular && <div className={styles.badge}>Most Popular</div>}
            
            <div className={styles.iconWrapper}>{plan.icon}</div>
            <h3>{plan.name} Membership</h3>
            <div className={styles.price}>
              {plan.price} <span className={styles.duration}>/ {plan.duration}</span>
            </div>
            <div className={styles.tax}>{plan.gst}</div>
            
            <ul className={styles.features}>
              {plan.features.map((feature, index) => (
                <li key={index}><Check size={16} className={styles.check} /> {feature}</li>
              ))}
            </ul>

            {/* ✅ UPDATED BUTTON: Navigates to Checkout Page */}
            <button 
              className={styles.button} 
              style={{backgroundColor: plan.color === '#C0C0C0' ? '#6c757d' : '#007bff'}}
              onClick={() => navigate(`/checkout/${plan.name.toLowerCase()}`)}
            >
              Choose {plan.name}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Subscriptions;