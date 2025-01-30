
import './App.css';
import { Routes, Route, useLocation } from 'react-router-dom';
import HomePage from './pages/Home/Homepage';
import Listing from './pages/Listing/Listing';
import Nav from './Nav/Nav'
import Footer from './Nav/Footer';
import Multimedia from './pages/Multimedia/Multimedia';
export default  function App() {
  const location = useLocation(); 
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

