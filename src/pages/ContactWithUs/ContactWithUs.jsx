import React, { useState } from 'react';
import { User, Mail, Phone, MessageSquare, Send } from 'lucide-react';
import styles from './ContactWithUs.module.scss';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    type: 'Enquiry',
    message: '',
  });
  const [submissions, setSubmissions] = useState([]);
  const [submitStatus, setSubmitStatus] = useState(null);

  const contactTypes = ['Enquiry', 'Suggestion', 'Complaint', 'Feedback', 'Other'];

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    const newSubmission = {
      id: submissions.length + 1,
      ...formData,
      timestamp: new Date().toISOString(),
    };
    setSubmissions((prev) => [...prev, newSubmission]);
    setFormData({
      name: '',
      email: '',
      phone: '',
      type: 'Enquiry',
      message: '',
    });
    setSubmitStatus('Thank you for your submission! We will get back to you soon.');
    setTimeout(() => setSubmitStatus(null), 3000); // Clear status after 3 seconds
  };

  return (
    <div className={styles.contactUs}>
      <div className={styles.header}>
        <h2>Contact Us</h2>
        <p>We're here to assist you. Fill out the form below to get in touch.</p>
      </div>

      <div className={styles.contactForm}>
        <form onSubmit={handleSubmit}>
          <div className={styles.formGroup}>
            <label htmlFor="name">
              <User size={18} /> Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your name"
              required
            />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="email">
              <Mail size={18} /> Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              required
            />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="phone">
              <Phone size={18} /> Phone
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Enter your phone number"
              pattern="[0-9]{10}"
              title="Please enter a 10-digit phone number"
            />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="type">
              <MessageSquare size={18} /> Type of Contact
            </label>
            <select
              id="type"
              name="type"
              value={formData.type}
              onChange={handleChange}
              required
            >
              {contactTypes.map((type) => (
                <option key={type} value={type}>
                  {type}
                </option>
              ))}
            </select>
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="message">
              <MessageSquare size={18} /> Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Enter your message"
              required
            />
          </div>

          <button type="submit" className={styles.submitButton}>
            <Send size={18} /> Submit
          </button>
        </form>

        {submitStatus && (
          <div className={styles.submitStatus}>
            {submitStatus}
          </div>
        )}
      </div>

      {/* Optional: Display submissions for demo purposes */}
      {submissions.length > 0 && (
        <div className={styles.submissions}>
          <h3>Recent Submissions (Demo)</h3>
          {submissions.map((submission) => (
            <div key={submission.id} className={styles.submissionCard}>
              <p><strong>Name:</strong> {submission.name}</p>
              <p><strong>Email:</strong> {submission.email}</p>
              <p><strong>Phone:</strong> {submission.phone || 'Not provided'}</p>
              <p><strong>Type:</strong> {submission.type}</p>
              <p><strong>Message:</strong> {submission.message}</p>
              <p><strong>Time:</strong> {new Date(submission.timestamp).toLocaleString('en-IN')}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ContactUs;