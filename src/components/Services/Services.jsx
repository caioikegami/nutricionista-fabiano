import React from 'react';
import { Link } from 'react-router-dom';
import './Services.css';

const Services = () => {
    return (
        <section id="servicos" className="services">
            <div className="container">
                <div className="services-header">
                    <div>
                        <span className="services-badge">Nossos Serviços</span>
                        <h2 className="text-headline-lg">Como podemos ajudar você:</h2>
                    </div>
                    <Link to="/servicos-produtos#servicos">Ver todos os Serviços</Link>
                </div>

                <div className="bento-grid">
                    {/* Main Feature Card */}
                    <div className="bento-item bento-large bento-card">
                        <div className="bento-image">
                            <img
                                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDcJk83L4PgOpNfvq18pJ-O0Ubs3_ms-FgowzghYtdsU-JSgIc7kvw282QwTFpYb7O6UUhNPWY_s_2DnkGrzwAvSS5BPDuMIaaoGjQa4yOdzfYg4RrsR6ZVFGKEieSibFdLfGzJPVcXxt2xrurP82FSHTVkJVfYyWnLejD3GhvgNf_3oLbPj9vfQLomq0YTkvSc3uKZFOqljeb70DCyT7sWtSuUsjWtjeQ4HK41Z8_jwUgHFh-1OFtPvA5LrYjIdGmVb8B0ARx44sU"
                                alt="Alimentos funcionais e ingredientes orgânicos"
                            />
                            <div className="bento-overlay"></div>
                        </div>
                        <div className="bento-content">
                            <span className="bento-badge">Mais procurado</span>
                            <h3 className="text-headline-md">Investigação Metabólica Completa</h3>
                            <p className="text-body-lg">O protocolo mais completo. Análise detalhada do seu histórico clínico, sintomas, hábitos de vida e exames laboratoriais interpretados sob a ótica funcional. </p>
                            <Link to="/servicos-produtos#servicos" className="bento-link">
                                Saiba Mais
                                <span className="material-icons">arrow_forward</span>
                            </Link>
                        </div>
                    </div>

                    {/* Medium Card 2 */}
                    <div className="bento-item bento-medium bento-card">
                        <div className="bento-icon">
                            <span className="material-icons">nutrition</span>
                        </div>
                        <h3 className="text-headline-sm">Reorganização Metabólica</h3>
                        <p className="text-body-md text-muted">Para quem tem resistência à insulina, síndrome metabólica, esteatose hepática, fadiga persistente ou dificuldade de emagrecer. Atuamos na correção dos mecanismos fisiológicos</p>
                        <div className="bento-tags">
                            <span className="tag">Plano Alimentar metabólico</span>
                            <span className="tag">Suplementação direcionada</span>
                            <span className="tag">Monitoramento laboratorial contínuo</span>
                        </div>
                    </div>

                    {/* Small Card 3 */}
                    <div className="bento-item bento-small bento-primary bento-card">
                        <span className="material-icons">water_bottle</span>
                        <h4 className="text-headline-sm">Nutrição Esportiva Funcional</h4>
                        <p className="text-body-md"> Para atletas e praticantes de atividade física que querem extrair o máximo do treinamento.</p>
                    </div>

                    {/* Small Card 4 */}
                    <div className="bento-item bento-small bento-secondary bento-card">
                        <span className="material-icons">medication</span>
                        <h4 className="text-headline-sm">Suplementação Direcionada</h4>
                        <p className="text-body-md">Fórmulas personalizadas baseadas em deficiências identificadas em exames.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Services;