import React, { useState } from 'react';
import './Cards.css';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addToFavorites, removeFromFavorites } from '../../favoritesSlice';

export default function Cards({ Carte }) {
  const dispatch = useDispatch();
  const favorites = useSelector((state) => state.favorites);
  const isFavorite = favorites.some(item => item.id === Carte.id);

  const handleFavoriteClick = (e) => {
    e.preventDefault();
    e.stopPropagation(); // Prevents the parent link from triggering
    if (isFavorite) {
      dispatch(removeFromFavorites(Carte));
    } else {
      dispatch(addToFavorites(Carte));
    }
  };
  

  return (
    <div className='cardd'>
      <Link to={`/details/${Carte.id}`} id='lk'>
        <img src={Carte.image} alt={Carte.title} className='img' />
        <div className='crdBody'>
          <h5 id='h5'>{Carte.contenu}</h5>
          <img 
            src={isFavorite ? '/pics/heart2.png' : Carte.imageH} 
            alt="Favorite" 
            width="25px" 
            style={{ position: "absolute", left: "87%", top: "52%", cursor: 'pointer' }} 
            onClick={handleFavoriteClick} 
          />
          <img src={Carte.imageM} alt="Location" width="10%" height="8%" className="map" />
          <span style={{ color: "#929292", position: "absolute", top: "78%", left: "15%" }} className='pos'>{Carte.location}</span>
          <p className='date'>{Carte.date}</p>
          <h4 id='h44'>{Carte.prix} DH</h4>
        </div>
      </Link>
    </div>
  );
}
