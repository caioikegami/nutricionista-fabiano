import React, { useEffect } from 'react';
import useSEO from '../hooks/useSEO';
import '../styles/about.css';

const About = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    useSEO({
        title: 'Sobre Dr. Fabiano Rodrigues | Nutrição Funcional',
        description: ' Não cheguei à Nutrição Funcional apenas pela formação acadêmica. Cheguei por necessidade. Antes de transformar a saúde dos meus pacientes, precisei transformar a minha. Foi esse processo que reorganizou meu próprio metabolismo e deu origem ao método que hoje aplico diariamente no consultório para ajudar meus pacientes a recuperarem a saúde metabólica.',
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
                                Não cheguei à Nutrição Funcional apenas pela formação acadêmica. Cheguei por necessidade.
                                Antes de transformar a saúde dos meus pacientes, precisei transformar a minha.
                                Foi esse processo que reorganizou meu próprio metabolismo e deu origem ao método que hoje
                                aplico diariamente no consultório para ajudar meus pacientes a recuperarem a saúde metabólica.
                            </p>
                            <div className="credentials-grid">
                                <div className="credential-card">
                                    <span className="material-symbols-outlined credential-icon">workspace_premium</span>
                                    <span className="credential-text">Bacharelado em Nutrição Clínica</span>
                                    <span className="credential-text2">Faculdade Anhanguera</span>
                                </div>

                                <div className="credential-card">
                                    <span className="material-symbols-outlined credential-icon">metabolism</span>
                                    <span className="credential-text">Pós-graduação em Nutrição Funcional</span>
                                    <span className="credential-text2">Faculdade Anhanguera</span>
                                </div>
                                <div className="credential-card">
                                    <span className="material-symbols-outlined credential-icon">oncology</span>
                                    <span className="credential-text">Pós-graduação em Nutrição Oncológica</span>
                                    <span className="credential-text2">Faculdade Anhanguera</span>
                                </div>
                                <div className="credential-card">
                                    <span className="material-symbols-outlined credential-icon">water_bottle</span>
                                    <span className="credential-text">Pós-graduação em Nutrição Esportiva</span>
                                    <span className="credential-text2">IPGS Ed. em Saúde e Nutrição</span>
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
                            <div className="crn-badge">
                                <span className="material-symbols-outlined">verified</span>
                                <div className="crn-content">
                                    <p className="crn-number">CRN-3 87464</p>
                                </div>
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
                            <h3 className="text-headline-lg">A transformação que mudou tudo</h3>

                            <div className="biography-paragraphs">
                                <p className="text-body-md text-muted">
                                    Não cheguei à Nutrição Funcional apenas pela formação acadêmica. Cheguei por necessidade.
                                </p>
                                <p className="text-body-md text-muted">
                                    Durante muitos anos enfrentei dificuldades que iam muito além do excesso de peso.
                                    Exames alterados, baixa disposição, metabolismo comprometido e a sensação de que as
                                    soluções tradicionais não resolviam o problema. O mais frustrante era ouvir que bastava
                                    "comer menos e se movimentar mais", como se toda a complexidade do metabolismo pudesse
                                    ser reduzida à falta de disciplina.
                                </p>

                                <p className="text-body-md text-muted">
                                    Esse processo transformou minha própria vida. Reduzi 47 kg e, mais importante do que a mudança
                                    na balança, recuperei minha saúde metabólica, normalizei exames e voltei a ter energia e qualidade de vida.
                                </p>

                                <h3 className="text-headline-lg">Da experiência pessoal à prática clínica</h3>

                                <p className="text-body-md text-muted">
                                    Essa transformação redefiniu minha carreira.
                                </p>

                                <p className="text-body-md text-muted">
                                    Hoje atuo como Nutricionista Clínico Funcional (CRN3 87464), aplicando uma abordagem baseada na investigação
                                    das causas dos desequilíbrios metabólicos, e não apenas no controle de sintomas.
                                </p>

                                <p className="text-body-md text-muted">
                                    Minha atuação inclui avaliação nutricional individualizada, interpretação funcional de exames laboratoriais,
                                    elaboração de protocolos nutricionais personalizados e acompanhamento contínuo, sempre considerando a
                                    individualidade bioquímica de cada paciente.
                                </p>

                                <p className="text-body-md text-muted">
                                    Também desenvolvo estratégias em Nutrição Esportiva, integrando comissão técnica de equipe profissional,
                                    além de programas de Nutrição Empresarial voltados à promoção da saúde, qualidade de vida e desempenho de
                                    colaboradores.
                                </p>

                                <h3 className="text-headline-lg">O que orienta meu trabalho</h3>

                                <p className="text-body-md text-muted">
                                    Minha prática é sustentada por três princípios:
                                </p>

                                <p className="text-body-md text-muted">
                                    <strong>Investigar a causa, não apenas controlar o sintoma.</strong>
                                    <br />A melhora consistente acontece quando o
                                    mecanismo que gerou o problema é identificado e corrigido.
                                </p>

                                <p className="text-body-md text-muted">
                                    <strong>Respeitar a individualidade bioquímica.</strong>
                                    <br />Cada organismo possui características, necessidades e respostas próprias.
                                    Protocolos padronizados raramente produzem resultados duradouros.
                                </p>

                                <p className="text-body-md text-muted">
                                    <strong>Aplicar ciência à prática clínica.</strong>
                                    <br />Cada conduta é fundamentada em fisiologia, bioquímica e evidências científicas,
                                    traduzidas em estratégias que possam ser incorporadas à rotina do paciente.
                                </p>

                                <p className="text-body-md text-muted">
                                    Meu objetivo vai além de prescrever uma dieta. Busco ajudar cada paciente a compreender 
                                    seu próprio metabolismo, recuperar a saúde de forma consistente e construir hábitos 
                                    que sustentem bem-estar, desempenho e longevidade.
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

                            <div className="bio-image-main">
                                <img
                                    src={`${process.env.PUBLIC_URL}/about2.jpg`}
                                    alt="Ingredientes funcionais em ambiente clínico"
                                />
                            </div>

                            <div className="experience-card">
                                <div className="experience-label">Saúde se constrói. Força se conquista.</div>
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
                                <span className="material-symbols-outlined">biotech</span>
                            </div>
                            <h3 className="text-headline-sm">Interpretação Funcional de Exames</h3>
                            <p className="text-body-md text-muted">
                                Os exames laboratoriais contam uma história que vai além dos valores de referência. 
                                Minha abordagem consiste em correlacionar marcadores bioquímicos, sintomas, 
                                histórico clínico e estilo de vida para identificar desequilíbrios metabólicos 
                                precocemente e compreender suas possíveis causas. Essa análise direciona condutas mais 
                                individualizadas e precisas.
                            </p>
                        </div>

                        {/* Pillar 2 */}
                        <div className="pillar-card bento-card">
                            <div className="pillar-icon">
                                <span className="material-symbols-outlined">genetics</span>
                            </div>
                            <h3 className="text-headline-sm">Nutrigenética</h3>
                            <p className="text-body-md text-muted">
                                Cada organismo responde de maneira diferente aos nutrientes. Quando clinicamente indicado, 
                                a Nutrigenética permite compreender como determinadas variações genéticas podem influenciar 
                                o metabolismo, a utilização de nutrientes e a resposta às intervenções nutricionais. 
                                É uma ferramenta complementar que amplia a personalização do tratamento, sem substituir a avaliação clínica.
                            </p>
                        </div>

                        {/* Pillar 3 */}
                        <div className="pillar-card bento-card">
                            <div className="pillar-icon">
                                <span className="material-symbols-outlined">psychology_alt</span>
                            </div>
                            <h3 className="text-headline-sm">Eixo Cérebro-Intestino</h3>
                            <p className="text-body-md text-muted">
                                O intestino exerce papel central na saúde metabólica e imunológica e mantém uma comunicação 
                                constante com o cérebro por meio de vias neurais, imunológicas, hormonais e metabólicas. 
                                Alterações da microbiota intestinal podem contribuir para inflamação de baixo grau, 
                                alterações digestivas, fadiga e comprometimento do bem-estar. Cuidar da saúde intestinal 
                                significa promover equilíbrio para todo o organismo.
                            </p>
                        </div>

                        {/* Pillar 4 */}
                        <div className="pillar-card bento-card">
                            <div className="pillar-icon">
                                <span className="material-symbols-outlined">metabolism</span>
                            </div>
                            <h3 className="text-headline-sm">Reorganização Metabólica</h3>
                            <p className="text-body-md text-muted">
                                Mais do que buscar perda de peso, o objetivo é restaurar o funcionamento adequado do metabolismo. 
                                O foco está na melhora da sensibilidade à insulina, no controle da inflamação, na regulação hormonal,
                                 na função mitocondrial e na produção eficiente de energia. Quando esses mecanismos são restabelecidos,
                                  a melhora da composição corporal e da qualidade de vida tende a ocorrer como consequência de um organismo 
                                  mais equilibrado.
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
                                    style={{ pointerEvents: 'auto' }}
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