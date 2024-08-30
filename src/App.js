import React, { useState, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Technologies from './pages/Technologies';
import Product from './pages/Product';
import About from './pages/About';
import Contact from './pages/Contact';
import HomePage from './pages/HomePage';
import Services from './pages/Services';
import Loader from './components/Loader';
import Footer from './components/Footer';
import AllServices from './pages/AllServices';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CareerPage from './pages/Career';
import PortfolioPage from './pages/PortFolio';

const App = () => {
  const [loading, setLoading] = useState(false);
  const location = useLocation();

  useEffect(() => {
    // Show the loader
    setLoading(true);

    // Set a timeout to hide the loader after 2 seconds
    const timer = setTimeout(() => {
      setLoading(false);
      // Scroll to the top of the page
      window.scrollTo(0, 0);
    }, 2000);

    return () => clearTimeout(timer);
  }, [location]);

  return (
    <div className='max-w-full bg-gray-100'>
      <Navbar />
      {loading && <Loader />}
      <div className='mt-[17.5%] md:mt-[10.5%] lg:mt-[8.2%] xl:mt-[6%] p-2'>
      <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/technologies" element={<Technologies />} />
            <Route path="/product" element={<Product />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/career" element={<CareerPage />} />
            <Route path="/portfolio" element={<PortfolioPage />} />
            <Route path="/services" element={<AllServices />} />
            <Route path="/services/:service" element={<Services />} />
            </Routes>
      </div>
      <Footer/>
    </div>
  );
};

export default App;
