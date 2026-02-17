// import React, { useState, useEffect } from 'react';
// import { Plus, Type, Calendar, MapPin, Clock } from 'lucide-react';
// import axios from 'axios';
// import styles from './ServiceRequest.module.scss';
// import plumbing from '/plumbing.jpg';
// import API from '../../axios';
// import { useAuth } from '../../context/AuthContext';

// const ServiceRequests = () => {
//   const [posts, setPosts] = useState([]);
//   const [showForm, setShowForm] = useState(false);
//   const {user} = useAuth();
//   const [newPost, setNewPost] = useState({
//     title: '',
//     description: '',
//     type: 'Home Maintenance',
//     location: '',
//   });
//   const [error, setError] = useState(null);
//   const [loading, setLoading] = useState(true); 

//   const requestTypes = [
//     'Home Maintenance',
//     'Education',
//     'Health & Wellness',
//     'Automotive',
//     'Technology',
//     'Other',
//   ];

//   // Fetch service requests from the backend
//   useEffect(() => {
//     const fetchPosts = async () => {
//       try {
//         const response = await API.get('/api/service-requests');
//         setLoading(false);
//         setPosts(response.data);
//       } catch (err) {
//         console.error('Error fetching posts:', err);
//         setError('Failed to load service requests.');
//       }
//     };
//     fetchPosts();
//   }, []);

//   // Handle form submission
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await API.post('/api/service-requests', {
//         title: newPost.title,
//         description: newPost.description,
//         type: newPost.type,
//         location: newPost.location,
//         postedBy: user.memberId, // Replace with actual user data (e.g., from auth context)
//       });

//       setPosts([...posts, response.data]);
//       setNewPost({
//         title: '',
//         description: '',
//         type: 'Home Maintenance',
//         location: '',
//       });
//       setShowForm(false);
//       setError(null);
//     } catch (err) {
//       console.error('Error submitting form:', err);
//       setError('Failed to submit service request.');
//     }
//   };


//    if (loading) {
//   return (
//     <>
     
//     <div className="d-flex flex-column justify-content-center align-items-center vh-100 bg-white text-center">
//       <div className="loader"></div> <br/><br/>
//      <h5 className="text-secondary">Hold on, getting the service request posts...</h5>
//     </div>
    
//     </>
//   );
// }


//   return (
//     <div className={styles.serviceRequests}>
//       <div className={styles.header}>
//         <h2>Service Requests</h2>
//         <button
//           className={styles.addButton}
//           onClick={() => setShowForm(!showForm)}
//         >
//           <Plus size={18} /> {showForm ? 'Cancel' : 'New Request'}
//         </button>
//       </div>

//       {error && <div className={styles.error}>{error}</div>}

//       {showForm && (
//         <div className={styles.requestForm}>
//           <h3>Create New Service Request</h3>
//           <form onSubmit={handleSubmit}>
//             <div className={styles.formGroup}>
//               <label htmlFor="title">Title</label>
//               <input
//                 type="text"
//                 id="title"
//                 value={newPost.title}
//                 onChange={(e) => setNewPost({ ...newPost, title: e.target.value })}
//                 required
//               />
//             </div>

//             <div className={styles.formGroup}>
//               <label htmlFor="description">Description</label>
//               <textarea
//                 id="description"
//                 value={newPost.description}
//                 onChange={(e) => setNewPost({ ...newPost, description: e.target.value })}
//                 required
//               />
//             </div>

//             <div className={styles.formRow}>
//               <div className={styles.formGroup}>
//                 <label htmlFor="type">Type of Request</label>
//                 <select
//                   id="type"
//                   value={newPost.type}
//                   onChange={(e) => setNewPost({ ...newPost, type: e.target.value })}
//                   required
//                 >
//                   {requestTypes.map((type) => (
//                     <option key={type} value={type}>{type}</option>
//                   ))}
//                 </select>
//               </div>

//               <div className={styles.formGroup}>
//                 <label htmlFor="location">Location</label>
//                 <input
//                   type="text"
//                   id="location"
//                   value={newPost.location}
//                   onChange={(e) => setNewPost({ ...newPost, location: e.target.value })}
//                   required
//                 />
//               </div>
//             </div>

//             <button type="submit" className={styles.submitButton}>
//               Submit Request
//             </button>
//           </form>
//         </div>
//       )}

//       <div className={styles.postsContainer}>
//         {posts.map((post) => (
//           <div key={post._id} className={styles.postCard}>
//             <div className={styles.postImage}>
//               <img src={plumbing} alt={post.title} />
//             </div>
//             <div className={styles.postContent}>
//               <h3>{post.title}</h3>
//               <p className={styles.postDescription}>{post.description}</p>

//               <div className={styles.postMeta}>
//                 <span><Type size={16} /> {post.type}</span>
//                 <span><MapPin size={16} /> {post.location}</span>
//                 <span><Calendar size={16} /> {new Date(post.date).toISOString().split('T')[0]}</span>
//                 <span><Clock size={16} /> Posted by: {post.postedBy.name}</span> 
                
//               </div>

//               <button className={styles.contactButton}>
//                 Contact Requester
//               </button>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default ServiceRequests;
//------------------------11/02------------------12.55------------------

// import React, { useState, useEffect } from 'react';
// import { Plus, Type, Calendar, MapPin, Clock, User } from 'lucide-react';
// import styles from './ServiceRequest.module.scss';
// // Note: Make sure this image path is correct in your project
// //import plumbing from '../../assets/images/plumbing.jpg'; 
// import API from '../../axios'; // Ensure this path matches your project structure
// import { useAuth } from '../../context/AuthContext';

// // Use a placeholder image from the web
// const plumbing = "https://images.unsplash.com/photo-1581578072505-f5d1d17bc728?auto=format&fit=crop&q=80&w=400";
// const ServiceRequests = () => {
//   const [posts, setPosts] = useState([]);
//   const [showForm, setShowForm] = useState(false);
//   const { user } = useAuth();
  
//   const [newPost, setNewPost] = useState({
//     title: '',
//     description: '',
//     type: 'Home Maintenance',
//     location: '',
//   });
  
//   const [error, setError] = useState(null);
//   const [loading, setLoading] = useState(true);

//   const requestTypes = [
//     'Home Maintenance',
//     'Education',
//     'Health & Wellness',
//     'Automotive',
//     'Technology',
//     'Other',
//   ];

//   // Fetch service requests
//   useEffect(() => {
//     const fetchPosts = async () => {
//       try {
//         const response = await API.get('/api/service-requests');
//         console.log("Data received:", response.data); // Debugging
//         setPosts(response.data);
//         setLoading(false);
//       } catch (err) {
//         console.error('Error fetching posts:', err);
//         setError('Failed to load service requests.');
//         setLoading(false);
//       }
//     };
//     fetchPosts();
//   }, []);

//   // Handle form submission
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await API.post('/api/service-requests', {
//         title: newPost.title,
//         description: newPost.description,
//         type: newPost.type,
//         location: newPost.location,
//         // Fallback if user context is missing during testing
//         postedBy: user ? user.memberId : "GuestUser", 
//       });

//       setPosts([...posts, response.data]);
      
//       // Reset form
//       setNewPost({
//         title: '',
//         description: '',
//         type: 'Home Maintenance',
//         location: '',
//       });
//       setShowForm(false);
//       setError(null);
//     } catch (err) {
//       console.error('Error submitting form:', err);
//       setError('Failed to submit service request.');
//     }
//   };

//   if (loading) {
//     return (
//       <div className="d-flex flex-column justify-content-center align-items-center vh-100 bg-white text-center">
//         <div className="loader"></div> <br/><br/>
//         <h5 className="text-secondary">Hold on, getting the service request posts...</h5>
//       </div>
//     );
//   }

//   return (
//     <div className={styles.serviceRequests}>
//       <div className={styles.header}>
//         <h2>Service Requests</h2>
//         <button
//           className={styles.addButton}
//           onClick={() => setShowForm(!showForm)}
//         >
//           <Plus size={18} /> {showForm ? 'Cancel' : 'New Request'}
//         </button>
//       </div>

//       {error && <div className={styles.error}>{error}</div>}

//       {showForm && (
//         <div className={styles.requestForm}>
//           <h3>Create New Service Request</h3>
//           <form onSubmit={handleSubmit}>
//             <div className={styles.formGroup}>
//               <label htmlFor="title">Title</label>
//               <input
//                 type="text"
//                 id="title"
//                 value={newPost.title}
//                 onChange={(e) => setNewPost({ ...newPost, title: e.target.value })}
//                 required
//               />
//             </div>

//             <div className={styles.formGroup}>
//               <label htmlFor="description">Description</label>
//               <textarea
//                 id="description"
//                 value={newPost.description}
//                 onChange={(e) => setNewPost({ ...newPost, description: e.target.value })}
//                 required
//               />
//             </div>

//             <div className={styles.formRow}>
//               <div className={styles.formGroup}>
//                 <label htmlFor="type">Type of Request</label>
//                 <select
//                   id="type"
//                   value={newPost.type}
//                   onChange={(e) => setNewPost({ ...newPost, type: e.target.value })}
//                   required
//                 >
//                   {requestTypes.map((type) => (
//                     <option key={type} value={type}>{type}</option>
//                   ))}
//                 </select>
//               </div>

//               <div className={styles.formGroup}>
//                 <label htmlFor="location">Location</label>
//                 <input
//                   type="text"
//                   id="location"
//                   value={newPost.location}
//                   onChange={(e) => setNewPost({ ...newPost, location: e.target.value })}
//                   required
//                 />
//               </div>
//             </div>

//             <button type="submit" className={styles.submitButton}>
//               Submit Request
//             </button>
//           </form>
//         </div>
//       )}

//       <div className={styles.postsContainer}>
//         {posts.map((post) => {
//             // ✅ FIX: Determine display values based on data source (Seed vs Form)
//             const displayTitle = post.title || post.category || "Service Request";
//             const displayType = post.type || post.category || "General";
//             const displayLocation = post.location || post.area || "Trichy";
//             const displayDate = post.createdAt || post.date || new Date();
            
//             // ✅ CRITICAL FIX: Handle 'postedBy' safely
//             // Checks if postedBy exists AND has a name, OR falls back to post.name (seed data)
//             const displayName = (post.postedBy && post.postedBy.name) 
//                                 ? post.postedBy.name 
//                                 : (post.name || "Unknown User");

//             return (
//               <div key={post._id} className={styles.postCard}>
//                 <div className={styles.postImage}>
//                   {/* Using a placeholder if image fails */}
//                   <img src={plumbing} alt={displayTitle} onError={(e) => e.target.style.display='none'} />
//                 </div>
//                 <div className={styles.postContent}>
//                   <h3>{displayTitle}</h3>
//                   <p className={styles.postDescription}>{post.description}</p>

//                   <div className={styles.postMeta}>
//                     <span><Type size={16} /> {displayType}</span>
//                     <span><MapPin size={16} /> {displayLocation}</span>
//                     <span>
//                         <Calendar size={16} /> 
//                         {new Date(displayDate).toLocaleDateString()}
//                     </span>
//                     <span>
//                         <User size={16} /> 
//                         {/* Use the safe variable we created above */}
//                         Posted by: {displayName}
//                     </span> 
//                   </div>

//                   <button className={styles.contactButton}>
//                     Contact Requester
//                   </button>
//                 </div>
//               </div>
//             );
//         })}
//       </div>
//     </div>
//   );
// };

// export default ServiceRequests;

//------------------------11/02------------------1.38------------------

import React, { useState, useEffect } from 'react';
import { Plus, Type, Calendar, MapPin, Clock, User, Wrench } from 'lucide-react';
import styles from './ServiceRequest.module.scss';
import API from '../../axios'; // Ensure this path matches your project structure
import { useAuth } from '../../context/AuthContext';

// ✅ FIXED: Reliable placeholder image that won't break
const placeholderImage = "https://placehold.co/600x400/e9ecef/6c757d?text=Service+Request";

const ServiceRequests = () => {
  const [posts, setPosts] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const { user } = useAuth();
  
  const [newPost, setNewPost] = useState({
    title: '',
    description: '',
    type: 'Home Maintenance',
    location: '',
  });
  
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  const requestTypes = [
    'Home Maintenance',
    'Education',
    'Health & Wellness',
    'Automotive',
    'Technology',
    'Other',
  ];

  // Fetch service requests
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await API.get('/api/service-requests');
        console.log("Data received:", response.data); 
        setPosts(response.data);
        setLoading(false);
      } catch (err) {
        console.error('Error fetching posts:', err);
        setError('Failed to load service requests.');
        setLoading(false);
      }
    };
    fetchPosts();
  }, []);

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await API.post('/api/service-requests', {
        title: newPost.title,
        description: newPost.description,
        type: newPost.type,
        location: newPost.location,
        // Fallback if user context is missing
        postedBy: user ? user.memberId : "GuestUser", 
      });

      // Add the new post to the list immediately
      setPosts([...posts, response.data]);
      
      // Reset form
      setNewPost({
        title: '',
        description: '',
        type: 'Home Maintenance',
        location: '',
      });
      setShowForm(false);
      setError(null);
    } catch (err) {
      console.error('Error submitting form:', err);
      setError('Failed to submit service request.');
    }
  };

  if (loading) {
    return (
      <div className="d-flex flex-column justify-content-center align-items-center vh-100 bg-white text-center">
        <div className="loader"></div> <br/><br/>
        <h5 className="text-secondary">Hold on, getting the service request posts...</h5>
      </div>
    );
  }

  return (
    <div className={styles.serviceRequests}>
      <div className={styles.header}>
        <h2>Service Requests</h2>
        <button
          className={styles.addButton}
          onClick={() => setShowForm(!showForm)}
        >
          <Plus size={18} /> {showForm ? 'Cancel' : 'New Request'}
        </button>
      </div>

      {error && <div className={styles.error}>{error}</div>}

      {showForm && (
        <div className={styles.requestForm}>
          <h3>Create New Service Request</h3>
          <form onSubmit={handleSubmit}>
            <div className={styles.formGroup}>
              <label htmlFor="title">Title</label>
              <input
                type="text"
                id="title"
                value={newPost.title}
                onChange={(e) => setNewPost({ ...newPost, title: e.target.value })}
                required
              />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="description">Description</label>
              <textarea
                id="description"
                value={newPost.description}
                onChange={(e) => setNewPost({ ...newPost, description: e.target.value })}
                required
              />
            </div>

            <div className={styles.formRow}>
              <div className={styles.formGroup}>
                <label htmlFor="type">Type of Request</label>
                <select
                  id="type"
                  value={newPost.type}
                  onChange={(e) => setNewPost({ ...newPost, type: e.target.value })}
                  required
                >
                  {requestTypes.map((type) => (
                    <option key={type} value={type}>{type}</option>
                  ))}
                </select>
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="location">Location</label>
                <input
                  type="text"
                  id="location"
                  value={newPost.location}
                  onChange={(e) => setNewPost({ ...newPost, location: e.target.value })}
                  required
                />
              </div>
            </div>

            <button type="submit" className={styles.submitButton}>
              Submit Request
            </button>
          </form>
        </div>
      )}

      <div className={styles.postsContainer}>
        {posts.map((post) => {
            // ✅ CRITICAL FIX: Safe Fallbacks for Data
            // This ensures the page works even if fields are missing or named differently
            const displayTitle = post.title || post.category || "Service Request";
            const displayType = post.type || post.category || "General";
            const displayLocation = post.location || post.area || "Trichy";
            const displayDate = post.createdAt || post.date || new Date();
            
            // ✅ CRITICAL FIX: Safe User Name Handling
            // Prevents "Cannot read properties of undefined" crash
            const displayName = (post.postedBy && post.postedBy.name) 
                                ? post.postedBy.name 
                                : (post.name || "Unknown User");

            return (
              <div key={post._id} className={styles.postCard}>
                <div className={styles.postImage} style={{ 
                  background: '#f8f9fa', 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center', 
                  overflow: 'hidden',
                  minHeight: '180px' // Ensures box size is consistent
                }}>
                  {/* ✅ FIXED: Tries to show image, falls back to placeholder */}
                  <img 
                    src={placeholderImage} 
                    alt={displayTitle} 
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    onError={(e) => {
                      e.target.onerror = null; // Prevent infinite loop
                      e.target.src = "https://via.placeholder.com/400x300?text=No+Image"; 
                    }}
                  />
                </div>
                
                <div className={styles.postContent}>
                  <h3>{displayTitle}</h3>
                  <p className={styles.postDescription}>{post.description}</p>

                  <div className={styles.postMeta}>
                    <span><Type size={16} /> {displayType}</span>
                    <span><MapPin size={16} /> {displayLocation}</span>
                    <span>
                        <Calendar size={16} /> 
                        {new Date(displayDate).toLocaleDateString()}
                    </span>
                    <span>
                        <User size={16} /> 
                        Posted by: {displayName}
                    </span> 
                  </div>

                  <button className={styles.contactButton}>
                    Contact Requester
                  </button>
                </div>
              </div>
            );
        })}
      </div>
    </div>
  );
};

export default ServiceRequests;