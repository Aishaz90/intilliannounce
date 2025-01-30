import React from 'react';
import Nav from '../../Nav/Nav';
import Footer from '../../Nav/Footer';
import { Link } from 'react-router-dom';
import "./Categories.css";

const categories = [
    {
      name: "MultiMedia",
      image: "pics/pc 1.png",
      link: "/multimedia",
      subcategories: [
        ["Phones", "Personal computer", "Tablet", "Smartphones"],
        ["Laptop", "Phone Accessories", "Headphones", "Tablet Parts"],
        ["Phones", "Personal computer", "Tablet", "Smartphones"],
        ["Phones", "Personal computer", "Tablet", "Smartphones"]
      ]
    },
    {
      name: "Household Appliances",
      image: "pics/image 7.png",
      link: "/multimedia",
      subcategories: [
        ["Refrigerators", "Microwaves", "Dishwashers", "Cooktops"],
        ["Dryers", "Toasters & Toaster Ovens", "Blenders & Mixers", "Air Fryers"],
        ["Upright Vacuums", "Robot Vacuums", "Carpet Cleaners"]
      ]
    },
    {
      name: "Sport",
      image: "pics/image 2.png",
      link: "/multimedia",
      subcategories: [
        ["Sport clothes", "Dumbbell set", "Treadmill", "Traction bar"],
        ["Protein", "Cotton", "Leather", "Shoes"],
        ["Football (Soccer)", "Apparel (Jerseys, Shorts, etc.)", "Rackets, Bats, & Sticks", "Sports Accessories"]
      ]
    },
    {
      name: "Pets",
      image: "pics/image 5.png",
      link: "/multimedia",
      subcategories: [
        ["Dogs", "Cats", "Birds", "Fish"],
        ["Beds & Blankets", "Crates & Carriers", "Litter & Waste Management", "Training Tools"],
        ["Clothing & Costumes", "Pet Technology", "Toys & Enrichment"]
      ]
    },
    {
      name: "Home And Garden",
      image: "pics/image 6.png",
      link: "/multimedia",
      subcategories: [
        ["Home", "Villa", "Studio", "Apartment"],
        ["Cottage", "Duplex", "Leather", "Plants & Flowers"],
        ["Gardening Tools & Supplies", "Pots & Planters", "Soil & Fertilizers"]
      ]
    },
    {
      name: "Clothes",
      image: "pics/image 4.png",
      link: "/multimedia",
      subcategories: [
        ["Women's Clothing", "Men's Clothing", "Kids Clothing"],
        ["Shoes", "Cotton", "Caftan"],
        ["Leather", "Accessories"]
      ]
    },
    {
      name: "Work And Study",
      image: "pics/image 3.png",
      link: "/multimedia",
      subcategories: [
        ["Notebooks", "Bags", "Marker"],
        ["Pencils", "Office", "Backpacks"],
        ["Files"]
      ]
    },
    {
      name: "Vehicles",
      image: "pics/image 1.png",
      link: "/multimedia",
      subcategories: [
        ["Cars", "Bicycles", "Trucks", "Buses"],
        ["Air Bike", "Mobility Scooters", "Motorcycles"],
        ["Van", "Electric Scooter"]
      ]
    }
  ];
  
export default function Categories() {
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
            <div id="titre">
              <img src={category.image} alt={category.name} />
              <Link 
                to={category.link} 
                style={{
                  color: "#020053",
                  fontSize: "40px",
                  fontFamily: "Abhaya Libre SemiBold",
                  marginLeft: "2%",
                  marginTop: "1%",
                  textDecoration:"none",
                }}
              >
                {category.name}
              </Link>
            </div>
            <div id="links" style={{ display: "flex" }}>
              {category.subcategories.map((subList, subIndex) => (
                <ul key={subIndex} style={{ listStyle: "none", marginLeft: "55px" }}>
                  {subList.map((sub, subItemIndex) => (
                    <li key={subItemIndex}>
                      <Link to="#" className="souscat">{sub}</Link>
                    </li>
                  ))}
                </ul>
              ))}
            </div>
          </div>
        ))}
      </div>

      <Footer />
    </div>
  );
}
