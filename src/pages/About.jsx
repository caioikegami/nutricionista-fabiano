import React, { useEffect } from 'react';
import useSEO from '../hooks/useSEO';
import '../styles/about.css';

const About = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    useSEO({
        title: 'Sobre Dr. Fabiano Rodrigues | Nutrição Funcional',
        description: 'Conheça a trajetória, expertise e abordagem clínica de Dr. Fabiano Rodrigues, especialista em nutrição funcional com mais de 12 anos de experiência.',
        canonical: 'https://www.drfabiano.com.br/sobre',
        keywords: 'nutricionista, nutrição funcional, especialista, sobre, trajetória profissional',
    });

    return (
        <main className="about-page">
            {/* ================= HERO SECTION ================= */}
            <section className="about-hero">
                <div className="container">
                    <div className="hero-grid">
                        <div className="hero-text">
                            <span className="hero-badge">Especialista em Nutrição Funcional</span>

                            <h1 className="text-headline-lg-mobile md-text-display-lg">
                                Dr. Fabiano Rodrigues
                            </h1>

                            <p className="text-body-lg hero-description">
                                Dedicado a transformar vidas através de uma abordagem clínica rigorosa
                                e humanizada, focada na raiz dos desequilíbrios metabólicos.
                            </p>
                            <div className="credentials-grid">
                                <div className="credential-card">
                                    <span className="material-symbols-outlined credential-icon">workspace_premium</span>
                                    <span className="credential-text">Bacharelado em Nutrição Clínica</span>
                                </div>

                                <div className="credential-card">
                                    <span className="material-symbols-outlined credential-icon">metabolism</span>
                                    <span className="credential-text">Pós-graduação em Nutrição Funcional</span>
                                </div>
                                <div className="credential-card">
                                    <span className="material-symbols-outlined credential-icon">oncology</span>
                                    <span className="credential-text">Pós-graduação em Nutrição Oncológica</span>
                                </div>
                                <div className="credential-card">
                                    <span className="material-symbols-outlined credential-icon">water_bottle</span>
                                    <span className="credential-text">Pós-graduação em Nutrição Esportiva</span>
                                </div>
                            </div>
                        </div>

                        <div className="hero-image-about">
                            <div className="image-frame">
                                <img
                                    src={`${process.env.PUBLIC_URL}/fabiano2.png`}
                                    alt="Dr. Fabiano Rodrigues - Retrato Profissional"
                                />
                            </div>
                            <div className="decorative-blur"></div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ================= BIOGRAPHY SECTION ================= */}
            <section className="biography-section">
                <div className="container">
                    <div className="biography-grid">
                        {/* Text Content */}
                        <div className="biography-text">
                            <h2 className="text-headline-lg">Trajetória e Compromisso Profissional</h2>

                            <div className="biography-paragraphs">
                                <p className="text-body-md text-muted">
                                    Nutricionista Clínico Funcional (CRN3 87464), com atuação integrada em Nutrição Funcional,
                                    Esportiva, Oncológica e Empresarial. Trabalho com foco na identificação das causas-raiz dos
                                    desequilíbrios metabólicos, utilizando a alimentação e o estilo de vida como ferramentas
                                    estratégicas para promoção de saúde, desempenho e longevidade.
                                </p>

                                <p className="text-body-md text-muted">
                                    Atuo na avaliação nutricional individualizada, interpretação funcional
                                    de exames laboratoriais, elaboração de planos alimentares personalizados
                                    e estratégias nutricionais aplicadas a diferentes contextos: clínica, esporte
                                    de alto rendimento e ambiente corporativo.
                                </p>

                                <p className="text-body-md text-muted">
                                    Na Nutrição Empresarial, desenvolvo e implemento programas
                                    de qualidade de vida, atendimentos individuais, ações educativas
                                    e palestras voltadas à melhoria da saúde dos colaboradores,
                                    redução de afastamentos, aumento de energia, foco e produtividade no trabalho.
                                </p>

                                <p className="text-body-md text-muted">
                                    Na Nutrição Esportiva, integro comissão técnica de equipe profissional, com acompanhamento
                                    nutricional contínuo, periodização alimentar, orientação sobre suplementação e estratégias
                                    de hidratação, sempre alinhado ao calendário competitivo e à prevenção de lesões.
                                </p>

                                <p className="text-body-md text-muted">
                                    Minha prática é guiada pela ciência, pela abordagem funcional e por uma visão sistêmica do ser humano,
                                    acreditando que saúde e performance caminham juntas.

                                    <br></br>
                                    <br></br>“Que seu alimento seja seu remédio e seu remédio seja seu alimento.” - Hipócrates
                                </p>
                            </div>
                        </div>

                        {/* Images & Stats */}
                        <div className="biography-images">
                            <div className="bio-image-main">
                                <img
                                    src={`${process.env.PUBLIC_URL}/dietacarne.jpg`}
                                    alt="Ingredientes funcionais em ambiente clínico"
                                />
                            </div>

                            <div className="experience-card">
                                <div className="experience-number">12+</div>
                                <div className="experience-label">Anos de Experiência Clínica</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ================= METHOD PILLARS SECTION ================= */}
            <section className="pillars-section">
                <div className="container">
                    <div className="pillars-header">
                        <h2 className="text-headline-lg">Pilares da Abordagem Funcional</h2>
                        <p className="pillars-subtitle">
                            Entendendo o organismo como um sistema integrado, onde cada função biológica
                            depende do equilíbrio nutricional correto.
                        </p>
                    </div>

                    <div className="pillars-grid">
                        {/* Pillar 1 */}
                        <div className="pillar-card bento-card">
                            <div className="pillar-icon">
                                <span className="material-symbols-outlined">genetics</span>
                            </div>
                            <h3 className="text-headline-sm">Nutrigenética</h3>
                            <p className="text-body-md text-muted">
                                Análise a partir de exame genético de como seus genes respondem aos nutrientes, permitindo uma dieta
                                personalizada ao seu código genético.
                            </p>
                        </div>

                        {/* Pillar 2 */}
                        <div className="pillar-card bento-card">
                            <div className="pillar-icon">
                                <span className="material-symbols-outlined">biotech</span>
                            </div>
                            <h3 className="text-headline-sm">Metabolismo Otimizado</h3>
                            <p className="text-body-md text-muted">
                                Ajustes hormonais e enzimáticos através de alimentos funcionais para maximizar
                                a queima de gordura e energia.
                            </p>
                        </div>

                        {/* Pillar 3 */}
                        <div className="pillar-card bento-card">
                            <div className="pillar-icon">
                                <span className="material-symbols-outlined">psychology_alt</span>
                            </div>
                            <h3 className="text-headline-sm">Eixo Cérebro-Intestino</h3>
                            <p className="text-body-md text-muted">
                                Foco na saúde intestinal para melhorar o humor, a clareza mental e o
                                sistema imunológico.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* ================= VIDEO & MEDIA SECTION ================= */}
            <section className="media-section">
                <div className="container">
                    <div className="media-header">
                        <h2 className="text-headline-lg">Conhecer mais sobre Dr. Fabiano Rodrigues</h2>
                        <p className="media-subtitle">
                            Confira entrevistas e conteúdo exclusivo sobre nutrição funcional e bem-estar.
                        </p>
                    </div>

                    <div className="media-grid">
                        {/* Video Section */}
                        <div className="video-container">
                            <div className="video-wrapper">
                                <iframe
                                    width="100%"
                                    height="100%"
                                    src="https://www.youtube.com/embed/vYIdtnSyOVs"
                                    title="Entrevista Dr. Fabiano Rodrigues"
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture, web-share"
                                    allowFullScreen
                                    style={{ pointerEvents: 'auto'}}
                                ></iframe>
                            </div>
                            <div className="video-info">
                                <h3 className="text-headline-sm">Entrevista: #Bora Comigo - Ep 97 - Fabiano Rodrigues - Nutricionista</h3>
                                <p className="text-body-md text-muted">
                                    Entrevisa com Dr. Fabiano Rodrigues no podcast Bora Comigo transmitido ao vivo em 20 de Janeiro de 2026.
                                </p>
                            </div>
                        </div>
                        {/* Instagram Section */}
                        <div className="instagram-container ">
                            <div className="instagram-card">
                                <div className="instagram-header">
                                    <div className="instagram-avatar">
                                        <img
                                            src={`${process.env.PUBLIC_URL}/fabiano1.png`}
                                            alt="Dr. Fabiano Rodrigues"
                                        />
                                    </div>
                                    <div className="instagram-info">
                                        <h3 className="instagram-username">@fabianorodriguesnutri</h3>
                                        <p className="instagram-bio">Nutricionista Funcional</p>
                                    </div>
                                </div>

                                <div className="instagram-bio-text">
                                    <p>
                                        Compartilhando dicas exclusivas de nutrição funcional, saúde digestiva
                                        e longevidade. Siga para conteúdo científico e prático! 🧬🥗
                                    </p>
                                </div>

                                <div className="instagram-stats">
                                    <div className="stat-item">
                                        <span className="stat-number">+300</span>
                                        <span className="stat-label">Seguidores</span>
                                    </div>
                                    <div className="stat-item">
                                        <span className="stat-number">30+</span>
                                        <span className="stat-label">Posts</span>
                                    </div>
                                    <div className="stat-item">
                                        <span className="stat-number">1.2K</span>
                                        <span className="stat-label">Média de Views</span>
                                    </div>
                                </div>

                                <a
                                    href="https://www.instagram.com/fabianorodriguesnutri/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="btn btn-primary btn-instagram"
                                >
                                    <span className="material-symbols-outlined">public</span>
                                    Seguir no Instagram
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>



            {/* ================= CTA SECTION ================= */}
            <section section className="about-cta" >
                <div className="container">
                    <div className="cta-box">
                        <h2 className="text-headline-lg cta-title">
                            Pronto para iniciar sua evolução?
                        </h2>

                        <p className="text-body-lg cta-description">
                            Agende uma consulta detalhada e descubra como a nutrição funcional
                            pode elevar seu padrão de saúde.
                        </p>

                        <a href="https://wa.link/21a1uj" target="_blank" rel="noreferrer" className="btn btn-secondary btn-large">
                            Solicitar Disponibilidade
                        </a>
                    </div>
                </div>
            </section >
        </main >
    );
};

export default About;