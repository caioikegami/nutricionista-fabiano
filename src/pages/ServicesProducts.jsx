import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import useSEO from '../hooks/useSEO';
import '../styles/services-products.css';

const ServicesProducts = () => {
    const location = useLocation();

    // Primeiro useEffect - scroll para topo
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    // Segundo useEffect - scroll para âncora
    useEffect(() => {
        if (location.hash) {
            setTimeout(() => {
                const element = document.getElementById(location.hash.substring(1));
                if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                }
            }, 100);
        }
    }, [location.hash]);

    // SEO
    useSEO({
        title: 'Serviços e Produtos | Dr. Fabiano Rodrigues',
        description: 'Protocolos nutricionais personalizados, consultas premium e suplementação inteligente.',
        canonical: 'https://www.drfabiano.com.br/servicos-produtos',
        keywords: 'consulta nutricionista, protocolos nutricionais, suplementos',
    });

    return (
        <main className="services-products-page">
            {/* ================= HERO SECTION ================= */}
            <section className="services-hero">
                <div className="container">
                    <div className="hero-grid">
                        <div className="hero-text animate-slide-left">
                            <span className="hero-badge">Excelência em Saúde</span>
                            <h1 className="text-headline-lg-mobile md-text-display-lg">
                                Cuidado Integral para uma vida plena.
                            </h1>
                            <p className="text-body-lg hero-description">
                                A nutrição funcional não é apenas sobre o que você come, mas como o seu corpo
                                processa a vida. Explore nossos protocolos clínicos e produtos selecionados.
                            </p>
                        </div>
                        <div className="hero-image-services animate-slide-right">
                            <img
                                 src={`${process.env.PUBLIC_URL}/vidaplena.jpg`}
                                alt="Vida plena"
                            />
                            <div className="image-overlay"></div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ================= PROTOCOLS SECTION ================= */}
            <section id="servicos" className="protocols-section">
                <div className="container">
                    <div className="protocols-header">
                        <div>
                            <h2 className="text-headline-lg">Protocolos Nutricionais</h2>
                            <div className="divider"></div>
                        </div>
                        <p className="protocols-subtitle">
                            Soluções personalizadas baseadas em bioimpedância.
                        </p>
                    </div>
                    <div className="services-grid">
                        {/* Service 1: Large Feature */}
                        <div className="service-card service-large bento-card">
                            <div className="service-content">
                                <span className="service-badge">Mais Procurado</span>
                                <h3 className="text-headline-md">Agende sua avaliação metabólica</h3>
                                <p className="text-body-lg">
                                    Mapeamento metabólico completo, análise de deficiências nutricionais
                                    e plano alimentar 100% individualizado. Inclui acompanhamento via app
                                    e suporte prioritário.
                                </p>
                                <ul className="benefits-list">
                                    <li>
                                        <span className="material-symbols-outlined">check_circle</span>
                                        90 minutos de avaliação inicial
                                    </li>
                                    <li>
                                        <span className="material-symbols-outlined">check_circle</span>
                                        Bioimpedância
                                    </li>
                                    <li>
                                        <span className="material-symbols-outlined">check_circle</span>
                                        Planejamento Mensal
                                    </li>
                                </ul>
                                <div className="service-footer">
                                    <span className="price">R$350,00</span>
                                    <a href="https://wa.link/21a1uj" target="_blank" rel="noreferrer" className="btn btn-primary">Agendar Agora</a>
                                </div>
                            </div>
                            <div className="service-image">
                                <img
                                    src={`${process.env.PUBLIC_URL}/avaliacaometabolica.jpg`}
                                    alt="Avaliação Metabólica"
                                />
                            </div>
                        </div>

                        {/* Service 2: Medium */}
                        <div className="service-card service-medium bento-card">
                            <span className="material-symbols-outlined service-icon">monitoring</span>
                            <h3 className="text-headline-sm">Exames Alterados</h3>
                            <p className="text-body-md text-muted">
                                Descubra sua predisposição genética a intolerâncias e absorção de nutrientes. Vamos analisar as alterações em exames e tratar a causa.
                            </p>
                            <div className="service-footer-medium">
                                <span className="price">Consulte</span>
                                <a href="https://wa.link/21a1uj" target="_blank" rel="noreferrer" className="btn btn-outline btn-sm">Saiba Mais</a>
                            </div>
                        </div>

                        {/* Service 3: Small */}
                        <div className="service-card service-small bento-card">
                            <span className="material-symbols-outlined service-icon">restaurant</span>
                            <h4 className="text-headline-sm">Planos Detox 7 Dias</h4>
                            <p className="text-body-md text-muted">
                                Guia completo de reestruturação hepática e redução de inflamação sistêmica.
                            </p>
                            <span className="price mt-auto">R$ 147,00</span>
                            <a href="https://wa.link/21a1uj" target="_blank" rel="noreferrer" className="btn btn-outline btn-sm">Saiba Mais</a>
                        </div>

                        {/* Service 4: Large Dark */}
                        <div className="service-card service-large-dark">
                            <div className="service-content-dark">
                                <h3 className="text-headline-md">Grupo de emagrecimento</h3>
                                <p className="text-body-lg">
                                    O caminho para a mudança de estilo de vida definitiva. Protocolo continuado
                                    com passo-a-passo semanal no grupo, acompanhamento geral.
                                </p>
                                <a href="https://wa.link/21a1uj" target="_blank" rel="noreferrer" className="btn btn-secondary" style={{ color: '#03312d' }}>
                                    Participar do grupo
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ================= PRODUCTS SECTION (com ID para âncora) ================= */}
            <section id="produtos" className="products-section">
                <div className="container">
                    <div className="products-header">
                        <h2 className="text-headline-lg">Produtos digitais</h2>
                        <p className="text-body-lg">
                            Produtos com selo de qualidade Dr. Fabiano Rodrigues, formulados para seu entendimento e apoio.
                        </p>
                    </div>
                    <div className="products-grid">
                        {/* Product 1 */}
                        <div className="product-card bento-card">
                            <div className="product-image-container">
                                <img
                                    src={`${process.env.PUBLIC_URL}/produto1.jpg`}
                                    alt="produto 1"
                                />
                            </div>
                            <div className="product-info">
                                <h4 className="product-title">Ebook - O Metabolismo centro da sua saúde</h4>
                                <p className="product-description">
                                    O metabolismo é mais do que um conceito: ele é o eixo central que determina como você vive.
                                </p>
                                <div className="product-footer">
                                    <span className="product-price">R$ 97,00</span>
                                    <button className="product-btn available">
                                        <span className="material-symbols-outlined">shopping_bag</span>
                                    </button>
                                </div>
                            </div>
                        </div>

                        {/* Product 2 */}
                        <div className="product-card bento-card">
                            <div className="product-image-container">
                                <img
                                    src={`${process.env.PUBLIC_URL}/produto2.jpg`}
                                    alt="produto 2"
                                />
                            </div>
                            <div className="product-info">
                                <h4 className="product-title">Programa - Um corpo que trabalha a seu favor</h4>
                                <p className="product-description">
                                    Vamos construir a base do que sustenta sua saúde com um programa de 6 meses.
                                </p>
                                <div className="product-footer">
                                    <span className="product-price">R$ 245,00</span>
                                    <button className="product-btn available">
                                        <span className="material-symbols-outlined">shopping_bag</span>
                                    </button>
                                </div>
                            </div>
                        </div>

                        {/* Product 3 */}
                        <div className="product-card bento-card">
                            <div className="product-image-container">
                                <span className="out-of-stock-badge">NOVO</span>
                                <img
                                    src={`${process.env.PUBLIC_URL}/produto3.jpg`}
                                    alt="Produto 3"
                                />
                            </div>
                            <div className="product-info">
                                <h4 className="product-title">Ebook - Receitas para ter força e longevidade</h4>
                                <p className="product-description">
                                    Mais de 50+ receitas para você fortalecer sua energia e foco e ter equilíbrio interno.
                                </p>
                                <div className="product-footer">
                                    <span className="product-price">R$ 67,00</span>
                                    <button className="product-btn available">
                                        <span className="material-symbols-outlined">shopping_bag</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default ServicesProducts;