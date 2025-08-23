import React, { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom';
import styles from './MembersDetail.module.scss'
import API from '../../axios';

function MembersDetail() {
    const { id } = useParams();
    const [member, setMember] = useState(null);

    useEffect(()=>{API.get(`/member/${id}`)
    .then((res)=>setMember(res.data))
},[id])

    const getDirectImageUrl = (driveUrl) => {
  if (!driveUrl) return null;
  const match = driveUrl.match(/id=([^&]+)/);
  return match ? `https://drive.google.com/thumbnail?id=${match[1]}` : driveUrl;
};

    if (!member) return <div>Loading....</div>;
     return (

        
        <div className={styles.detailsContainer}>
            {/* Sidebar */}
            <div className={styles.profileSidebar}>
                 <img
                                      src={member.photoUrl ? getDirectImageUrl(member.photoUrl) : "/members/AnonymousImage.jpg"}
                                      alt={member.name}
                                      className={styles.profilePhoto}
                                      onError={(e) => {
                                        e.target.src = "/members/AnonymousImage.jpg";
                                      }}
                                    />
                <h3>{member.name}</h3>
                <p className='my-3'>{member.memberType}</p>
                <p className='my-3' >{member.profession}</p>
                <p className='my-3'>{member.currentInstitutionOrCompany}</p>
                
                {/* <div className={styles.socialLinks}>
                    {/* You can map these if needed */}
                    {/* <a href="#">LinkedIn</a>
                    <a href="#">Twitter</a>
                </div> */} 
            </div>

            {/* Main Content */}
            <div className={styles.profileMain}>
                <h3>Personal Info</h3>
                <div className={styles.infoGrid}>
                   
                    
                     <div><strong>Father's Name:</strong> {member.fathersName}</div>
                     <div><strong>Marital Status:</strong>{member.maritalStatus} </div>
                    <div><strong>Date of Birth:</strong> {new Date(member.dateOfBirth).toLocaleDateString('en-IN',{
                                      day:"numeric",
                                      month:"long",
                                      year:"numeric"
                                    })}</div>
                    <div><strong>Age:</strong> {member.age}</div>
                    <div><strong>Mobile No:</strong> {member.mobileNumber}</div>
                    <div><strong>Other Mobile No:</strong> {member.otherPersonalNumber}</div>
                    <div><strong>Email Id:</strong> {member.personalEmail} </div>
                    <div><strong>College Name:</strong> {member.collegeName}</div>
                    <div><strong>Department:</strong>{member.department} </div>
                    <div><strong>Native Place:</strong>{member.nativePlace} </div>
                    <div><strong>Address:</strong>{member.currentAddress} </div>
                    <div><strong>Current District:</strong> {member.currentDistrict}</div>
                    <div><strong>Ambition:</strong>{member.ambition} </div>
                    <div><strong>Area of Interest:</strong>{member.areaOfInterest} </div>
                </div>

                <h3>Related SubTasks</h3>
               
               <br />
                <Link to="/members" className={styles.backLink}>← Back to List</Link>
               
            </div>
        </div>
    );
 }

 export default MembersDetail


 
