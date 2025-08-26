// import React, { useState, useEffect } from 'react';
// import { Plus, Type, Calendar, MapPin, Clock } from 'lucide-react';
// import axios from 'axios';
// import styles from './MyPosts.module.scss';
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

//   return (
//     <div className={styles.serviceRequests}>
//       <div className={styles.header}>
//         <h2>My Posts</h2>
//       </div>

//       {error && <div className={styles.error}>{error}</div>}

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
//                 <span><Clock size={16} /> Posted by: {post.postedBy?.name}</span> 
                
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


import React, { useState, useEffect } from 'react';
import { Plus, Type, Calendar, MapPin, Clock } from 'lucide-react';
import axios from 'axios';
import styles from './MyPosts.module.scss';
import plumbing from '/plumbing.jpg';
import API from '../../axios';
import { useAuth } from '../../context/AuthContext';

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

  const requestTypes = [
    'Home Maintenance',
    'Education',
    'Health & Wellness',
    'Automotive',
    'Technology',
    'Other',
  ];

  // Fetch service requests for the current user
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await API.get('/api/service-requests');
        // Filter posts to show only those created by the current user
        const userPosts = response.data.filter(
          (post) => post.postedBy?._id === user.memberId || post.postedBy === user.memberId
        );
        setPosts(userPosts);
      } catch (err) {
        console.error('Error fetching posts:', err);
        setError('Failed to load service requests.');
      }
    };
    fetchPosts();
  }, [user.memberId]); // Add user.memberId as a dependency

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await API.post('/api/service-requests', {
        title: newPost.title,
        description: newPost.description,
        type: newPost.type,
        location: newPost.location,
        postedBy: user.memberId,
      });

      setPosts([...posts, response.data]);
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

  return (
    <div className={styles.serviceRequests}>
      <div className={styles.header}>
        <h2>My Posts</h2>
      </div>

      {error && <div className={styles.error}>{error}</div>}

      <div className={styles.postsContainer}>
        {posts.length === 0 ? (
          <p>No posts found.</p>
        ) : (
          posts.map((post) => (
            <div key={post._id} className={styles.postCard}>
              <div className={styles.postImage}>
                <img src={plumbing} alt={post.title} />
              </div>
              <div className={styles.postContent}>
                <h3>{post.title}</h3>
                <p className={styles.postDescription}>{post.description}</p>

                <div className={styles.postMeta}>
                  <span><Type size={16} /> {post.type}</span>
                  <span><MapPin size={16} /> {post.location}</span>
                  <span><Calendar size={16} /> {new Date(post.date).toISOString().split('T')[0]}</span>
                  <span><Clock size={16} /> Posted by: {post.postedBy?.name || 'You'}</span>
                </div>

                <button className={styles.contactButton}>
                  Contact Requester
                </button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default ServiceRequests;