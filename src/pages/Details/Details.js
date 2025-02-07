import React, { useState,useEffect } from 'react';
import Nav from '../../Nav/Nav';
import { Link, useParams } from 'react-router-dom';
import Footer from '../../Nav/Footer';
import './Details.css'
import detailsData from '../../data/details.json'
export default function Details({ addToFavorites }) {
  const [favorites, setFavorites] = useState([]);
  const [product, setProduct] = useState(null);
  const { id } = useParams();

  // Toggle Favorite Function
  const toggleFavorite = (product) => {
    if (favorites.includes(product.id)) {
      setFavorites(favorites.filter((fav) => fav !== product.id));
    } else {
      setFavorites([...favorites, product.id]);
      addToFavorites(product);
    }
  };

  useEffect(() => {
    const foundProduct = detailsData.find((item) => item.id === parseInt(id));
    setProduct(foundProduct);
  }, [id]);

  if (!product) {
    return <div>Loading...</div>; // Or a 404 component
  }
  const ownerData = {
    name: "Savannah Nguyen",
    memberSince: "Member Since 2022",
    location: "1978 Jasper Avenue #22A",
    images: {
      owner: "/images/owner.png",
      map: "/images/Map2.png",
      phoneIcon: "/images/PhonePlus.png",
    },
  };
  const products = [
    {
      id: 9,
      image: "../images/canon2.jpg",
      title: "Canon EOS M50 2 camera",
      price: "2500DH",
      location: "Tanger",
      date: "25, juin, 2024",
    },
    {
      id: 7,
      image: "../images/JBL.png",
      title: "JBL Waterproof Bluetooth Speaker",
      price: "760DH",
      location: "Tanger",
      date: "25, juin, 2024",
    },
    {
      id: 12,
      image: "../images/PcAcer.jpg",
      title: "Acer Chromebook 311, 11.6\" HD",
      price: "3000DH",
      location: "Tanger",
      date: "25, juin, 2024",
    },
    {
      id: 5,
      image: "../images/drone.jpg",
      title: "The best Drone cameras",
      price: "3000DH",
      location: "Tanger",
      date: "25, juin, 2024",
    },
  ];
  
  

  return (
    <div> 
      <div className='post'>
        <img src={`${process.env.PUBLIC_URL}/pics/post1.png`} alt="" className='img1'/>
        <div className='blur'>
          <Nav />
          <div className="title">
            <h1 id='h11'>ProductDetails</h1>
            <Link to="/" className='aa'>Home</Link>
          </div>
        </div>
      </div>
      <div className="contai">
        <img src={product.img.src} height={500} alt={product.img.alt} id='caskP' />
        <div className="text">
          <span id='span' style={{ color: "#929292", fontFamily: "Abhaya Libre SemiBold",marginLeft: "55%" }}>
            {product.text.date}
          </span>
          <img src={product.text.views.src} alt="Views" style={{ marginLeft: "1%" }} />
          <span style={{ color: "#929292", fontFamily: "Abhaya Libre SemiBold",marginLeft: "1%" }}>
            {product.text.views.count}
          </span>
          <p id="descriptionn">{product.text.description}</p>
          <h2 id="price" style={{ color: "#020053", fontSize: "50px", fontWeight: "bold" }}>
            {product.text.price}
          </h2>
          <p style={{ color: "#929292", fontFamily: "Abhaya Libre SemiBold", marginLeft: "80%", marginTop: "-12%" }}>
          negotiable : {product.text.negotiable}
          </p>
        </div>

        <div id="divside"></div>
        <h4 id="Featuress" style={{ color: "#020053" }}>Features:</h4>
        <hr style={{ width: "90%", marginLeft: "3%" }} />
        <div>
          {product.features.map((feature, index) => (
            <button key={index} style={{
              width: "max-content", padding: "10px", borderRadius: "10px",
              backgroundColor: "#6a68d25a", color: "#020053", fontFamily: "Abhaya Libre SemiBold",
              border: "none", fontSize: "larger", fontWeight: "bold", margin: "2%"
            }}>
              {feature.label}: {feature.value}
            </button>
          ))}
        </div>

        <div id="divside"></div>
        <h4 id="Descriptionn" style={{ color: "#020053" }}>Description:</h4>
        <hr style={{ width: "90%", marginLeft: "3%" }} />
          <p id="lorem">{product.description}</p>
      </div>
     <div id="owner">
      <div id="divside"></div>
      <h4 style={{ color: "#020053" }} id="AdOwner">Ad Owner:</h4>
      
      <div id="photo" style={{ display: "flex", alignItems: "center" }}>
        <img src={ownerData.images.owner} alt="Owner" width="50px" />
        <div style={{ marginLeft: "5%" }}>
          <h5 style={{ color: "#020053", fontFamily: "Abhaya Libre SemiBold", fontWeight: "bold", marginTop: "7%" }}>
            {ownerData.name}
          </h5>
          <p style={{ color: "#574E4E" }}>{ownerData.memberSince}</p>
        </div>
      </div>

      <div id="location" style={{ display: "flex", alignItems: "center", marginTop: "10px" }}>
        <img src={ownerData.images.map} alt="Map" width="8%" height="30px" />
        <div style={{ color: "#574e4e95", marginLeft: "10px" }}>
          {ownerData.location} <br />
          {ownerData.location}
        </div>
      </div>

      <button
        style={{width: "max-content",padding: "10px",borderRadius: "10px",backgroundColor: "#FF4367",color: "#f5f2f2ea",fontFamily: "Abhaya Libre SemiBold",border: "none",margin: "5% 0% 0% 10%",display: "flex",alignItems: "center",}}>
        <img src={ownerData.images.phoneIcon} alt="Phone" style={{ marginRight: "5px" }} />
        Click to See Number
      </button>
    </div>
      <div id="contact">
          <div id="divside"></div>
          <h4 style={{ color: '#020053' }} id="AdOwner">Contact Seller :</h4>
          <div style={{ margin: '0% 0% 5% 10%' }}>
          <input
        type="text"
        className="form-control w-75"
        style={{
          backgroundColor: '#fff',
          border: 'solid 1.5px #020053',
          marginBottom: '3%',
        }}
        placeholder="Name"
      />
    <input
        type="text"
        className="form-control w-75"
        style={{
          backgroundColor: '#fff',
          border: 'solid 1.5px #020053',
          marginBottom: '3%',
        }}
        placeholder="Mail Address"
      />            
   <textarea
        placeholder="Type Message"
        className="form-control w-75"
        rows="4"
        style={{
          backgroundColor: '#fff',
          border: 'solid 1.5px #020053',
        }}
      ></textarea>            
      <button   style={{ width: 'max-content',padding: '10px',borderRadius: '10px',backgroundColor: '#FF4367',color: '#f5f2f2ea',fontFamily: 'Abhaya Libre, SemiBold',border: 'none',margin: '5% 0% 0% 20%'}}> <img src="../images/send.png" alt="" />Send To Seller</button>
          </div>
      </div>
      {/* <div id="action">
    <div id="divside"></div>
    <h4 style={{ color: '#020053' }} id="AdAction">Ad Action :</h4>
    <div style={{ display: 'flex', justifyContent: 'space-around' }}>
      <div>
        <img src="../images/share.png" alt="" style={{ cursor: 'pointer' }} />
        <p style={{ color: '#FF4367', fontFamily: 'Abhaya Libre SemiBold', fontWeight: 'bold' }}>Share</p>
      </div>
      <div>
        <img src="../images/save.png" alt="" style={{ cursor: 'pointer' }} />
        <p style={{ color: '#FF4367', fontFamily: 'Abhaya Libre SemiBold', fontWeight: 'bold' }}>Save</p>
      </div>
      <div>
        <img src="../images/favorite.png" alt="" style={{ cursor: 'pointer' }} />
        <p style={{ color: '#FF4367', fontFamily: 'Abhaya Libre SemiBold', fontWeight: 'bold' }}>Favourite</p>
      </div>
    </div>
  </div> */}

  <div id="review">
    <div id="divside"></div>
    <h4 id="Review">1 Review :</h4>
    <hr style={{ width: '90%', marginLeft: '3%' }} />
    <img src="../images/stars.png" alt="" id="stars2" />
    <div id="photoRev">
      <img src="../images/review.png" alt="" />
      <div style={{ margin: '3% 0% 0% 4%' }}>
        <span style={{ color: '#020053', fontFamily: 'Abhaya Libre SemiBold', fontWeight: 'bold', fontSize: 'larger' }}>Jane Cooper</span><br />
        <span style={{ color: '#574E4E' }}>Sep 4, 2021 at 12:14 am</span>
      </div>
    </div>
    <p id="lorem">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore.</p>
  </div>
  <div id="related">
    <div className="rr">
    <div id="divsidee"></div>
      <h4 id="Related">Related Ads :</h4>
      <Link
        to="/listing"
        id='va'
        style={{
          textDecoration: 'none',
          padding: '10px',
          borderRadius: '10px',
          backgroundColor: '#FF4367',
          color: '#f5f2f2ea',
          fontFamily: 'Abhaya Libre SemiBold',
          position:'absolute',
          left:'85%',
          top:'256%',
        }}
      >
        View All Ads
      </Link>
    </div>
      <hr id='hr' />
      <div id='idn'>
        {products.map((product) => (
          <div key={product.id} id={`cart${product.id}`}>
            <img src={product.image} alt={product.title} id="imgCat" />
            <h5 id="h5">{product.title}</h5>
            <img
            src={favorites.includes(product.id) ? "../images/Favorite.png" : "../images/Heart.png"}
            alt="Heart"
              width="25px"
              style={{ position: 'absolute', left: '87%', top: '56%' }}
              onClick={() => toggleFavorite(product)}
            />
            <img
              src="../images/MapPinLine.png"
              alt="Map Pin"
              width="13%"
              height="10%"
              id="map"
            />
            <span
              style={{
                color: '#929292',
                position: 'absolute',
                top: '76%',
                left: '13%',
              }}
            >
              {product.location}
            </span>
            <p
              style={{
                color: '#BBB3B3',
                float: 'right',
                padding: '5%',
                marginTop: '11%',
              }}
            >
              {product.date}
            </p>
            <h4 id="prixCat">{product.price}</h4>
          </div>
        ))}
      </div>
    </div>
    
  <Footer/>
      
    </div>
  );
}

