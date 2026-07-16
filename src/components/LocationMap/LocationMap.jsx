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
                                    Avenida Presidente Kennedy, 1006 - Sala 08<br />
                                    Cidade Nova I, Indaiatuba - SP<br />
                                    CEP: 13334-170
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
                                <a href="mailto:fabros@gmail.com">fabros@gmail.com</a>
                            </div>
                        </div>
                        <a
                            href="https://maps.app.goo.gl/XkM19sd6FKTxRUkp8"
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
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3670.3935694252946!2d-47.208366813585734!3d-23.08268427674966!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94c8b4affa7d292d%3A0xc61e4cc7ef70a224!2sAv.%20Presidente%20Kennedy%2C%201006%20-%20Cidade%20Nova%20I%2C%20Indaiatuba%20-%20SP%2C%2013334-170!5e0!3m2!1spt-BR!2sbr!4v1783978324600!5m2!1spt-BR!2sbr"
                            title="Google Maps - Clínica VittaCore Nutrição Funcional"
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