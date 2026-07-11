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
                        <h2 className="text-headline-lg">Soluções Personalizadas para sua Jornada</h2>
                    </div>
                    <a href="/servicos-produtos" className="view-all">
                        Ver todos os serviços
                    </a>
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
                            <h3 className="text-headline-md">Avaliação metabólica</h3>
                            <p className="text-body-lg">Nosso protocolo mais completo com análise de exames de genética e de exames laboratoriais avançados.</p>
                            <Link to="/servicos-produtos#servicos" className="bento-link">
                                Saiba Mais
                                <span className="material-icons">arrow_forward</span>
                            </Link>
                        </div>
                    </div>

                    {/* Medium Card 1 */}
                    <div className="bento-item bento-medium bento-card">
                        <div className="bento-icon">
                            <span className="material-icons">nutrition</span>
                        </div>
                        <h3 className="text-headline-sm">Plano Alimentar Inteligente</h3>
                        <p className="text-body-md text-muted">Dietas adaptadas à sua rotina, preferências e necessidades metabólicas específicas.</p>
                        <div className="bento-tags">
                            <span className="tag">Individualizado</span>
                            <span className="tag">Sustentável</span>
                        </div>
                    </div>

                    {/* Small Card 1 */}
                    <div className="bento-item bento-small bento-primary bento-card">
                        <span className="material-icons">biotech</span>
                        <h4 className="text-headline-sm">Bioimpedância</h4>
                        <p className="text-body-md">Análise precisa da composição corporal.</p>
                    </div>

                    {/* Small Card 2 */}
                    <div className="bento-item bento-small bento-secondary bento-card">
                        <span className="material-icons">medication</span>
                        <h4 className="text-headline-sm">Suplementação</h4>
                        <p className="text-body-md">Fórmulas personalizadas de acordo com seu protocolo.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Services;