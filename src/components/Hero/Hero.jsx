import React from 'react';
import { Link } from 'react-router-dom';
import './Hero.css';

const Hero = () => {
    return (
        <section id="inicio" className="hero">
            <div className="container">
                <div className="hero-content">
                    <div className="hero-text animate-slide-left">
                        <span className="hero-badge">Especialista em Nutrição Funcional</span>

                        <h1 className="text-headline-lg-mobile md-text-display-lg">
                            Seus exames estão normais mas<span className="text-highlight"> você não se sente bem?</span>
                        </h1>

                        <p className="text-body-lg hero-description">
                            A Nutrição Funcional vai além dos valores de referência. Investigamos as causas metabólicas por trás da fadiga, do ganho de peso e da inflamação — e corrigimos na raiz, não no sintoma.
                        </p>

                        <div className="hero-buttons">
                            <a href="https://wa.link/21a1uj" target="_blank" rel="noreferrer" className="btn btn-primary">
                                Agendar Investigação Metabólica
                            </a>
                            <Link to="/sobre" className="btn btn-outline">
                                Conheça o Método
                            </Link>
                        </div>
                    </div>

                    <div className="hero-image animate-slide-right">
                        <div className="image-container">
                            <div className="image-overlay"></div>
                            <img
                                src={`${process.env.PUBLIC_URL}/fabiano1.png`}
                                alt="Dr. Fabiano Rodrigues - Nutricionista Funcional"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;