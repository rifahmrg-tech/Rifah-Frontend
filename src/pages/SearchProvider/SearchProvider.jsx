// import React, { useState, useEffect } from 'react';
// import API from '../../axios';
// import { Search, MapPin, Briefcase } from 'lucide-react';
// import styles from './SearchProvider.module.scss';

// const SearchProvider = () => {
//   const [providers, setProviders] = useState([]);
//   const [filteredProviders, setFilteredProviders] = useState([]);
  
//   // Search States
//   const [searchTerm, setSearchTerm] = useState("");
//   const [selectedArea, setSelectedArea] = useState("");
//   const [selectedCategory, setSelectedCategory] = useState("");

//   // Trichy Specific Areas
//   const trichyAreas = [
//     "Thillai Nagar", "Cantonment", "K.K. Nagar", "Srirangam", 
//     "Kattur / BHEL", "Main Guard Gate", "Woraiyur", "Lalgudi", "Manapparai"
//   ];

//   // Business Categories
//   const categories = [
//     "Manufacturing", "Retail", "Services", "Agriculture & Trading", "Education"
//   ];

//   useEffect(() => {
//     fetchProviders();
//   }, []);

//   const fetchProviders = async () => {
//     try {
//       const res = await API.get('/api/members');
//       setProviders(res.data);
//       setFilteredProviders(res.data);
//     } catch (err) {
//       console.error("Error fetching providers:", err);
//     }
//   };

//   // Handle Filtering Logic
//   const handleSearch = () => {
//     let results = providers;

//     if (searchTerm) {
//       results = results.filter(p => 
//         p.companyName.toLowerCase().includes(searchTerm.toLowerCase()) ||
//         p.productsAndServices?.toLowerCase().includes(searchTerm.toLowerCase())
//       );
//     }

//     if (selectedArea) {
//       results = results.filter(p => p.address?.city_area === selectedArea);
//     }

//     if (selectedCategory) {
//       results = results.filter(p => p.businessCategory === selectedCategory);
//     }

//     setFilteredProviders(results);
//   };

//   return (
//     <div className={styles.container}>
//       <div className={styles.searchBarSection}>
//         {/* Text Search */}
//         <div className={styles.inputWrapper}>
//           <Search size={18} className={styles.icon} />
//           <input 
//             type="text" 
//             placeholder="Search for companies or services..." 
//             value={searchTerm}
//             onChange={(e) => setSearchTerm(e.target.value)}
//           />
//         </div>

//         {/* Area Filter */}
//         <div className={styles.selectWrapper}>
//           <MapPin size={18} className={styles.icon} />
//           <select value={selectedArea} onChange={(e) => setSelectedArea(e.target.value)}>
//             <option value="">All Trichy Areas</option>
//             {trichyAreas.map(area => (
//               <option key={area} value={area}>{area}</option>
//             ))}
//           </select>
//         </div>

//         {/* Category Filter */}
//         <div className={styles.selectWrapper}>
//           <Briefcase size={18} className={styles.icon} />
//           <select value={selectedCategory} onChange={(e) => setSelectedCategory(e.target.value)}>
//             <option value="">All Categories</option>
//             {categories.map(cat => (
//               <option key={cat} value={cat}>{cat}</option>
//             ))}
//           </select>
//         </div>

//         <button className={styles.searchBtn} onClick={handleSearch}>Find Now</button>
//       </div>

//       {/* Results Display */}
//       <div className={styles.resultsGrid}>
//         {filteredProviders.length > 0 ? (
//           filteredProviders.map((provider) => (
//             <div key={provider._id} className={styles.card}>
//               <h3>{provider.companyName}</h3>
//               <p><strong>Area:</strong> {provider.address?.city_area || "Trichy"}</p>
//               <p><strong>Category:</strong> {provider.businessCategory}</p>
//               <p className={styles.desc}>{provider.description}</p>
//               <a href={`https://wa.me/91${provider.phone}`} target="_blank" rel="noreferrer">
//                 <button className={styles.whatsappBtn}>Chat on WhatsApp</button>
//               </a>
//             </div>
//           ))
//         ) : (
//           <p>No business found in this area/category.</p>
//         )}
//       </div>
//     </div>
//   );
// };

// export default SearchProvider;

//----------------------17/02------------5.23----------------

import React, { useState, useEffect } from 'react';
import API from '../../axios'; // Ensure this path is correct
import { Search, MapPin, Briefcase } from 'lucide-react';
import styles from './SearchProvider.module.scss';

const SearchProvider = () => {
  const [providers, setProviders] = useState([]);
  const [filteredProviders, setFilteredProviders] = useState([]);
  
  // Search States
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedArea, setSelectedArea] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");

  // Trichy Specific Areas
  const trichyAreas = [
    "Thillai Nagar", "Cantonment", "K.K. Nagar", "Srirangam", 
    "Kattur / BHEL", "Main Guard Gate", "Woraiyur", "Lalgudi", "Manapparai"
  ];

  // Business Categories
  const categories = [
    "Manufacturing", "Retail", "Services", "Agriculture & Trading", "Education"
  ];

  useEffect(() => {
    fetchProviders();
  }, []);

  const fetchProviders = async () => {
    try {
      const res = await API.get('/api/members');
      console.log("Fetched Data:", res.data); // ✅ Debug: Check your console to see the real data
      setProviders(res.data);
      setFilteredProviders(res.data);
    } catch (err) {
      console.error("Error fetching providers:", err);
    }
  };

  // ✅ FIX: Robust Filtering Logic
  const handleSearch = () => {
    let results = providers;

    // 1. Text Search (Case Insensitive & Safe)
    if (searchTerm) {
      const lowerTerm = searchTerm.toLowerCase().trim();
      results = results.filter(p => 
        (p.companyName && p.companyName.toLowerCase().includes(lowerTerm)) ||
        (p.productsAndServices && p.productsAndServices.toLowerCase().includes(lowerTerm)) ||
        (p.description && p.description.toLowerCase().includes(lowerTerm))
      );
    }

    // 2. Area Filter (Safe Check)
    if (selectedArea) {
      results = results.filter(p => {
        // We check p.address.city_area safely. If it's missing, we default to empty string.
        const area = p.address?.city_area || ""; 
        return area.toLowerCase().trim() === selectedArea.toLowerCase().trim();
      });
    }

    // 3. Category Filter (Safe Check)
    if (selectedCategory) {
      results = results.filter(p => {
        const category = p.businessCategory || "";
        return category.toLowerCase().trim() === selectedCategory.toLowerCase().trim();
      });
    }

    console.log("Filtered Results:", results); // ✅ Debug: See what is left after filtering
    setFilteredProviders(results);
  };

  // Optional: Allow "Enter" key to trigger search
  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <div className={styles.container}>
      {/* Search Header */}
      <div className={styles.header}>
        <h2>Find Services in Trichy</h2>
        <p>Connect with trusted businesses and service providers.</p>
      </div>

      <div className={styles.searchBarSection}>
        {/* Text Search */}
        <div className={styles.inputWrapper}>
          <Search size={18} className={styles.icon} />
          <input 
            type="text" 
            placeholder="Search for companies or services..." 
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            onKeyDown={handleKeyDown}
          />
        </div>

        {/* Area Filter */}
        <div className={styles.selectWrapper}>
          <MapPin size={18} className={styles.icon} />
          <select value={selectedArea} onChange={(e) => setSelectedArea(e.target.value)}>
            <option value="">All Trichy Areas</option>
            {trichyAreas.map(area => (
              <option key={area} value={area}>{area}</option>
            ))}
          </select>
        </div>

        {/* Category Filter */}
        <div className={styles.selectWrapper}>
          <Briefcase size={18} className={styles.icon} />
          <select value={selectedCategory} onChange={(e) => setSelectedCategory(e.target.value)}>
            <option value="">All Categories</option>
            {categories.map(cat => (
              <option key={cat} value={cat}>{cat}</option>
            ))}
          </select>
        </div>

        <button className={styles.searchBtn} onClick={handleSearch}>Find Now</button>
      </div>

      {/* Results Display */}
      <div className={styles.resultsGrid}>
        {filteredProviders.length > 0 ? (
          filteredProviders.map((provider) => (
            <div key={provider._id} className={styles.card}>
              <div className={styles.cardHeader}>
                <h3>{provider.companyName || "Unnamed Company"}</h3>
                <span className={styles.badge}>{provider.businessCategory || "General"}</span>
              </div>
              
              <div className={styles.cardBody}>
                <p className={styles.location}>
                  <MapPin size={14} /> {provider.address?.city_area || "Trichy"}, {provider.address?.city || ""}
                </p>
                <p className={styles.desc}>
                  {provider.description 
                    ? provider.description.substring(0, 100) + "..." 
                    : "No description available."}
                </p>
              </div>

              <div className={styles.cardFooter}>
                {/* ✅ FIX: WhatsApp Number Check */}
                {provider.phone || provider.phoneNumber ? (
                  <a 
                    href={`https://wa.me/91${provider.phone || provider.phoneNumber}`} 
                    target="_blank" 
                    rel="noreferrer"
                    className={styles.whatsappLink}
                  >
                    <button className={styles.whatsappBtn}>Chat on WhatsApp</button>
                  </a>
                ) : (
                  <button className={styles.whatsappBtn} disabled style={{opacity: 0.5, cursor: 'not-allowed'}}>
                    No Number
                  </button>
                )}
              </div>
            </div>
          ))
        ) : (
          <div className={styles.noResults}>
            <p>No business found matching your criteria.</p>
            <button 
              className={styles.clearBtn} 
              onClick={() => {
                setSearchTerm("");
                setSelectedArea("");
                setSelectedCategory("");
                setFilteredProviders(providers);
              }}
            >
              Clear Filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchProvider;