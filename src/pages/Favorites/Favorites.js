import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import './Favorites.css';
import Nav from '../../Nav/Nav';
import Cards from '../Listing/Cards'
import Footer from '../../Nav/Footer';
export default function Favorites() {
  const favorites = useSelector((state) => state.favorites);
  return (
    <div className="favorites-container">
        <div className='post'>
            <img src="pics/post1.png" alt="" className='img1' />
            <div className='blur'>
                <Nav />
                <div className="title">
                    <h1 id='h11'>Favorite Products</h1>
                    <Link to="/" className='aa'>Home ---</Link>
                    <Link to='/favorites' className='aa'>FavoriteProducts</Link>
                </div>
            </div>
        </div>
        <div  className="fav">
            <h2 style={{ color: '#020053', fontFamily: 'Abhaya Libre SemiBold',fontSize:'3rem', textAlign:'center',marginBottom:'5%',fontWeight:'2rem', }}>My Favorites Products</h2>
            {favorites.length === 0 ? (
                <p>No favorite items yet.</p>
            ) : (
                <div className="favorites-grid">
                {favorites.map((item) => (
                    
                    <Cards key={item.id} Carte={item} />
                ))}
                </div>
            )}
        </div>
    <Footer/> 
    </div>
  );
}
