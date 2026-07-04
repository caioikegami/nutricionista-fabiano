import React from 'react';
import './CTA.css';

const CTA = () => {
    return (
        <section className="cta-section">
            <div className="container">
                <div className="cta-container">
                    <h2 className="text-headline-lg cta-title">
                        Pronto para investir no seu ativo mais precioso?
                    </h2>

                    <p className="text-body-lg cta-description">
                        Agende hoje sua primeira consulta e inicie a transformação que seu corpo merece. Vagas limitadas para acompanhamento individualizado.
                    </p>

                    <a href="https://wa.link/21a1uj" target="_blank" rel="noreferrer" className="btn btn-secondary btn-large">
                        Reservar meu Horário
                    </a>
                </div>
            </div>
        </section>
    );
};

export default CTA;