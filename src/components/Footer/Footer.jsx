import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-content">
                    <div className="footer-brand">
                        <h4 className="footer-logo">Dr. Fabiano Rodrigues</h4>
                        <p className="text-body-md">
                            Saúde se constrói. Força se conquista.
                        </p>
                    </div>

                    <div className="footer-section">
                        <h5 className="footer-title">Navegação</h5>
                        <ul className="footer-links">
                            <li>
                                <Link to="/">Início</Link>
                            </li>
                            <li>
                                <Link to="/sobre">Sobre</Link>
                            </li>
                            <li>
                                <Link to="/servicos-produtos">Serviços</Link>
                            </li>
                            <li>
                                <Link to="/servicos-produtos#produtos">Produtos</Link>
                            </li>
                            <li>
                                <Link to="/contato">Contato</Link>
                            </li>
                        </ul>
                    </div>

                    <div className="footer-section">
                        <h5 className="footer-title">Legal</h5>
                        <ul className="footer-links">
                            <li><a href="/privacidade">Privacidade</a></li>
                            <li><Link to="/#faq">FAQ</Link></li>
                            <li><Link to="/contato#localizacao">Localização</Link></li>
                        </ul>
                    </div>

                    <div className="footer-section">
                        <h5 className="footer-title">Contato</h5>
                        <a href="mailto:fabrosnutricao@gmail.com" className="text-body-md">fabrosnutricao@gmail.com</a>
                        <a href="https://wa.link/21a1uj" target="_blank" rel="noreferrer" className="text-body-md">+55 (19) 99657-5566 </a>
                        <div className="footer-social">
                            <a href="https://www.linkedin.com/in/nutrifabianorodrigues/" target="_blank" rel="noreferrer" className="social-link" aria-label="LinkedIn">
                                <span className="social-icons"> <img src="/linkedin.png"
                                    alt="LinkedIn"
                                    style={{ width: '20px', height: '20px' }} /></span>
                            </a>
                            <a href="https://www.instagram.com/fabianorodriguesnutri/" target="_blank" rel="noreferrer" className="social-link" aria-label="Instagram">
                                <span className="social-icons"><img src="/instagram.png" alt="Instagram" style={{ width: '20px', height: '20px' }} /></span>
                            </a>
                            <a href="https://www.facebook.com/people/Fabiano-Rodrigues-Nutri/61591259564072/" target="_blank" rel="noreferrer" className="social-link" aria-label="Facebook">
                                <span className="social-icons"><img src="/facebook.png" alt="Facebook" style={{ width: '20px', height: '20px' }} /></span>
                            </a>
                        </div>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p className="footer-copyright">
                        © {currentYear} Dr. Fabiano Rodrigues. Nutrição Funcional & Bem-estar.
                    </p>
                    <p className="footer-crn">CRN3 87464/P</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;