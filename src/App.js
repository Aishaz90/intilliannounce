import './App.css';
import { Routes, Route, useLocation } from 'react-router-dom';
import HomePage from './pages/Home/Homepage';
import Listing from './pages/Listing/Listing';
import Nav from './Nav/Nav'
import Footer from './Nav/Footer';
import Multimedia from './pages/Multimedia/Multimedia';
import { useEffect } from 'react';
import Categories from './pages/Categories/Categories';
import Contact from './pages/Contact/Contact';
export default  function App() {
  const location = useLocation();
  useEffect(() => {
    console.log("Current Path:", location.pathname);
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
      {location.pathname !== '/' &&location.pathname !== '/listing'&&location.pathname !== '/categories'&&location.pathname !== '/contact'&& <Nav />}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/listing" element={<Listing/>} />
        <Route path="/multimedia" element={<Multimedia/>} /> 
        <Route path="/categories" element={<Categories/>} />
        <Route path="/contact" element={<Contact/>} />  
      </Routes>
      {location.pathname !== '/'&&location.pathname !== '/listing'&&location.pathname !== '/categories'&& location.pathname !== '/contact'&&<Footer/>}
    </div>
  );
}