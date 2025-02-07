import React,{useEffect} from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { logoutUser } from '../authActions';
import './Nav.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

export default function Nav() {
  const dispatch = useDispatch();
  const { token, adminToken } = useSelector((state) => state.auth);
  const navigate = useNavigate();

  // Combine both authentication states
  const isAuthenticated = token || adminToken;

  const handleLogout = () => {
    dispatch(logoutUser());
    navigate('/');
  };

  const handlePostAdClick = (e) => {
    if (!token) {
      e.preventDefault();
      navigate('/login');
    }
  };
  useEffect(() => {
    const protectedRoutes = ['/favorites', '/post-ad']; // ✅ Protect only these routes
    if (!isAuthenticated && protectedRoutes.includes(window.location.pathname)) {
      navigate('/login'); // ✅ Redirect only for protected pages
    }
  }, [isAuthenticated, navigate]);  
  return (
    <nav className="navbar navbar-expand-sm">
      <div className="container-fluid" style={{ paddingInlineStart: "10px" }}>
        <Link className="navbar-brand" to="/">
          <img src={`${process.env.PUBLIC_URL}/pics/logoo.png`} alt="Logo" />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapsibleNavbar"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="collapsibleNavbar" style={{paddingInlineStart:"50px"}}>
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" style={{ color: "#F8E8DA", width: "max-content", fontSize: "22px" }} to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" style={{ color: "#F8E8DA", width: "max-content", fontSize: "22px" }} to="/categories">Categories</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" style={{ color: "#F8E8DA", width: "max-content", fontSize: "22px" }} to="/listing">Listing Ads</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" style={{ color: "#F8E8DA", width: "max-content", fontSize: "22px" }} to="/contact">Contact Us</Link>
            </li>
            {isAuthenticated ? (
              <>
              <li className="nav-item">
                <button 
                  onClick={handleLogout}
                  className="nav-link" 
                  style={{ 
                    color: "#F8E8DA", 
                    width: "max-content", 
                    fontSize: "22px",
                    background: 'none',
                    border: 'none',
                    cursor: 'pointer'
                  }}
                >
                  Logout
                </button>
              </li>
              <li className="nav-item">
                <Link className="nav-link" style={{ color: "#F8E8DA", width: "max-content", fontSize: "22px" }} to="/favorites">Favorites <img src="pics/heart.png" width={30} alt="" /></Link>
              </li>
              </>
            ) : (
              <>
                <li className="nav-item">
                  <Link className="nav-link" style={{ color: "#F8E8DA", width: "max-content", fontSize: "22px" }} to="/login">Login</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" style={{ color: "#F8E8DA", width: "max-content", fontSize: "22px" }} to="/signup">Sign up</Link>
                </li>
              </>
            )}
            <li className="nav-item">
              <Link 
                className="nav-link" 
                id="b11" 
                style={{ color: "#F8E8DA", width: "80%", fontSize: "22px" }} 
                to="/post-ad"
                onClick={handlePostAdClick}
              >
                Post Ads
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}