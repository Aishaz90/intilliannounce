import React, { useState, useEffect } from 'react';
import './Listing.css';
import axios from "axios";
import Cards from './Cards';  // Assuming you have a Cards component
import Sidebar from './Sidebar';  // Assuming you have a Sidebar component
import Footer from '../../Nav/Footer';  // Assuming you have a Footer component

export default function Listing() {
    const [cards, setCards] = useState([]); // Initialize as an empty array

    useEffect(() => {
        const fetchArticles = async () => {
            try {
                const response = await axios.get("http://127.0.0.1:8000/api/articles");
                const filteredCards = response.data.filter(article => article.id <= 12); // Filter by id
                setCards(filteredCards);
                // setCards(response.data); // Update state with API response
            } catch (error) {
                console.error("Error fetching articles:", error);
            }
        };
        fetchArticles();
    }, []);

    return (
        <div>
            <div className='post'>
                <img src="./images/photoHome.png" alt="" className='img1'/>
                <div className='blur'>
                    <div className="title">
                        <h1 id='h11'>ListingProduct</h1>
                        <a href="index.html" className='aa'>Home</a> ---
                        <a href="listing.html" className='aa'>ListingProduct</a>
                    </div>
                </div>

            
            </div>
            <Sidebar/>
            <div>
                <img src="./images/off.jpg" alt="" id="offer"/>
            </div>
            <div className="cards-container">
                    {cards.map((card) => (
                        <Cards key={card.id} Carte={card} />
                    ))}
            </div>
     
        </div>
    );
}

