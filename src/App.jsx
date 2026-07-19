import React from 'react';
import './App.css';
import './styles/global.css';
import Layout from './components/Layout';
import Home from './pages/Home';
import ServicesProducts from './pages/ServicesProducts';
import About from './pages/About';
import Contact from './pages/Contact';
import PrivacyPolicy from './pages/PrivacyPolicy';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router basename="/nutricionista-fabiano">
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sobre" element={<About />} />
          <Route path="/servicos-produtos" element={<ServicesProducts />} />
          <Route path="/contato" element={<Contact />} />
          <Route path="/privacidade" element={<PrivacyPolicy />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;