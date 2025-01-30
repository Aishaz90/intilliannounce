import './App.css';
import { Routes, Route, useLocation } from 'react-router-dom';
import HomePage from './pages/Home/Homepage';
import Nav from './Nav/Nav'
import Footer from './Nav/Footer';
function App() {
  const location = useLocation(); 
  return (
    <div className="App">
      {location.pathname !== '/' && <Nav />}
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
      {location.pathname !== '/' && <Footer/>}
      
    </div>
  );
}

export default App;
