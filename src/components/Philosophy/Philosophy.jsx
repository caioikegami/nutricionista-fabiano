import React from 'react';
import './Philosophy.css';

const Philosophy = () => {
    const pillars = [
        {
            icon: 'vital_signs',
            title: 'Ciência moderna',
            description: 'Ajuste de micronutrientes para otimizar suas funções celulares e metabólicas.'
        },
        {
            icon: 'ecg_heart',
            title: 'Ancestralidade alimentar',
            description: 'O intestino como centro da imunidade e produção de neurotransmissores.'
        },
        {
            icon: 'psychiatry',
            title: 'Estratégias personalizadas',
            description: 'Protocolos que consideram a conexão entre saúde física e clareza mental.'
        }
    ];

    return (
        <section id="sobre" className="philosophy">
            <div className="container">
                <div className="philosophy-header">
                    <h2 className="text-headline-lg">Abordagem ancestral, cetogênica e carnívora</h2>
                    <div className="divider"></div>
                    <p className="text-body-lg philosophy-subtitle">
                        Desenvolvemos protocolos que promovem emagrecimento inteligente, equilíbrio metabólico e vitalidade sustentável.
                    </p>
                </div>

                <div className="pillars-grid stagger">
                    {pillars.map((pillar, index) => (
                        <div key={index} className="pillar-card bento-card">
                            <div className="pillar-icon">
                                <span className="material-icons">{pillar.icon}</span>
                            </div>
                            <h3 className="text-headline-sm">{pillar.title}</h3>
                            <p className="text-body-md text-muted">{pillar.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Philosophy;