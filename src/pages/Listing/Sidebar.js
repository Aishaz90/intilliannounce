import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Sidebar.css';

export default function Sidebar() {
  const navigate = useNavigate();

  const categories = [
    { name: "Multimedia", imgSrc: "images/iconLap.png", link: "/Multimedia" },
    { name: "Household Appliances", imgSrc: "images/houseHold.png", link: "/Household Appliances" },
    { name: "Sport", imgSrc: "images/Sport.png", link: "/Sport" },
    { name: "Pets", imgSrc: "images/Pets.png", link: "/Pets" },
    { name: "Home And Garden", imgSrc: "images/Home.png", link: "/Home And Garden" },
    { name: "Clothes", imgSrc: "images/Clothes.png", link: "/Clothes" },
    { name: "Work And Study", imgSrc: "images/Work.png", link: "/Work And Study" },
    { name: "Vehicles", imgSrc: "images/Vehicules.png", link: "/Vehicles" }
  ];

  const handleCategoryClick = (category) => {
    navigate(category.link);
  };

  return (
    <div className="navSide">
      {categories.map((category, index) => (
        <div key={index} className="cate-Item" onClick={() => handleCategoryClick(category)}>
          <img src={category.imgSrc} alt={category.name} className="icon" />
          <span className="text">{category.name}</span>
        </div>
      ))}
    </div>
  );
}
