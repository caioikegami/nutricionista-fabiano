import React, { useState } from 'react';
import './Testimonials.css';

const Testimonials = () => {
    const [activeTestimonial, setActiveTestimonial] = useState(0);

    const testimonials = [
        {
            id: 1,
            name: 'Marina Silva',
            role: 'Empresária',
            image: `${process.env.PUBLIC_URL}/testimonial-1.jpg`,
            rating: 5,
            text: 'Transformei minha vida em 3 meses. A abordagem funcional do Dr. Fabiano identificou as causas raiz dos meus problemas de energia e digestão. Hoje tenho clareza mental, mais disposição e qualidade de vida.',
            result: 'Perdeu 12kg e normalizou glicemia'
        },
        {
            id: 2,
            name: 'Carlos Borges',
            role: 'Professor de Música',
            image: `${process.env.PUBLIC_URL}/testimonial-2.jpg`,
            rating: 5,
            text: 'Por meio de escolhas alimentares conscientes, embarquei em uma jornada de autodescoberta e cura. Adotei um cardápio antiinflamatório que se adequou às minhas preferências e necessidades alimentares, e os resultados foram incríveis!.',
            result: 'Carlos conseguiu deixar de depender dos medicamentos que o acompanhavam há anos'
        },
        {
            id: 3,
            name: 'Juliana Costa',
            role: 'Atleta',
            image: `${process.env.PUBLIC_URL}/testimonial-3.jpg`,
            rating: 5,
            text: 'Sou atleta amadora e procurava otimizar meu desempenho. A nutrição funcional me deu uma vantagem competitiva real. Meus tempos melhoraram significativamente.',
            result: 'Aumentou VO2 máximo e resistência muscular'
        },
        {
            id: 4,
            name: 'Fernanda Oliveira',
            role: 'Mãe de Dois Filhos',
            image: `${process.env.PUBLIC_URL}/testimonial-4.jpg`,
            rating: 5,
            text: 'Após gravidez, eu sentia cansaço extremo. O Dr. Fabiano entendeu que era desequilíbrio hormonal. Agora tenho energia para cuidar dos meus filhos e de mim mesma.',
            result: 'Recuperou energia e equilibrou hormônios'
        }
    ];

    const handlePrevious = () => {
        setActiveTestimonial((prev) =>
            prev === 0 ? testimonials.length - 1 : prev - 1
        );
    };

    const handleNext = () => {
        setActiveTestimonial((prev) =>
            prev === testimonials.length - 1 ? 0 : prev + 1
        );
    };

    const currentTestimonial = testimonials[activeTestimonial];

    return (
        <section className="testimonials-section">
            <div className="container">
                <div className="testimonials-header">
                    <h2 className="text-headline-lg">Histórias de Transformação</h2>
                    <div className="divider"></div>
                    <p className="testimonials-subtitle">
                        Conheça os resultados reais de nossos clientes que encontraram
                        equilíbrio e vitalidade através da nutrição funcional.
                    </p>
                </div>

                <div className="testimonials-container">
                    {/* Main Testimonial Card */}
                    <div className="testimonial-main animate-slide-left">
                        <div className="testimonial-header-card">
                            <div className="testimonial-avatar">
                                <img
                                    src={currentTestimonial.image}
                                    alt={currentTestimonial.name}
                                />
                            </div>
                            <div className="testimonial-info">
                                <h3 className="testimonial-name">{currentTestimonial.name}</h3>
                                <p className="testimonial-role">{currentTestimonial.role}</p>
                                <div className="testimonial-rating">
                                    {[...Array(currentTestimonial.rating)].map((_, i) => (
                                        <span key={i} className="material-symbols-outlined star-filled">
                                            star
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>

                        <div className="testimonial-content">
                            <p className="testimonial-text">"{currentTestimonial.text}"</p>
                            <div className="testimonial-result">
                                <span className="result-icon">
                                    <span className="material-symbols-outlined">check_circle</span>
                                </span>
                                <span className="result-text">{currentTestimonial.result}</span>
                            </div>
                        </div>

                        <div className="testimonial-controls">
                            <button
                                className="control-btn"
                                onClick={handlePrevious}
                                aria-label="Depoimento anterior"
                            >
                                <span className="material-symbols-outlined">chevron_left</span>
                            </button>
                            <div className="control-dots">
                                {testimonials.map((_, index) => (
                                    <button
                                        key={index}
                                        className={`dot ${index === activeTestimonial ? 'active' : ''}`}
                                        onClick={() => setActiveTestimonial(index)}
                                        aria-label={`Ir para depoimento ${index + 1}`}
                                    ></button>
                                ))}
                            </div>
                            <button
                                className="control-btn"
                                onClick={handleNext}
                                aria-label="Próximo depoimento"
                            >
                                <span className="material-symbols-outlined">chevron_right</span>
                            </button>
                        </div>
                    </div>

                    {/* Side Thumbnails */}
                    <div className="testimonials-thumbnails animate-slide-right">
                        {testimonials.map((testimonial, index) => (
                            <button
                                key={testimonial.id}
                                className={`thumbnail-card ${index === activeTestimonial ? 'active' : ''}`}
                                onClick={() => setActiveTestimonial(index)}
                                aria-label={`Ver depoimento de ${testimonial.name}`}
                            >
                                <div className="thumbnail-image">
                                    <img
                                        src={testimonial.image}
                                        alt={testimonial.name}
                                    />
                                </div>
                                <div className="thumbnail-info">
                                    <h4 className="thumbnail-name">{testimonial.name}</h4>
                                    <p className="thumbnail-role">{testimonial.role}</p>
                                </div>
                            </button>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;