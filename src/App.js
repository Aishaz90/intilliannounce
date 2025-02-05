import './App.css';
import { Routes, Route, useLocation } from 'react-router-dom';
import HomePage from './pages/Home/Homepage';
import Listing from './pages/Listing/Listing';
import Nav from './Nav/Nav'
import Footer from './Nav/Footer';
// import Multimedia from './pages/Multimedia/Multimedia';
import { useEffect } from 'react';
import Categories from './pages/Categories/Categories';
import Contact from './pages/Contact/Contact';
import Login from './pages/Login/Login';
import Signup from './pages/Signup/Signup';
import Adminlogin from './pages/Adminligin/Adminlogin';
import ConstCat from './pages/Multimedia/ConstCat';
import Details from './pages/Details/Details';
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
      {/* {location.pathname !== '/' &&location.pathname !== '/listing'&&location.pathname !== '/categories'&&location.pathname !== '/contact'&&location.pathname !== '/login'&&location.pathname !== '/signup'&& <Nav />} */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/listing" element={<Listing/>} />
        {/* <Route path="/multimedia" element={<Multimedia/>} />  */}
        <Route path="/:category" element={<ConstCat/>} />
        <Route path="/categories" element={<Categories/>} />
        <Route path="/contact" element={<Contact/>} /> 
        <Route path="/login" element={<Login/>} />
        <Route path="/signup" element={<Signup/>} />  
        <Route path="/adminlogin" element={<Adminlogin/>} /> 
        <Route path="/details/:id" element={<Details />} />
      </Routes>
      {/* {location.pathname !== '/'&&location.pathname !== '/listing'&&location.pathname !== '/categories'&& location.pathname !== '/contact'&&location.pathname !== '/login'&&location.pathname !== '/signup'&&<Footer/>} */}
    </div>
  );
}