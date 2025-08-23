import React, { useState, useEffect } from 'react';
import { Plus, Type, Calendar, MapPin, Clock } from 'lucide-react';
import axios from 'axios';
import styles from './ServiceRequest.module.scss';
import plumbing from '/plumbing.jpg';

const ServiceRequests = () => {
  const [posts, setPosts] = useState([]);
  const [showForm, setShowForm] = useState(false);
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

  // Fetch service requests from the backend
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/service-requests');
        setPosts(response.data);
      } catch (err) {
        console.error('Error fetching posts:', err);
        setError('Failed to load service requests.');
      }
    };
    fetchPosts();
  }, []);

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/service-requests', {
        title: newPost.title,
        description: newPost.description,
        type: newPost.type,
        location: newPost.location,
        postedBy: 'Current User', // Replace with actual user data (e.g., from auth context)
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
        {posts.map((post) => (
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
                <span><Clock size={16} /> Posted by: {post.postedBy}</span>
              </div>

              <button className={styles.contactButton}>
                Contact Requester
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServiceRequests;