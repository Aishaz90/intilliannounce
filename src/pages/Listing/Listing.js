import React, { useState, useEffect } from 'react';
import './Listing.css';
import Cards from './Cards'; // Assuming you have a Cards component
import Sidebar from './Sidebar'; // Assuming you have a Sidebar component
import Nav from '../../Nav/Nav';
import Footer from '../../Nav/Footer';
import { Link } from 'react-router-dom';
import articles from '../../data/article.json'; // Adjust path as needed
import { useSearchParams,useLocation  } from 'react-router-dom';

export default function Listing() {
    const [searchParams] = useSearchParams();
    const cityParam = searchParams.get('city');
    const categoryParam = searchParams.get('category');
    const [cards, setCards] = useState([]);
    const [searchAttempted, setSearchAttempted] = useState(false);
    const location = useLocation();
    useEffect(() => {
        const params = new URLSearchParams(location.search);
        setSearchAttempted(params.toString().length > 0);    
        let filtered = articles;
        // City filter
        if (cityParam) {
            filtered = filtered.filter(article =>
                article.location.toLowerCase() === cityParam.toLowerCase()
            );
        }
        if (categoryParam) {
            const categories = [
                "Multimedia", "Household Appliances", "Sport", "Pets",
                "Home And Garden", "Clothes", "Work And Study", "Vehicles"
            ];

            filtered = filtered.filter(article =>
                categories.includes(article.categorie) && article.categorie === categoryParam
            );
        }
        setCards(filtered);
    }, [cityParam, categoryParam]);

    return (
        <div>
            <div className='post'>
                <img src="pics/post1.png" alt="" className='img1' />
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
                {searchAttempted && cards.length === 0 && (
                    <span style={{ color: '#E31616',fontSize:'1.5rem',marginTop:'5%',fontWeight:'900',}}>No results found for your search !!!</span>
                )}
                    {cards.map(card => (
                        <Cards key={card.id} Carte={card} />
                    ))}
                </div>
                <div id='side'>
                    <Sidebar />
                    <img src="./images/off.jpg" alt="" id="offers" />
                </div>
            </div>
            <Footer />
        </div>
    );
}
