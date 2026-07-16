import React from 'react';
import './Philosophy.css';

const Philosophy = () => {
    const pillars = [
        {
            icon: 'vital_signs',
            title: 'Interpretação Funcional de Exames',
            description: 'Interpretamos seus exames sob uma lente funcional, identificando desequilíbrios nos eixos glicêmico, inflamatório, hormonal e intestinal, frequentemente anos antes de se tornarem doenças diagnosticáveis.'
        },
        {
            icon: 'ecg_heart',
            title: 'Nutrição Evolutiva',
            description: 'Nossos genes foram moldados por milhões de anos de evolução. A alimentação moderna — rica em ultraprocessados, açúcar e óleos vegetais refinados — colide com nossa biologia. Priorizamos alimentos minimamente processados, densidade nutricional e adequação proteica, respeitando o que seu organismo foi projetado para processar.'
        },
        {
            icon: 'psychiatry',
            title: 'Individualidade Bioquímica',
            description: 'Não existem protocolos genéricos. Cada pessoa responde de forma única aos alimentos. Seu plano é construído a partir do seu histórico, seus exames, seus sintomas e seus objetivos — não a partir de um modelo padronizado.'
        }
    ];

    return (
        <section id="sobre" className="philosophy">
            <div className="container">
                <div className="philosophy-header">
                    <h2 className="text-headline-lg">Nossa Abordagem: Causa Raiz, Não Sintoma</h2>
                    <div className="divider"></div>
                    <p className="text-body-lg philosophy-subtitle">
                        Não prescrevemos dietas padrão. Identificamos os mecanismos fisiológicos que estão gerando seus sintomas e os corrigimos na origem.
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