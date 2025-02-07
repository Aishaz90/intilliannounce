import React, { useState, useEffect } from 'react';
import './Home.css';
import { useNavigate,Link } from 'react-router-dom';
import { useSelector,useDispatch } from 'react-redux';
import Nav from '../../Nav/Nav';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Footer from '../../Nav/Footer';
import articles from '../../data/article.json';
const HomePage = () => {
  const { token, adminToken } = useSelector((state) => state.auth);
  const { language, translations } = useSelector((state) => state.language || {
    language: 'en'
  });  
  const currentTranslations = translations?.[language] || translations?.en;
  const [cards, setCards] = useState([]);
  useEffect(() => {
      const filteredCards = articles.filter(article => article.id <= 6);
      setCards(filteredCards);
  }, []);
  const navigate = useNavigate();
  const handlePostAdClick = (e) => {
    if (!token) {
      e.preventDefault();
      navigate('/login');
    }
  };
  const [city, setCity] = useState('');
  const [category, setCategory] = useState('');
  const handleSearch = () => {
    const params = new URLSearchParams();
    if (city) params.append('city', city);
    if (category) params.append('category', category);
    navigate(`/listing?${params.toString()}`);
  };
  const isAuthenticated = token || adminToken;
  useEffect(() => {
      const protectedRoutes = ['/post-ad']; // ✅ Protect only these routes
      if (!isAuthenticated && protectedRoutes.includes(window.location.pathname)) {
        navigate('/login'); // ✅ Redirect only for protected pages
      }
  }, [isAuthenticated, navigate]);
  return (
    <div id="Post">
      <img src="pics/post3.png" width={1519} height={700} id='imgss' alt="" />
      <div id='float'>
        <Nav />
        <div id="search">
          <div className="hero-container">
            <h1 className="hero-title"><span id='wel'>{currentTranslations.welcome}</span> {currentTranslations.toint}</h1>
            <p className="hero-subtitle" dangerouslySetInnerHTML={{ __html: currentTranslations.subtitle }}>
            </p>
          </div>
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
            <Link id='b' to='/listing'>
            {currentTranslations.browseAds}
            </Link>
          </button>
          <button
            style={{
              width: '200px',
              padding: '10px',
              borderRadius: '25px',
              fontFamily: 'Abhaya Libre SemiBold',
              border: 'none',
              marginLeft: '30px',
              fontSize: 'x-large',
            }}
            className='postad'
            onClick={handlePostAdClick}> <Link to='/post-ad' id='lk' style={{color: '#E31616',}}>{currentTranslations.postAd}</Link></button>
        </div>
        <div id="searchbar">
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <select
              value={city}
              onChange={(e) => setCity(e.target.value)}
              className="form-select"
              style={{
                color: '#E31616',
                fontFamily: 'Abhaya Libre SemiBold',
                fontSize: 'larger',
                borderRadius: '15px',
                width: '35%',
                height: '50px',
                background: "url('../../pics/MapPinLine.png') no-repeat 10px center",
                paddingLeft: '50px',
                backgroundColor: '#FFF',
              }}
            >
              <option value="">Select a City</option>
              <option value="Tanger">Tanger</option>
              <option value="Rabat">Rabat</option>
              <option value="Fes">Fès</option>
            </select>
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="form-select"
              style={{
                color: '#E31616',
                height: '50px',
                fontFamily: 'Abhaya Libre SemiBold',
                fontSize: 'larger',
                borderRadius: '15px',
                width: '35%',
                marginLeft: '0px',
                background: "url('../../pics/AlignLeft.png') no-repeat 10px center",
                backgroundColor: '#FFF',
                paddingLeft: '50px',
              }}
            >
              <option value="">{currentTranslations.selectCategory}</option>
              <option value="Multimedia">Multimedia</option>
              <option value="Household Appliances">Household Appliances</option>
              <option value="Sport">Sport</option>
              <option value="Pets">Pets</option>
              <option value="Home And Garden">Home And Garden</option>
              <option value="Clothes">Clothes</option>
              <option value="Work And Study">Work And Study</option>
              <option value="Vehicles">Vehicles</option>
            </select>
      
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
              type="submit"
              onClick={handleSearch}
            >
              {currentTranslations.search}
            </button>
          </div>
        </div>
      </div>
      {/* Popular Categories */}
      <div id="cat">
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <h1 style={{ color: '#020053', fontFamily: 'Abhaya Libre SemiBold', marginLeft: '5%' }}>{currentTranslations.popularCategories}</h1>
          <Link to='/categories' id='lk' style={{color:'#FFF3F3',}}><button
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
            {currentTranslations.viewAllCategories}
          </button></Link>
        </div>
        <div  className="scroll">
          <div id='divcat1'
          style={{
            marginLeft: '1.5%',
          }}>
            <Link to='/Multimedia' id='lk' style={{color:'#FFF3F3',}}><img src="pics/multimedia.png" className='imgcat' width={200} alt="" /></Link>
          </div>
          <div
          id='divcat2'
            style={{
              marginLeft: '1.5%',
            }}
          >
            <Link to='/Clothes' id='lk' style={{color:'#FFF3F3',}}><img src="pics/clothes.png" className='imgcat' width={200} alt="" /></Link>
          </div>
          <div
            style={{
              marginLeft: '2%',
            }}
          ><Link to='/Vehicles' id='lk' style={{color:'#FFF3F3',}}><img src="pics/vehicles.png" className='imgcat' width={200} alt="" /></Link></div>
          <div
            style={{
              marginLeft: '2%',
            }}
          ><Link to='/Sport' id='lk' style={{color:'#FFF3F3',}}><img src="pics/sport.png" className='imgcat' width={200} alt="" /></Link></div>
          <div
            style={{
              marginLeft: '2%',
            }}
          ><Link to='/Work And Study' id='lk' style={{color:'#FFF3F3',}}><img src="pics/workandstudy.png" className='imgcat' width={200} alt="" /></Link></div>
          <div
            style={{
              marginLeft: '2%',
            }}
          ><Link to='/Home And Garden' id='lk' style={{color:'#FFF3F3',}}><img src="pics/Homeandgarden.png" className='imgcat' width={200} alt="" /></Link></div>
        </div>
      </div>

      {/* Recently Published Ads */}
      <div className="containerr">
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <h1 style={{ color: '#020053', fontFamily: 'Abhaya Libre SemiBold', marginLeft: '5%' }}>
          {currentTranslations.recentAds}
          </h1>
          <Link to='/listing' id='lk' style={{color:'#FFF3F3',width: 'max-content',width: 'max-content',
              borderRadius: '25px',
              color: '#F8E8DA',
              marginRight: '100px',
              fontFamily: 'Abhaya Libre SemiBold',
              border: 'none',
              fontSize: 'larger',
              height: '50px',
              backgroundColor: '#E31616',
              paddingLeft: '2%',
              paddingTop:"0.7%",
              paddingRight: '2%',}}>
            {currentTranslations.viewAllAds}
          </Link>
        </div>
        <div className="card-container">
          {cards.map((product,index) => (
            <div className="cards" key={index}>
              <img src={product.image} alt={product.title}  id="img"/>
              <Link to={`/details/${product.id}`} id='lk'><h5 id='h5'>{product.contenu}</h5></Link>
              <img src="images/Heart.png" alt="Favorite" width="25px" style={{position:"absolute", left: '87%', top: '56%'}}/>
              <img src="images/MapPinLine.png" alt="Location" width="13%" height="10%" id="map"/>
              <span style={{color: '#929292', position: 'absolute', top: '77%',left: '16%'}}>{product.location}</span>
              <p style={{color:'rgb(105, 104, 104)', float: 'right', padding:'5%', marginTop: '11%',marginLeft:'60%'}}>{product.date}</p>
              <h4 id='h4'>{product.prix} DH</h4>
            </div>
          ))}
        </div> 
      </div>

      {/* Popular and Featurad Ads*/}
      <div className="containerr">
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <h1 style={{ color: '#020053', fontFamily: 'Abhaya Libre SemiBold', marginLeft: '5%' }}>
          {currentTranslations.featuredAds}
          </h1>
        </div>
        <div className="card-container slider">
        <div className="slider-track">
          {[...cards,...cards].map((product,index) => (
            <div className="cards c" key={index}>
              <img src={product.image} alt={product.contenu}  id="img"/>
              <Link to={`/details/${product.id}`} id='lk'><h5 id='h5'>{product.contenu}</h5></Link>
              <img src="images/Heart.png" alt="Favorite" width="25px" style={{position:"absolute", left: '87%', top: '56%'}}/>
              <img src="images/MapPinLine.png" alt="Location" width="13%" height="10%" id="map"/>
              <span style={{color: '#929292', position: 'absolute', top: '77%',left: '16%'}}>{product.location}</span>
              <p style={{color:'rgb(92, 91, 91)', float: 'right', padding:'5%', marginTop: '11%',marginLeft:'60%'}}>{product.date}</p>
              <h4 id='h4'>{product.prix} DH</h4>
            </div>
          ))}
          </div>
        </div> 
      </div>
      <div>
      <div>
        <h1 className="hero-heading" dangerouslySetInnerHTML={{ __html: currentTranslations.hereForYou }}>
        </h1>
      </div>

      {/* Feature Section */}
      <div className="feature-section">
        <div className="feature-item">
          <div>
            <img src="pics/c6.png" alt="" width="100%" />
          </div>
          <div>
            <h1 className="feature-title">{currentTranslations.sellSafely}</h1>
            <h3 className="feature-description">
              Lorem ipsum dolor sit amet, <br /> consetetur sadipscing elitr,
              sed
            </h3>
          </div>
        </div>

        <div className="feature-item">
          <div>
            <img src="pics/c1.png" alt="" width="100%" />
          </div>
          <div>
            <h1 className="feature-title">{currentTranslations.buyDirectly}</h1>
            <h3 className="feature-description">
              Lorem ipsum dolor sit amet, <br /> consetetur sadipscing elitr,
              sed
            </h3>
          </div>
        </div>

        <div className="feature-item">
          <div>
            <img src="pics/c2.png" alt="" width="100%" />
          </div>
          <div>
            <h1 className="feature-title">{currentTranslations.friendlyPlatform}</h1>
            <h3 className="feature-description">
              Lorem ipsum dolor sit amet, <br /> consetetur sadipscing elitr,
              sed
            </h3>
          </div>
        </div>
      </div>

      <div className="feature-section">
        <div className="feature-item">
          <div>
            <img src="pics/c3.png" alt="" width="100%" />
          </div>
          <div>
            <h1 className="feature-title">{currentTranslations.sellSafely}</h1>
            <h3 className="feature-description">
              Lorem ipsum dolor sit amet, <br /> consetetur sadipscing elitr,
              sed
            </h3>
          </div>
        </div>

        <div className="feature-item">
          <div>
            <img src="pics/c4.png" alt="" width="100%" />
          </div>
          <div>
            <h1 className="feature-title">{currentTranslations.support247}</h1>
            <h3 className="feature-description">
              Lorem ipsum dolor sit amet, <br /> consetetur sadipscing elitr,
              sed
            </h3>
          </div>
        </div>

        <div className="feature-item">
          <div>
            <img src="pics/c5.png" alt="" width="100%" />
          </div>
          <div>
            <h1 className="feature-title">{currentTranslations.verifiedUsers}</h1>
            <h3 className="feature-description">
              Lorem ipsum dolor sit amet, <br /> consetetur sadipscing elitr,
              sed
            </h3>
          </div>
        </div>
      </div>

      {/* Join Us Section */}
      <div>
        <h1 className="join-heading" dangerouslySetInnerHTML={{ __html: currentTranslations.joinUsTitle }}>
        </h1>
        <h3 className="join-subheading">{currentTranslations.joinUsSubtitle}</h3>
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
            <h1 className="step-title">{currentTranslations.createAccount}</h1>
            <h3 className="step-description" dangerouslySetInnerHTML={{ __html: currentTranslations.accountDesc }}>
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
            <h1 className="step-title">{currentTranslations.chooseProduct}</h1>
            <h3 className="step-description" dangerouslySetInnerHTML={{ __html: currentTranslations.productDesc }}>
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
            <h1 className="step-title">{currentTranslations.fillForm}</h1>
            <h3 className="step-description" dangerouslySetInnerHTML={{ __html: currentTranslations.formDesc }}>
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
            <h1 className="step-title">{currentTranslations.postAnnounce}</h1>
            <h3 className="step-description" dangerouslySetInnerHTML={{ __html: currentTranslations.postDesc }}>
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
  