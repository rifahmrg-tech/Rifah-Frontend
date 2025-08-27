import React, { useState, useEffect } from 'react';
import { User, Phone, Mail, Calendar, Building, Trash2 } from 'lucide-react';
import styles from './Members.module.scss';
import axios from 'axios';
import API from '../../axios';

function Members() {
  const [members, setMembers] = useState([]);
  const [view, setView] = useState('card');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedLocation, setSelectedLocation] = useState('');
  const [selectedProfession, setSelectedProfession] = useState('');
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true); 

  // Fetch members from backend
  useEffect(() => {
    const fetchMembers = async () => {
      try {
        const response = await API.get('/api/members');
         
         setLoading(false);


        const data = response.data;
        console.log(data);
        // Safe handling based on structure
        if (Array.isArray(data)) {
          setMembers(data);
        } else if (data && Array.isArray(data.data)) {
          setMembers(data);
        } 

        console.log("Fetched members:", data);
      } catch (err) {
        console.log(err);
      }
    };

    fetchMembers();
  }, []);

  const uniqueLocations = [...new Set(members.map(member => member.district))].sort();
  const uniqueProfessions = [...new Set(members.map(member => member.profession))].sort();

  const filteredMembers = members.filter(member =>
    (member.name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
     member.profession?.toLowerCase().includes(searchTerm.toLowerCase()) ||
     member.district?.toLowerCase().includes(searchTerm.toLowerCase())) &&
    (selectedLocation === '' || member.district === selectedLocation) &&
    (selectedProfession === '' || member.profession === selectedProfession)
  );

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this member?')) {
      try {
        const response = await API.delete(`/api/members/${id}`, {
          method: 'DELETE',
        });

        if (!response.ok) {
          throw new Error('Failed to delete member');
        }

        setMembers(members.filter(member => member.id !== id));
      } catch (err) {
        setError(err.message);
      }
    }
  };

  const handleClearFilters = () => {
    setSelectedLocation('');
    setSelectedProfession('');
    setSearchTerm('');
  };

  const formatDate = (date) => {
    return new Date(date).toLocaleDateString('en-IN', {
      day: 'numeric',
      month: 'short',
      year: 'numeric'
    });
  };

  if (loading) {
  return (
    <>
     
    <div className="d-flex flex-column justify-content-center align-items-center vh-100 bg-white text-center">
      <div class="loader"></div> <br/><br/>
     <h5 className="text-secondary">Hold on, getting the providers details...</h5>
    </div>
    
    </>
  );
}

  return (
    <div className={styles.members}>
      <div className={styles.header}>
        <h2>Members Directory</h2>

        

        <div className={styles.filters}>
          <select
            value={selectedLocation}
            onChange={(e) => setSelectedLocation(e.target.value)}
            className={styles.filterSelect}
          >
            <option value="">All Locations</option>
            {uniqueLocations.map(location => (
              <option key={location} value={location}>{location}</option>
            ))}
          </select>

          <select
            value={selectedProfession}
            onChange={(e) => setSelectedProfession(e.target.value)}
            className={styles.filterSelect}
          >
            <option value="">All Professions</option>
            {uniqueProfessions.map(profession => (
              <option key={profession} value={profession}>{profession}</option>
            ))}
          </select>

          <button className={styles.clearFilterBtn} onClick={handleClearFilters}>
            Clear Filters
          </button>
        </div>

        <div className={styles.controls}>
          <div className={styles.viewToggle}>
            <button 
              className={view === 'card' ? styles.active : ''}
              onClick={() => setView('card')}
            >
              Card View
            </button>
            <button 
              className={view === 'list' ? styles.active : ''}
              onClick={() => setView('list')}
            >
              List View
            </button>
          </div>

          <input
            type="text"
            placeholder="Search members..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className={styles.searchInput}
          />
        </div>
      </div>

      {view === 'card' ? (
        <div className={styles.cardView}>
          {filteredMembers.map(member => (
            <div key={member._id || member.id} className={styles.memberCard}>
              <div className={styles.cardHeader}>
                <div className={styles.avatar}>
                  {member.photo ? (
                    <img src={member.photo} alt={member.name} />
                  ) : (
                    <User size={32} />
                  )}
                </div>
                <div className={styles.memberInfo}>
                  <h3>{member.name}</h3>
                  <p className={styles.profession}>{member.profession}</p>
                  <p className={styles.ref}>ID: {member.refNumber}</p>
                </div>
              </div>

              <div className={styles.cardDetails}>
                <div className={styles.detailItem}>
                  <Mail size={16} />
                  <span>{member.email}</span>
                </div>
                <div className={styles.detailItem}>
                  <Phone size={16} />
                  <span>{member.phone}</span>
                </div>
                <div className={styles.detailItem}>
                  <Calendar size={16} />
                  <span>{formatDate(member.dob)} ({member.age} yrs)</span>
                </div>
                <div className={styles.detailItem}>
                  <Building size={16} />
                  <span>{member.company}, {member.district}</span>
                </div>
              </div>

              <div className={styles.cardFooter}>
                <button 
                  className={styles.deleteBtn}
                  onClick={() => handleDelete(member.id)}
                >
                  <Trash2 size={16} /> Remove
                </button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className={styles.listView}>
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Profession</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Age</th>
                <th>Location</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredMembers.map(member => (
                <tr key={member._id || member.id}>
                  <td>{member.refNumber}</td>
                  <td>{member.name}</td>
                  <td>{member.profession}</td>
                  <td>{member.email}</td>
                  <td>{member.phone}</td>
                  <td>{member.age}</td>
                  <td>{member.district}</td>
                  <td>
                    <button 
                      className={styles.deleteBtn}
                      onClick={() => handleDelete(member.id)}
                    >
                      <Trash2 size={14} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

export default Members;
