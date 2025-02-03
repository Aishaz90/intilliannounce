import React, { useState, useEffect } from 'react';
import './Listing.css';
// import axios from "axios";
import Cards from './Cards';  // Assuming you have a Cards component
import Sidebar from './Sidebar';  // Assuming you have a Sidebar component
import Nav from '../../Nav/Nav';
import Footer from '../../Nav/Footer';
import { Link } from 'react-router-dom';
import articles from '../../data/article.json'; // Adjust path as needed
export default function Listing() {
    const [cards, setCards] = useState([]);
    useEffect(() => {
        // Use local JSON data instead of API call
        const filteredCards = articles.filter(article => article.id);
        setCards(filteredCards);
    }, []);
    return (
        <div>
            <div className='post'>
                <img src="pics/post1.png" alt="" className='img1'/>
                <div className='blur'>
                    <Nav />
                    <div className="title">
                        <h1 id='h11'>ListingProduct</h1>
                        <Link to="/" className='aa'>Home ---</Link>
                        <Link to='/listing' className='aa'>ListingProduct</Link>
                    </div>
                </div>
            </div>
            <div id='main'>
                <div className="cards-container">
                    {cards.map((card) => (
                        <Cards key={card.id} Carte={card} />
                    ))}
                </div>
                <div id='side'>
                    <Sidebar/>
                    <img src="./images/off.jpg" alt="" id="offers"/>
                </div>
            </div>
            <Footer/>
        </div>
    );
}

