import React, { useState, useEffect } from 'react';
import { Plus, Image, Type, Calendar, MapPin, Clock } from 'lucide-react';
import styles from './ServiceRequest.module.scss';
import plumbing from '/plumbing.jpg';
import mathstuition from '/mathstuition.jpg';


const ServiceRequests = () => {
  // Sample data for service posts
  const [posts, setPosts] = useState([
    {
      id: 1,
      image: plumbing,
      title: 'Plumbing Repair Needed',
      description: 'Looking for a plumber to fix leaking pipes in my kitchen. Urgent!',
      type: 'Home Maintenance',
      location: 'Chennai',
      date: '2023-06-15',
      postedBy: 'John D'
    },
    {
      id: 2,
      image: mathstuition,
      title: 'Math Tutoring',
      description: 'Need a math tutor for 10th grade CBSE syllabus, 2 hours per week',
      type: 'Education',
      location: 'Bangalore',
      date: '2023-06-10',
      postedBy: 'Sarah M'
    }
  ]);

  const [showForm, setShowForm] = useState(false);
  const [newPost, setNewPost] = useState({
    title: '',
    description: '',
    type: 'Home Maintenance',
    location: '',
    image: null,
    previewImage: ''
  });

  const requestTypes = [
    'Home Maintenance',
    'Education',
    'Health & Wellness',
    'Automotive',
    'Technology',
    'Other'
  ];

  // Handle image upload
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setNewPost({
          ...newPost,
          image: file,
          previewImage: reader.result
        });
      };
      reader.readAsDataURL(file);
    }
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    const newServicePost = {
      id: posts.length + 1,
      image: newPost.previewImage || 'https://via.placeholder.com/300',
      title: newPost.title,
      description: newPost.description,
      type: newPost.type,
      location: newPost.location,
      date: new Date().toISOString().split('T')[0],
      postedBy: 'Current User' // Replace with actual user name
    };

    setPosts([...posts, newServicePost]);
    setNewPost({
      title: '',
      description: '',
      type: 'Home Maintenance',
      location: '',
      image: null,
      previewImage: ''
    });
    setShowForm(false);
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
                onChange={(e) => setNewPost({...newPost, title: e.target.value})}
                required
              />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="description">Description</label>
              <textarea
                id="description"
                value={newPost.description}
                onChange={(e) => setNewPost({...newPost, description: e.target.value})}
                required
              />
            </div>

            <div className={styles.formRow}>
              <div className={styles.formGroup}>
                <label htmlFor="type">Type of Request</label>
                <select
                  id="type"
                  value={newPost.type}
                  onChange={(e) => setNewPost({...newPost, type: e.target.value})}
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
                  onChange={(e) => setNewPost({...newPost, location: e.target.value})}
                  required
                />
              </div>
            </div>

            <div className={styles.formGroup}>
              <label className={styles.imageUpload}>
                <Image size={18} /> Upload Image
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageChange}
                  style={{ display: 'none' }}
                />
              </label>
              {newPost.previewImage && (
                <img 
                  src={newPost.previewImage} 
                  alt="Preview" 
                  className={styles.imagePreview} 
                />
              )}
            </div>

            <button type="submit" className={styles.submitButton}>
              Submit Request
            </button>
          </form>
        </div>
      )}

      <div className={styles.postsContainer}>
        {posts.map((post) => (
          <div key={post.id} className={styles.postCard}>
            <div className={styles.postImage}>
              <img src={post.image} alt={post.title} />
            </div>
            <div className={styles.postContent}>
              <h3>{post.title}</h3>
              <p className={styles.postDescription}>{post.description}</p>
              
              <div className={styles.postMeta}>
                <span><Type size={16} /> {post.type}</span>
                <span><MapPin size={16} /> {post.location}</span>
                <span><Calendar size={16} /> {post.date}</span>
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