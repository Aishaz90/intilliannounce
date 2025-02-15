import "./App.css";
import { Routes, Route, useLocation, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import HomePage from "./pages/Home/Homepage";
import Listing from "./pages/Listing/Listing";
import Nav from "./Nav/Nav";
import Footer from "./Nav/Footer";
import Categories from "./pages/Categories/Categories";
import Contact from "./pages/Contact/Contact";
import Login from "./pages/Login/Login";
import Signup from "./pages/Signup/Signup";
import Adminlogin from "./pages/Adminligin/Adminlogin";
import ConstCat from "./pages/Multimedia/ConstCat";
import Details from "./pages/Details/Details";
import Favorites from "./pages/Favorites/Favorites";
import SettingsSidebar from "./pages/SettingsSidebar/SettingsSidebar";
import Postad from "./pages/Postad/Postad";
import YourAds from "./pages/YourAds/YourAds";
import Sidebar from "./components/common/Sidebar";
import OverviewPage from "./pages/OverviewPage";
import ProductsPage from "./pages/ProductsPage";
import UsersPage from "./pages/UsersPage";
import SalesPage from "./pages/SalesPage";
import OrdersPage from "./pages/OrdersPage";
import AnalyticsPage from "./pages/AnalyticsPage";
import SettingsPage from "./pages/SettingsPage";
export default function App() {
  const location = useLocation();
  const { token } = useSelector((state) => state.auth);
  useEffect(() => {
    const tailwindCDN = "https://cdn.tailwindcss.com";
    const currentPath = location.pathname;
    if (currentPath.startsWith("/admin-dashboard")) {
      // document.body.classList.add("admin-body");
        if (!document.querySelector(`script[src="${tailwindCDN}"]`)) {
        const script = document.createElement("script");
        script.src = tailwindCDN;
        script.async = true;
        script.onload = () => {
          document.body.classList.toggle("force-reload");
          setTimeout(() => document.body.classList.toggle("force-reload"), 100);
        };
        document.head.appendChild(script);
      }
    } else {
      const script = document.querySelector(`script[src="${tailwindCDN}"]`);
      if (script) {
        script.remove();
      }
      // document.body.classList.remove("admin-body");
    }
    return () => {
      const script = document.querySelector(`script[src="${tailwindCDN}"]`);
      if (script) {
        script.remove();
      }
      document.body.classList.remove("admin-body");
  
      // Check if the script was added and remove it
      
    };
  }, [location]);
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/listing" element={<Listing />} />
        <Route path="/:category" element={<ConstCat />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/adminlogin" element={<Adminlogin />} />
        <Route path="/details/:id" element={<Details />} />
        <Route path="/favorites" element={token ? <Favorites /> : <Navigate to="/login" />} />
        <Route path="/post-ad" element={<Postad />} />
        <Route path="/post-ad/:id" element={<Postad />} />
        <Route path="/your-ads" element={<YourAds />} />

        {/* Admin Dashboard */}
        <Route
          path="/admin-dashboard/*"
          element={
            <div className="flex h-screen text-gray-100 overflow-hidden"  style={{
              background: 'radial-gradient(circle, rgba(2,0,83,0.63) 37%, rgba(204,46,72,0.63) 100%)',
            }}>
              <div className="fixed inset-0 z-0">
                <div className="absolute inset-0 bg-gradient-to-br from-gray-900 opacity-80" />
                <div className="absolute inset-0 backdrop-blur-sm" />
              </div>
              <Sidebar />
              <Routes>
                <Route path="/" element={<OverviewPage />} />
                <Route path="products" element={<ProductsPage />} />
                <Route path="users" element={<UsersPage />} />
                <Route path="sales" element={<SalesPage />} />
                <Route path="orders" element={<OrdersPage />} />
                <Route path="analytics" element={<AnalyticsPage />} />
                <Route path="settings" element={<SettingsPage />} />
              </Routes>
            </div>
          }
        />
      </Routes>
      <SettingsSidebar />
    </div>
  );
}
