
import './App.css';
import { Routes, Route, useLocation } from 'react-router-dom';
import HomePage from './pages/Home/Homepage';
import Listing from './pages/Listing/Listing';
import Nav from './Nav/Nav'
import Footer from './Nav/Footer';
import Multimedia from './pages/Multimedia/Multimedia';
import { useEffect } from 'react';
export default  function App() {
  const location = useLocation();
  useEffect(() => {
    console.log("Current Path:", location.pathname); // Debugging line
  
    if (location.pathname === "/listing") {
      document.body.classList.add("listing-body");
      document.body.classList.remove("home-body");
    } 
    else {
      document.body.classList.add("home-body");
      document.body.classList.remove("listing-body");
    }
  }, [location]);
  return (
    <div className="App">
      {location.pathname !== '/' && <Nav />}
      <Routes>
        <Route path="/" element={<HomePage />} />
         <Route path="/listing" element={<Listing/>} />
       {/* <Route path="/multimedia" element={<Multimedia/>} />  */}

      </Routes>
      {location.pathname !== '/'&&<Footer/>}
      
    </div>
  );
}

