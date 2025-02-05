import React from 'react';
import './Cards.css';  // Assuming you have a CSS file for styling
import { Link } from 'react-router-dom';

export default function Cards({ Carte }) {
    return (
        <div className='cardd'>
            <Link to={`/details/${Carte.id}`} id='lk'>
                <img src={Carte.image} alt={Carte.title} className='img' />
                <div className='crdBody'>
                <h5 id='h5'>{Carte.contenu}</h5>
                    <img src={Carte.imageH} alt="Icon" width="25px" style={{ position: "absolute", left: "87%", top: "52%" }} />
                    <img src={Carte.imageM} alt="Location" width="10%" height="8%" className="map" />
                    <span style={{ color: "#929292", position: "absolute", top: "78%", left: "15%" }} className='pos'>{Carte.location}</span>
                    <p className='date'>{Carte.date}</p>
                    <h4 id='h44'>{Carte.prix} DH</h4>
                </div>
            </Link>
        </div>
    );
}
