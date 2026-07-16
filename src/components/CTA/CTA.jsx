import React from 'react';
import './CTA.css';

const CTA = () => {
    return (
        <section className="cta-section">
            <div className="container">
                <div className="cta-container">
                    <h2 className="text-headline-lg cta-title">
                        Seus sintomas têm causa. Vamos encontrá-la.
                    </h2>

                    <p className="text-body-lg cta-description">
                        Se você está cansado de ouvir que "está tudo normal" quando claramente não se sente bem, é hora de uma abordagem diferente. A Nutrição Funcional investiga o que os exames convencionais ignoram e corrige na raiz.
                    </p>

                    <a href="https://wa.link/21a1uj" target="_blank" rel="noreferrer" className="btn btn-secondary btn-large">
                        Agendar Consulta de Investigação Metabólica
                    </a>
                </div>
            </div>
        </section>
    );
};

export default CTA;