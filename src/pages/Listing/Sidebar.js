import React from 'react'
import './Sidebar.css';
import { Link } from 'react-router-dom';
import '../Multimedia/Multimedia'

export default function Sidebar() {
    const categories=[{ name: "Multimedia", imgSrc: "images/iconLap.png", link: "/multimedia"},
        { name: "Household Applicants", imgSrc: "images/houseHold.png", link: "#" },
        { name: "Sport", imgSrc: "images/Sport.png", link: "#" },
        { name: "Pets", imgSrc: "images/Pets.png", link: "#" },
        { name: "Home And Garden", imgSrc: "images/Home.png", link: "#" },
        { name: "Clothes", imgSrc: "images/Clothes.png", link: "#" },
        { name: "Work And Study", imgSrc: "images/Work.png", link: "#" },
        { name: "Vehicles", imgSrc: "images/Vehicules.png", link: "#" }]
  return (
    <div className="navSide">
        
            {categories.map((category,index)=>(
                <div key={index} className="cate-Item">
               <Link to={category.link}>
                        <img src={category.imgSrc} alt={category.name} className="icon" />
                        <span className="text">{category.name}</span>
                </Link>
            </div>
            ))}
        

      
    </div>
  )
}
