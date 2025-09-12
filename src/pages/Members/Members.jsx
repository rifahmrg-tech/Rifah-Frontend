import React, { useState, useEffect } from 'react';
import { User, Phone, Mail, Building, Trash2 } from 'lucide-react';
import styles from './Members.module.scss';
import API from '../../axios';
import logo from '/yusuf.jpg'
function Members() {
  const [members, setMembers] = useState([]);
  const [view, setView] = useState('card');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedDistrict, setSelectedDistrict] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const username = localStorage.getItem("username"); //forAdminDeleteButton


  // ✅ Fetch members
  useEffect(() => {
    const fetchMembers = async () => {
      try {
        const response = await API.get('/member'); // new backend route
        setLoading(false);

        const data = response.data;
        console.log("Fetched members:", data);

        if (Array.isArray(data)) {
          setMembers(data);
        } else if (data && Array.isArray(data.data)) {
          setMembers(data.data);
        }
      } catch (err) {
        setError("Failed to fetch members");
        setLoading(false);
        console.error(err);
      }
    };

    fetchMembers();
  }, []);

  // ✅ Unique filters
  const uniqueDistricts = [...new Set(members.map(m => m.businessDistrict))].filter(Boolean).sort();
  const uniqueCategories = [...new Set(members.map(m => m.businessCategory))].filter(Boolean).sort();

  // ✅ Apply filters
  const filteredMembers = members.filter(m =>
    (m.businessName?.toLowerCase().includes(searchTerm.toLowerCase()) ||
     m.businessCategory?.toLowerCase().includes(searchTerm.toLowerCase()) ||
     m.businessDistrict?.toLowerCase().includes(searchTerm.toLowerCase())) &&
    (selectedDistrict === '' || m.businessDistrict === selectedDistrict) &&
    (selectedCategory === '' || m.businessCategory === selectedCategory)
  );

  // ✅ Handle delete
  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this member?')) {
      try {
        await API.delete(`/member/${id}`);
        setMembers(members.filter(m => m._id !== id));
      } catch (err) {
        setError("Failed to delete member");
      }
    }
  };

  const handleClearFilters = () => {
    setSelectedDistrict('');
    setSelectedCategory('');
    setSearchTerm('');
  };



  
// const getDirectImageUrl = (driveUrl) => {
//   if (!driveUrl) return null;
//   const match = driveUrl.match(/id=([^&]+)/);
//   return match ? `https://drive.google.com/thumbnail?id=${match[1]}` : driveUrl;
// };
const getDirectImageUrl = (driveUrl) => {
  if (!driveUrl) return null;
  // Match /d/{fileId}/ in the link
  const match = driveUrl.match(/\/d\/([^/]+)/);
  return match
    ? `https://drive.google.com/thumbnail?id=${match[1]}`
    : driveUrl;
};





  if (loading) {
    return (
      <div className="d-flex flex-column justify-content-center align-items-center vh-100 bg-white text-center">
        <div className="loader"></div>
        <br /><br />
        <h5 className="text-secondary">Hold on, getting members data...</h5>
      </div>
    );
  }

  return (
    <div className={styles.members}>
      <div className={styles.header}>
        <h2>Business Members Directory</h2>

        <div className={styles.filters}>
          <select
            value={selectedDistrict}
            onChange={(e) => setSelectedDistrict(e.target.value)}
            className={styles.filterSelect}
          >
            <option value="">All Districts</option>
            {uniqueDistricts.map(d => (
              <option key={d} value={d}>{d}</option>
            ))}
          </select>

          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className={styles.filterSelect}
          >
            <option value="">All Categories</option>
            {uniqueCategories.map(c => (
              <option key={c} value={c}>{c}</option>
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
            placeholder="Search businesses..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className={styles.searchInput}
          />
        </div>
      </div>

      {view === 'card' ? (
        <div className={styles.cardView}>
          {filteredMembers.map(m => (
            <div key={m._id} className={styles.memberCard}>
              <div className={styles.cardHeader}>
                <div className={styles.avatar}>
                  {m.personPhoto ? (
                     <img src={getDirectImageUrl(m.personPhoto)} alt={m.businessName} className={styles.avatarImg} />
                    //<img src={logo} alt={m.businessName} className={styles.avatarImg} />
                  ) : (
                   // <User size={32} />
                   <User className={styles.avatarIcon} />
                  )}
                </div>
                <div className={styles.memberInfo}>
                  <h3>{m.businessName}</h3>
                  <p className={styles.profession}>{m.businessCategory}</p>
                  <p className={styles.ref}>ID: {m.businessRegistrationNumber}</p>
                </div>
              </div>

              <div className={styles.cardDetails}>
                <div className={styles.detailItem}>
                  <Mail size={16} />
                  <span>{m.businessEmailAddress}</span>
                </div>
                <div className={styles.detailItem}>
                  <Phone size={16} />
                  <span>{m.businessPhoneNumber}</span>
                </div>
                <div className={styles.detailItem}>
                  <Building size={16} />
                  <span>{m.businessDistrict}, {m.businessState}</span>
                </div>
              </div>

              {/* <div className={styles.cardFooter}>
                <button 
                  className={styles.deleteBtn}
                  onClick={() => handleDelete(m._id)}
                >
                  <Trash2 size={16} /> Remove
                </button>
              </div> */}

                   {/* forAdminDeleteButton */}

                      <div className={styles.cardFooter}>    
          {username === "admin" && (
            <button 
              className={styles.deleteBtn}
              onClick={() => handleDelete(m._id)}
            >
              <Trash2 size={16} /> Remove
            </button>
          )}
        </div>

            </div>
          ))}
        </div>
      ) : (
        <div className={styles.listView}>
          <table>
            <thead>
              <tr>
                <th>Reg No</th>
                <th>Business</th>
                <th>Category</th>
                <th>Email</th>
                <th>Phone</th>
                <th>District</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredMembers.map(m => (
                <tr key={m._id}>
                  <td>{m.businessRegistrationNumber}</td>
                  <td>{m.businessName}</td>
                  <td>{m.businessCategory}</td>
                  <td>{m.businessEmailAddress}</td>
                  <td>{m.businessPhoneNumber}</td>
                  <td>{m.businessDistrict}</td>
                  {/* <td>
                    <button 
                      className={styles.deleteBtn}
                      onClick={() => handleDelete(m._id)}
                    >
                      <Trash2 size={14} />
                    </button>
                  </td> */}
                  
                    {/* forAdminDeleteButton */}
                              <td>
              {username === "admin" && (
                <button 
                  className={styles.deleteBtn}
                  onClick={() => handleDelete(m._id)}
                >
                  <Trash2 size={14} />
                </button>
              )}
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
