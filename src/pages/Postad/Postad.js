import React, { useState,useEffect } from 'react';
import './Postad.css';
import { useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import Nav from '../../Nav/Nav';
import Footer from '../../Nav/Footer';
import { saveAd,getAds, updateAd } from '../../utils/storage';
import { useParams } from 'react-router-dom';
export default function Postad() {
  const navigate = useNavigate();
  const [previewImage, setPreviewImage] = useState(null);
  const { id } = useParams();
  const { user } = useSelector((state) => state.auth);
  const isEditMode = !!id;
  const [formData, setFormData] = useState({
    title: '',
    category: '',
    price: '',
    priceOnCall: false,
    contactType: 'sameUser',
    firstName: '',
    lastName: '',
    phone: '',
    address: '',
    city: '',
    agreed: true
  });
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    if (file.size > 500000) { // 500KB
      alert('File size exceeds 500KB limit');
      return;
    }

    const reader = new FileReader();
    reader.onloadend = () => {
      setPreviewImage(reader.result);
      setFormData(prev => ({ ...prev, image: reader.result }));
    };
    reader.readAsDataURL(file);
  };
  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };
  useEffect(() => {
    if (isEditMode) {
      const ads = getAds();
      const existingAd = ads.find(ad => ad.id === Number(id));
      if (existingAd && existingAd.userId === user.id) {
        setFormData({
          ...existingAd,
          agreed: true
        });
        setPreviewImage(existingAd.image);  // Set the existing image
      }
    }
  }, [id, user.id, isEditMode]);
  const handleSubmit = (e) => {
    e.preventDefault();

    // Validation
    if (!formData.title || !formData.category || !formData.firstName || 
        !formData.lastName || !formData.phone || !formData.agreed) {
      alert('Please fill in all required fields (*)');
      return;
    }
    const months = [
        'janvier', 'février', 'mars', 'avril', 'mai', 'juin',
        'juillet', 'août', 'septembre', 'octobre', 'novembre', 'décembre'
    ];
    
    const currentDate = new Date();
    const formattedDate = `${currentDate.getDate()},${months[currentDate.getMonth()]},${currentDate.getFullYear()}`;
    if (isEditMode) {
      updateAd(Number(id), {
        ...formData,
        date: formattedDate,
        location: formData.city,
        contenu: formData.title,
        prix: formData.price || 'Price on call',
        image: previewImage || '/pics/default-ad.png', // Use preview or default
        categorie: formData.category
      });
    } else{
      saveAd({
        ...formData,
        date: formattedDate,
        location: formData.city,
        contenu: formData.title,
        prix: formData.price || 'Price on call',
        image: previewImage || '/pics/default-ad.png', // Use preview or default
        categorie: formData.category,
        imageH: '/images/Heart.png', // Default heart icon
        imageM: '/images/MapPinLine.png' // Default map icon
      },user.id);
    }
    

    navigate('/your-ads');
  };

  return (
    <div className="post-ad-container">
      <div className='post'>
        <img src={`${process.env.PUBLIC_URL}/pics/post1.png`} alt="" className='img1' />
        <div className='blur'>
          <Nav />
          <div className="title">
            <h1 id='h11'>{isEditMode ? 'Update Ad' : 'Post Your Ad'}</h1>
            <Link to="/" className='aa'>Home ---</Link>
            <Link to='/post-ad' className='aa'>{isEditMode ? 'UpdateAd' : 'PostAd'}</Link>
          </div>
        </div>
      </div>

      <div id="container2">
        <form className="ad-form" onSubmit={handleSubmit}>
          {/* Ad Details Section */}
          <div className='idn' style={{ borderRight: '#01005328 solid' }}>
            <div id="d1" style={{ display: 'flex' }}>
              <div className="divside"></div>
              <h4 style={{ color: '#020053', fontFamily: 'Abhaya Libre SemiBold', fontWeight: 'bold', marginTop: '3%', marginLeft: '2%' }}>Ad Details</h4>
            </div>
            
            <div className="form-section">
              <div className="form-group">
                <input 
                  type="text" 
                  required 
                  placeholder='Project Title *'
                  name="title"
                  value={formData.title}
                  onChange={handleInputChange}
                />
              </div>

              <div className="form-group">
                <select 
                  required 
                  name="category"
                  value={formData.category}
                  onChange={handleInputChange}
                >
                  <option value="">Choose category *</option>
                  <option value="Multimedia">Multimedia</option>
                  <option value="Vehicles">Vehicles</option>
                  <option value="Clothes">Clothes</option>
                  <option value="Pets">Pets</option>
                </select>
              </div>

              <div className="price-options">
                <div className="form-group">
                  <input 
                    type="number" 
                    placeholder="Ad Your Price"
                    name="price"
                    value={formData.price}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="form-checkbox terms">
                  <input 
                    type="checkbox" 
                    id="priceOnCall"
                    name="priceOnCall"
                    checked={formData.priceOnCall}
                    onChange={handleInputChange}
                  />
                  <label htmlFor="priceOnCall">Price On Call</label>
                </div>
              </div>

              <div className="file-upload">
                <div className="upload-area">
                    {previewImage && (
                        <img 
                        src={previewImage} 
                        alt="Preview" 
                        style={{ 
                            maxWidth: '200px', 
                            maxHeight: '150px',
                            marginBottom: '1rem'
                        }}
                        />
                    )}
                  <p>Drop files anywhere to upload</p>
                  <p>or</p>
                  <label htmlFor="file-upload" className="upload-button">
                    Select Files
                  </label>
                  <input 
                        type="file" 
                        id="file-upload" 
                        style={{ display: 'none' }}
                        onChange={handleFileChange}
                        accept="image/*"
                    />
                  <p className="file-size">Maximum size : 500 KB</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Details Section */}
          <div className='idnn'>
            <div id="d" style={{ display: 'flex', width: '100%' }}>
              <div className="divside"></div>
              <h4 style={{ color: '#020053', fontFamily: 'Abhaya Libre SemiBold', fontWeight: 'bold', marginTop: '3%', marginLeft: '2%', width: '100%' }}>Contact Details</h4>
            </div>

            <div className="form-section">
              <div style={{ display: 'flex' }}>      
                <div className="form-checkbox terms">
                  <input 
                    type="radio" 
                    id="sameUser" 
                    name="contactType"
                    value="sameUser"
                    checked={formData.contactType === 'sameUser'}
                    onChange={handleInputChange}
                  />
                  <label htmlFor="sameUser">Same User</label>
                </div>
                <div className="form-checkbox terms ms-3">
                  <input 
                    type="radio" 
                    id="someoneElse" 
                    name="contactType"
                    value="someoneElse"
                    checked={formData.contactType === 'someoneElse'}
                    onChange={handleInputChange}
                  />
                  <label htmlFor="someoneElse">Someone Else</label>
                </div>
              </div>

              <div className="name-group">
                <div className="form-group">
                  <input 
                    type="text" 
                    required 
                    placeholder='First Name *'
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="form-group">
                  <input 
                    type="text" 
                    required 
                    placeholder='Last Name *'
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                  />
                </div>
              </div>

              <div className="form-group">
                <input 
                  type="tel" 
                  required 
                  placeholder='Phone Number *'
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                />
              </div>

              <div className="form-group">
                <input 
                  type="text" 
                  placeholder='Enter Address'
                  name="address"
                  value={formData.address}
                  onChange={handleInputChange}
                />
              </div>

              <div className="form-group">
                <select 
                  name="city"
                  value={formData.city}
                  onChange={handleInputChange}
                >
                  <option value="">Select City</option>
                  <option value="Casablanca">Casablanca</option>
                  <option value="Rabat">Rabat</option>
                  <option value="Marrakech">Marrakech</option>
                  <option value="Fes">Fes</option>
                </select>
              </div>

              <div className="form-checkbox terms">
                <input 
                  type="checkbox" 
                  id="termsAgreement"
                  name="agreed"
                  checked={formData.agreed}
                  onChange={handleInputChange}
                />  
                <label htmlFor="termsAgreement">I agree to all Terms of Use & Posting Rules *</label>
              </div>

              <button type="submit" className="submit-button">{isEditMode ? 'Update Your Ad' : 'Post Your Ad'}</button>
            </div>
          </div>
        </form>
      </div>
      <Footer />
    </div>
  );
}