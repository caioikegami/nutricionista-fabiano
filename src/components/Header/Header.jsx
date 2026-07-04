import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  const isCurrentPage = (path) => {
    return window.location.pathname === path;
  };

  const isProductActive = () => {
    return location.pathname === '/servicos-produtos' && location.hash === '#produtos';
  };

  const handleProductsClick = (e) => {
    if (location.pathname === '/servicos-produtos') {
      e.preventDefault();
      const element = document.getElementById('produtos');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
    closeMobileMenu();
  };

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <nav className="nav-container container">
        <Link to="/" className="logo" onClick={closeMobileMenu}>
          <img 
            src="/logovittacore.png" 
            alt="VittaCore Logo"
            className="logo-image"
          />
        </Link>

        <button
          className={`menu-toggle ${mobileMenuOpen ? 'active' : ''}`}
          onClick={toggleMobileMenu}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <div className={`nav-menu ${mobileMenuOpen ? 'active' : ''}`}>
          <nav className="nav-links">
            <Link
              to="/"
              className={isCurrentPage('/') ? 'active' : ''}
              onClick={closeMobileMenu}
            >
              Início
            </Link>
            <Link
              to="/sobre"
              className={isCurrentPage('/sobre') ? 'active' : ''}
              onClick={closeMobileMenu}
            >
              Sobre
            </Link>
            <Link
              to="/servicos-produtos"
              className={isCurrentPage('/servicos-produtos') ? 'active' : ''}
              onClick={closeMobileMenu}
            >
              Serviços
            </Link>
            <Link
              to="/servicos-produtos#produtos"
              onClick={closeMobileMenu}
            >
              Produtos
            </Link>
            <Link
              to="/contato"
              className={isCurrentPage('/contato') ? 'active' : ''}
              onClick={closeMobileMenu}
            >
              Contato
            </Link>
          </nav>
          <a 
            href="https://wa.link/21a1uj" 
            target="_blank" 
            rel="noreferrer" 
            className="btn btn-primary" 
            onClick={closeMobileMenu}
          >
            Agende sua Consulta
          </a>
        </div>
      </nav>
    </header>
  );
};

export default Header;