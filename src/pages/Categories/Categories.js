import React from 'react';
import Nav from '../../Nav/Nav';
import Footer from '../../Nav/Footer';
import { Link,useNavigate } from 'react-router-dom';
import "./Categories.css";
export default function Categories() {
  const categories = [
    {
      name: "Multimedia",
      image: "pics/cat1.png",
      link: "/Multimedia",
      productCount: 10
    },
    {
      name: "Household Appliances",
      image: "pics/cat2.png",
      link: "/Household Appliances",
      productCount: 1
    },
    {
      name: "Sport",
      image: "pics/cat3.png",
      link: "/Sport",
      productCount: 1
    },
    {
      name: "Pets",
      image: "pics/cat4.png",
      link: "/Pets",
      productCount: 2
    },
    {
      name: "Home And Garden",
      image: "pics/cat5.png",
      link: "/Home And Garden",
      productCount: 2
    },
    {
      name: "Clothes",
      image: "pics/cat6.png",
      link: "/Clothes",
      productCount: 2
    },
    {
      name: "Work And Study",
      image: "pics/cat7.png",
      link: "/Work And Study",
      productCount: 1
    },
    {
      name: "Vehicles",
      image: "pics/cat8.png",
      link: "/Vehicles",
      productCount: 2
    }
  ];

  const navigate = useNavigate();
  const handleCategoryClick = (category) => {
    navigate(category.link);
  };
  return (
    <div>
      <div className='post'>
        <img src="pics/post1.png" alt="" className='img1' />
        <div className='blur'>
          <Nav />
          <div className="title">
            <h1 id='h11'>All Categories</h1>
            <Link to="/" className='aa'>Home ---</Link> 
            <Link to='/categories' className='aa'>All Categories</Link>
          </div>
        </div>
      </div>
      
      <div id="containere">
        {categories.map((category, index) => (
          <div className="cats" key={index}>
            <div id="titre" onClick={() => handleCategoryClick(category)}>
              <img src={category.image} alt={category.name} id='pi'/>
              <Link 
                to={category.link} 
                style={{
                  color: "#020053",
                  fontSize: "2rem",
                  fontFamily: "Abhaya Libre SemiBold",
                  marginLeft: "2%",
                  marginTop: "1%",
                  textDecoration:"none",
                }}
              >
                {category.name}
              </Link>
              <Link to="#" className="souscat">{category.productCount} Ads</Link>
            </div>
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
}
