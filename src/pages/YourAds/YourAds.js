import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getAds, deleteAd } from '../../utils/storage';
import './YourAds.css';
import Nav from '../../Nav/Nav';
import Footer from '../../Nav/Footer';
export default function YourAds() {
  const { user } = useSelector((state) => state.auth);
  const [userAds, setUserAds] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const ads = getAds().filter(ad => ad.userId === user.id);
    setUserAds(ads);
  }, [user.id]);

  const handleDelete = (adId) => {
    if (window.confirm('Are you sure you want to delete this ad?')) {
      deleteAd(adId);
      setUserAds(prev => prev.filter(ad => ad.id !== adId));
    }
  };

  const handleEdit = (adId) => {
    navigate(`/post-ad/${adId}`);
  };

  return (
    <div className="your-ads-container">
      <div className='post'>
        <img src="pics/post1.png" alt="" className='img1' />
        <div className='blur'>
        <Nav />
          <div className="title">
            <h1 id='h11'> Your Ads</h1>
            <Link to="/" className='aa'>Home ---</Link>
            <Link to='/your-ads' className='aa'>YourAds</Link>
          </div>
        </div>
      </div>
      <div className="ads-list">
        {userAds.length === 0 ? (
          <p>No ads posted yet. <Link to="/post-ad">Post your first ad!</Link></p>
        ) : (
          userAds.map(ad => (
            <div key={ad.id} className="ad-card">
              <img src={ad.image} alt={ad.title} />
              <div className="ad-details">
                <h3>{ad.title}</h3>
                <p>{ad.prix} DH</p>
                <p>{ad.location}</p>
                <div className="ad-actions">
                  <button onClick={() => handleEdit(ad.id)}>Edit</button>
                  <button onClick={() => handleDelete(ad.id)}>Delete</button>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
      <Footer/>
    </div>
  );
}