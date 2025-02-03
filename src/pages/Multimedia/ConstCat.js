import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import './ConstCat.css';
import articles from '../../data/article.json';
import Cards from '../Listing/Cards';
import Nav from '../../Nav/Nav';
import Sidebar from '../Listing/Sidebar';
import Footer from '../../Nav/Footer';
export default function ConstCat() {
    const { category } = useParams(); // Get category from URL
    const [cards, setCards] = useState([]);

    useEffect(() => {
        if (category) {
            const filteredCards = articles.filter(article => article.categorie === category);
            setCards(filteredCards);
        }
    }, [category]);
  return (
    <div>
    <div id="Post">
        <img src="/pics/post1.png" alt="" className="img1" />
        <div className="blur">
            <Nav />
            <div className="title">
                <h1 id="h111">{category}</h1>
                <Link to="/" className="aaa">Home ---</Link>
                <Link to="/listing" className="aaa">ListingProduct ---</Link>
                <Link to={`/${category}`} className="aaa">{category}</Link>
            </div>
        </div>
    </div>
    <div id="mainn">
        <div className="cards-container">
            {cards.length > 0 ? (
                cards.map((card) => <Cards key={card.id} Carte={card} />)
            ) : (
                <p>No articles found in this category.</p>
            )}
        </div>
        <div id="side">
            <Sidebar />
            <div>
                <img src="/images/off.jpg" alt="" id="offers" />
            </div>
        </div>
    </div>
    <Footer />
</div>
  )
}
