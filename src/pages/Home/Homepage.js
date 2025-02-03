import React, { useState, useEffect } from 'react';
import './Home.css';
import postImage from '../../pics/post2.png';
import Nav from '../../Nav/Nav';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Footer from '../../Nav/Footer';
import articles from '../../data/article.json'; // Adjust path as needed
const HomePage = () => {
  const [cards, setCards] = useState([]);
  useEffect(() => {
      // Use local JSON data instead of API call
      const filteredCards = articles.filter(article => article.id <= 6);
      setCards(filteredCards);
  }, []);
  return (
    <div id="Post">
      <img src="pics/post2.png" width={1519} height={700} id='imgss' alt="" />
      <div id='float'>
        <Nav />
        <div id="search">
          <button
            style={{
              width: '200px',
              padding: '10px',
              borderRadius: '25px',
              backgroundColor: '#E31616',
              color: '#F8E8DA',
              fontFamily: 'Abhaya Libre SemiBold',
              border: 'none',
              fontSize: 'x-large',
              marginLeft: '400px',
              marginBottom:'10px',
            }}
            className='browsad'
          >
            Browse Ads
          </button>
          <button
            style={{
              width: '200px',
              padding: '10px',
              borderRadius: '25px',
              backgroundColor: '#F8E8DA',
              color: '#E31616',
              fontFamily: 'Abhaya Libre SemiBold',
              border: 'none',
              marginLeft: '30px',
              fontSize: 'x-large',
            }}
            className='postad'
          >
            Post an Ad
          </button>
        </div>
        <div id="searchbar">
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <select
              className="form-select"
              style={{
                color: '#E31616',
                fontFamily: 'Abhaya Libre SemiBold',
                fontSize: 'larger',
                borderRadius: '15px',
                width: '35%',
                height: '50px',
                background: "url('../../pics/MapPinLine.png') no-repeat 10px center",
                backgroundColor: '#F8E8DA',
                paddingLeft: '50px',
              }}
            >
              <option value="">Select a City</option>
              <option value="Tanger">Tanger</option>
              <option value="Rabat">Rabat</option>
              <option value="Fes">Fès</option>
            </select>
            <select
              className="form-select"
              style={{
                color: '#E31616',
                height: '50px',
                fontFamily: 'Abhaya Libre SemiBold',
                fontSize: 'larger',
                borderRadius: '15px',
                width: '35%',
                marginLeft: '20px',
                background: "url('../../pics/AlignLeft.png') no-repeat 10px center",
                backgroundColor: '#F8E8DA',
                paddingLeft: '50px',
              }}
            >
              <option value="">Select a Category</option>
              <option value="Multimedia">Multimedia</option>
              <option value="Other">Other</option>
            </select>
            <input
              type="text"
              className="form-control"
              style={{
                width: '35%',
                height: '50px',
                borderRadius: '15px',
                marginLeft: '20px',
                color: '#E31616',
                fontFamily: 'Abhaya Libre SemiBold',
                fontSize: 'larger',
                background: "url('../../pics/CurrencyKzt.png') no-repeat 10px center",
                backgroundColor: '#F8E8DA',
                paddingLeft: '50px',
              }}
              placeholder="Type Your Keyword"
              id="p"
            />
            <button
              style={{
                width: '150px',
                borderRadius: '15px',
                backgroundColor: '#E31616',
                color: '#F8E8DA',
                marginLeft: '10px',
                fontFamily: 'Abhaya Libre SemiBold',
                border: 'none',
                fontSize: 'larger',
              }}
            >
              Search
            </button>
          </div>
          <div style={{ display: 'flex', marginTop: '20px' }}>
            <h4 style={{ color: 'rgba(56, 50, 50, 0.758)' }}>Trending Keywords:</h4>
            <h6 style={{ marginTop: '8px', marginLeft: '20px', wordSpacing: '30px', color: 'rgba(56, 50, 50, 0.758)' }}>
              Camera Mobile Dress Table Pant ...
            </h6>
          </div>
        </div>
      </div>
      {/* Popular Categories */}
      <div id="cat">
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <h1 style={{ color: '#020053', fontFamily: 'Abhaya Libre SemiBold', marginLeft: '5%' }}>Popular Categories</h1>
          <button
            style={{
              width: '200px',
              padding: '10px',
              borderRadius: '25px',
              backgroundColor: '#E31616',
              color: '#F8E8DA',
              marginRight: '100px',
              fontFamily: 'Abhaya Libre SemiBold',
              border: 'none',
              fontSize: 'larger',
            }}
          >
            View All Categories
          </button>
        </div>
        <div  className="scroll">
          <div id='divcat1'
          style={{
            marginLeft: '1.5%',
          }}>
            <img src="pics/multimedia.png" className='imgcat' width={200} alt="" />
          </div>
          <div
          id='divcat2'
            style={{
              marginLeft: '1.5%',
            }}
          >
            <img src="pics/clothes.png" className='imgcat' width={200} alt="" />
          </div>
          <div
            style={{
              marginLeft: '2%',
            }}
          ><img src="pics/vehicles.png" className='imgcat' width={200} alt="" /></div>
          <div
            style={{
              marginLeft: '2%',
            }}
          ><img src="pics/sport.png" className='imgcat' width={200} alt="" /></div>
          <div
            style={{
              marginLeft: '2%',
            }}
          ><img src="pics/workandstudy.png" className='imgcat' width={200} alt="" /></div>
          <div
            style={{
              marginLeft: '2%',
            }}
          ><img src="pics/Homeandgarden.png" className='imgcat' width={200} alt="" /></div>
        </div>
      </div>

      {/* Recently Published Ads */}
      <div className="containerr">
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <h1 style={{ color: '#020053', fontFamily: 'Abhaya Libre SemiBold', marginLeft: '5%' }}>
            Recently Published Ads
          </h1>
          <button
            style={{
              width: 'max-content',
              borderRadius: '25px',
              backgroundColor: '#E31616',
              color: '#F8E8DA',
              marginRight: '100px',
              fontFamily: 'Abhaya Libre SemiBold',
              border: 'none',
              fontSize: 'larger',
              height: '50px',
              paddingLeft: '2%',
              paddingRight: '2%',
            }}
          >
            View All Ads
          </button>
        </div>
        <div className="card-container">
          {cards.map((product) => (
            <div className="card" style={{backgroundColor:'#FFF3F3'}}>
              <img src={product.image} alt={product.title}  id="img"/>
              <h5 id='h5'>{product.contenu}</h5>
              <img src="images/Heart.png" alt="Favorite" width="25px" style={{position:"absolute", left: '87%', top: '56%'}}/>
              <img src="images/MapPinLine.png" alt="Location" width="13%" height="10%" id="map"/>
              <span style={{color: '#929292', position: 'absolute', top: '77%',left: '16%'}}>{product.location}</span>
              <p style={{color:' #BBB3B3', float: 'right', padding:'5%', marginTop: '11%',marginLeft:'60%'}}>{product.date}</p>
              <h4 id='h4'>{product.prix} DH</h4>
            </div>
          ))}
        </div> 
      </div>

      {/* Popular and Featurad Ads*/}
      <div className="containerr">
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <h1 style={{ color: '#020053', fontFamily: 'Abhaya Libre SemiBold', marginLeft: '5%' }}>
          Popular and Featurad Ads
          </h1>
        </div>
        <div className="card-container slider">
        <div className="slider-track">
          {[...cards,...cards].map((product,index) => (
            <div className="card c" style={{backgroundColor:'#FFF3F3'}} key={index}>
              <img src={product.image} alt={product.contenu}  id="img"/>
              <h5 id='h5'>{product.contenu}</h5>
              <img src="images/Heart.png" alt="Favorite" width="25px" style={{position:"absolute", left: '87%', top: '56%'}}/>
              <img src="images/MapPinLine.png" alt="Location" width="13%" height="10%" id="map"/>
              <span style={{color: '#929292', position: 'absolute', top: '77%',left: '16%'}}>{product.location}</span>
              <p style={{color:' #BBB3B3', float: 'right', padding:'5%', marginTop: '11%',marginLeft:'60%'}}>{product.date}</p>
              <h4 id='h4'>{product.prix} DH</h4>
            </div>
          ))}
          </div>
        </div> 
      </div>
      <div>
      <div>
        <h1 className="hero-heading">
          IntilliAnnounce <br /> Here for You
        </h1>
      </div>

      {/* Feature Section */}
      <div className="feature-section">
        <div className="feature-item">
          <div>
            <img src="pics/c6.png" alt="" width="100%" />
          </div>
          <div>
            <h1 className="feature-title">Sell Your Item Safely</h1>
            <h3 className="feature-description">
              Lorem ipsum dolor sit amet, <br /> consetetur sadipscing elitr,
              sed
            </h3>
            <h3 className="feature-link">Read More</h3>
          </div>
        </div>

        <div className="feature-item">
          <div>
            <img src="pics/c1.png" alt="" width="100%" />
          </div>
          <div>
            <h1 className="feature-title">Buy Directly</h1>
            <h3 className="feature-description">
              Lorem ipsum dolor sit amet, <br /> consetetur sadipscing elitr,
              sed
            </h3>
            <h3 className="feature-link">Read More</h3>
          </div>
        </div>

        <div className="feature-item">
          <div>
            <img src="pics/c2.png" alt="" width="100%" />
          </div>
          <div>
            <h1 className="feature-title">Friendly Platform</h1>
            <h3 className="feature-description">
              Lorem ipsum dolor sit amet, <br /> consetetur sadipscing elitr,
              sed
            </h3>
            <h3 className="feature-link">Read More</h3>
          </div>
        </div>
      </div>

      <div className="feature-section">
        <div className="feature-item">
          <div>
            <img src="pics/c3.png" alt="" width="100%" />
          </div>
          <div>
            <h1 className="feature-title">Pay in Person</h1>
            <h3 className="feature-description">
              Lorem ipsum dolor sit amet, <br /> consetetur sadipscing elitr,
              sed
            </h3>
            <h3 className="feature-link">Read More</h3>
          </div>
        </div>

        <div className="feature-item">
          <div>
            <img src="pics/c4.png" alt="" width="100%" />
          </div>
          <div>
            <h1 className="feature-title">24/7 Support</h1>
            <h3 className="feature-description">
              Lorem ipsum dolor sit amet, <br /> consetetur sadipscing elitr,
              sed
            </h3>
            <h3 className="feature-link">Read More</h3>
          </div>
        </div>

        <div className="feature-item">
          <div>
            <img src="pics/c5.png" alt="" width="100%" />
          </div>
          <div>
            <h1 className="feature-title">Verified Users</h1>
            <h3 className="feature-description">
              Lorem ipsum dolor sit amet, <br /> consetetur sadipscing elitr,
              sed
            </h3>
            <h3 className="feature-link">Read More</h3>
          </div>
        </div>
      </div>

      {/* Join Us Section */}
      <div>
        <h1 className="join-heading">
          You want join us <br /> and sell your products?
        </h1>
        <h3 className="join-subheading">Just 4 easy steps</h3>
      </div>

      <div className="step-section">
        <div className="step-item">
          <div>
            <img
              src="pics/UserCircleCheck.png"
              alt=""
              width="30%"
              style={{ marginLeft: "70%" }}
            />
          </div>
          <div>
            <h1 className="step-title">Create your Account</h1>
            <h3 className="step-description">
              create your account <br /> for free
            </h3>
          </div>
        </div>

        <div className="step-item">
          <div>
            <img
              src="pics/Vector-2.png"
              alt=""
              width="20%"
              style={{ marginLeft: "80%" }}
            />
          </div>
          <div>
            <h1 className="step-title">Choose Product</h1>
            <h3 className="step-description">
              choose any product <br /> you to sell
            </h3>
          </div>
        </div>

        <div className="step-item">
          <div>
            <img
              src="pics/Vector-1.png"
              alt=""
              width="20%"
              style={{ marginLeft: "80%" }}
            />
          </div>
          <div>
            <h1 className="step-title">Fill the form</h1>
            <h3 className="step-description">
              fill up the form for <br /> create an announce
            </h3>
          </div>
        </div>

        <div className="step-item">
          <div>
            <img
              src="pics/Vector.png"
              alt=""
              width="25%"
              style={{ marginLeft: "80%" }}
            />
          </div>
          <div>
            <h1 className="step-title">Post Them</h1>
            <h3 className="step-description">
              And finally post your <br /> announce successfully
            </h3>
          </div>
        </div>
      </div>
    </div>
    <Footer/>
    </div>
  );
};

export default HomePage;
  