import React, { useEffect } from 'react';
import './LocationMap.css';
import { useLocation } from 'react-router-dom';

function LocationMap() {
    const location = useLocation();

    useEffect(() => {
        if (location.hash === '#localizacao') {
            setTimeout(() => {
                const element = document.getElementById('localizacao');
                if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                }
            }, 100);
        }
    }, [location]);

    return (
        <section id="localizacao" className="location-map-section">
            <div className="container">
                <div className="location-container">
                    {/* Informações da Clínica */}
                    <div className="clinic-info">
                        <h2 className="text-headline-md">Nossa Clínica</h2>

                        <div className="address-block">
                            <span className="material-symbols-outlined">location_on</span>
                            <div>
                                <h3>Endereço</h3>
                                <p>
                                    Av. Coronel Antônio Estanislau do Amaral, 277<br />
                                    Indaiatuba - SP<br />
                                    CEP: 13340-480
                                </p>
                            </div>
                        </div>

                        <div className="contact-block">
                            <span className="material-symbols-outlined">phone</span>
                            <div>
                                <h3>Telefone</h3>
                                <a href="tel:+5519996575566">+55 (19) 99657-5566</a>
                            </div>
                        </div>

                        <div className="contact-block">
                            <span className="material-symbols-outlined">mail</span>
                            <div>
                                <h3>E-mail</h3>
                                <a href="mailto:fabrosnutricao@gmail.com">fabrosnutricao@gmail.com</a>
                            </div>
                        </div>

                        <a
                            href="https://maps.app.goo.gl/38r7qQQiMUphC1Hy8"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn btn-primary btn-map"
                        >
                            <span className="material-symbols-outlined">directions</span>
                            Abrir no Google Maps
                        </a>
                    </div>

                    {/* Mapa Embutido */}
                    <div className="map-container">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3670.005823976685!2d-47.18842542389724!3d-23.09688264469392!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94cf4b3ac30cb45b%3A0x7b41e9ec8d45f245!2sAv.%20Coronel%20Ant%C3%B4nio%20Estanislau%20do%20Amaral%2C%20277%20-%20Jardim%20Juliana%2C%20Indaiatuba%20-%20SP%2C%2013340-480!5e0!3m2!1spt-BR!2sbr!4v1783101279717!5m2!1spt-BR!2sbr"
                            title="Google Maps - Cliníca VittaCore Nutrição Funcional"
                            width="100%"
                            height="450"
                            style={{
                                border: 0,
                                borderRadius: '16px',
                                display: 'block'
                            }}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="strict-origin-when-cross-origin"
                        ></iframe>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default LocationMap;