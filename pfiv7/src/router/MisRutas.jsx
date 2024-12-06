// eslint-disable-next-line no-unused-vars
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Index from '../components/Index';
import Aboutme from '../components/Aboutme';
import Curriculum from '../components/Curriculum';
import Portafolio from '../components/Portafolio';
import Reseñas from '../components/Reseñas';
import Contacto from '../components/Contacto';
import Navbar from './Navbar';
import Footer from './Footer';

const MisRutas = () => {
  return (
    <BrowserRouter>
    <Navbar />

      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/inicio" element={<Index />} />
        <Route path="/aboutme" element={<Aboutme />} />
        <Route path="/curriculum" element={<Curriculum />} />
        <Route path="/portafolio" element={<Portafolio />} />
        <Route path="/reseñas" element={<Reseñas />} />
        <Route path="/contacto" element={<Contacto />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
};

export default MisRutas;