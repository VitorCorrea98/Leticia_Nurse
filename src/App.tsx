// src/App.tsx
import React from 'react';
import {  Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Statistics from './pages/Statistics';

const App: React.FC = () => {
  return (
      <div className="min-h-screen bg-white">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/statistics" element={<Statistics />} />
        </Routes>
        <Footer />
      </div>
  );
};

export default App;