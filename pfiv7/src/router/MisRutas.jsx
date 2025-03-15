// eslint-disable-next-line no-unused-vars
import React from 'react';
import { BrowserRouter, Routes, Route, useParams } from 'react-router-dom';
import Index from '../components/Index';
import Aboutme from '../components/Aboutme';
import Curriculum from '../components/Curriculum';
import Portafolio from '../components/Portafolio';
import Reseñas from '../components/Reseñas';
import Contacto from '../components/Contacto';
import Navbar from './Navbar';
import Footer from './Footer';
import Reproductor from '../components/Reproductor';
import aixaLanding from '../assets/videos/aixa-landing.mp4';
import aixaEcommerce from '../assets/videos/aixa-ecommerce.mp4';
import aixaGestion from '../assets/videos/aixa-gestion.mp4';

const videoData = {
  1: { 
    src: aixaLanding, 
    title: 'Aixa Energia - Landing Page',
    description: 'Esta Landing Page se realizó para la empresa Aixa Energía, la cual se dedica a la venta de paneles solares y servicios de energía renovable. La página está diseñada para que los clientes conozcan la empresa, sus servicios y también se brinda información importante para estar al tanto del entorno y la energía renovable. Tiene dos llamados a la acción que interactúan con el Ecommerce y también con el formulario de contacto. Actualmente está creada con Django, HTML y CSS. En un futuro, si el proyecto sigue en pie, se cambiará a React. En este video podrán ver una demostración de la página, viendo todas las áreas que la componen.'
  },
  2: { 
    src: aixaEcommerce, 
    title: 'Aixa Energia - Ecommerce',
    description: 'Este Ecommerce se desarrolló para la empresa Aixa Energía como complemento de la Landing Page. Permite a los usuarios ver el catálogo de productos, agregarlos al carrito y realizar compras online. Cuenta con sistema de autenticación, perfil de usuario, historial de compras y panel de administración. Desarrollado con Django, utiliza PayPal como gateway de pagos. Cuenta con verificacion de cuenta por Email, recuperacion de contraseña, y un panel de administracion para el administrador del sitio. En este video podrán ver una demostración del Ecommerce, viendo todas las áreas que lo componen.'
  },
  3: { 
    src: aixaGestion, 
    title: 'Aixa Energia - Sistema de Gestion',
    description: 'Este Sistema de Gestión se desarrolló para la empresa Aixa Energía como complemento de la Landing Page y el Ecommerce. Permite a los funcionarios de la empresa administrar los productos, las ventas, los clientes y los pedidos. Cuenta con sistema de autenticación, panel de administración, historial de ventas y reportes. Desarrollado con Django. Cuenta con todo lo necesario para la Administracion tanto del local como de la pagina Ecommerce, ya que comparten el mismo stock y funciona en tiempo real. En este video podrán ver una demostración del Sistema de Gestion, viendo todas las áreas que lo componen.'
  },
};

const VideoPlayerWrapper = () => {
  const { id } = useParams();
  const video = videoData[id];
  return <Reproductor videoSrc={video.src} title={video.title} description={video.description} />;
};


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
        <Route path="/video/:id" element={<VideoPlayerWrapper />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
};

export default MisRutas;