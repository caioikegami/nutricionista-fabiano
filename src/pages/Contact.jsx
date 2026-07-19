import React, { useEffect, useState } from 'react';
import useSEO from '../hooks/useSEO';
import '../styles/contact.css';
import LocationMap from '../components/LocationMap/LocationMap';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: 'Agendamento de Consulta',
        message: ''
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState(null);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    useSEO({
        title: 'Contato | VittaCore Nutrição Funcionar - Dr. Fabiano Rodrigues',
        description: 'Entre em contato com Dr. Fabiano Rodrigues para agendar sua consulta de nutrição funcional. WhatsApp, e-mail e formulário disponíveis.',
        canonical: 'https://www.drfabiano.com.br/contato',
        keywords: 'contato, agendar consulta, nutricionista, telefone, whatsapp, email',
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            // Enviar para Formspree
            const response = await fetch('https://formspree.io/f/mgojrkna', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    name: formData.name,
                    email: formData.email,
                    subject: formData.subject,
                    message: formData.message,
                    _subject: `Nova mensagem de ${formData.name} - ${formData.subject}`,
                    _captcha: false, // Desabilita captcha se não quiser
                }),
            });

            if (response.ok) {
                setSubmitStatus('success');
                setFormData({
                    name: '',
                    email: '',
                    subject: 'Agendamento de Consulta',
                    message: ''
                });

                setTimeout(() => {
                    setSubmitStatus(null);
                }, 4000);
            } else {
                setSubmitStatus('error');
                setTimeout(() => {
                    setSubmitStatus(null);
                }, 3000);
            }
        } catch (error) {
            console.error('Erro ao enviar:', error);
            setSubmitStatus('error');
            setTimeout(() => {
                setSubmitStatus(null);
            }, 3000);
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <main className="contact-page">
            {/* ================= HERO SECTION ================= */}
            <section className="contact-hero">
                <div className="container">
                    <div className="hero-header">
                        <span className="hero-badge">Fale Conosco</span>
                        <h1 className="text-headline-lg">Inicie sua jornada para uma vida mais equilibrada.</h1>
                        <p className="hero-description">
                            Estamos prontos para atender suas dúvidas e agendar sua avaliação
                            personalizada em nutrição funcional.
                        </p>
                    </div>
                </div>
            </section>

            {/* ================= MAIN CONTENT ================= */}
            <section className="contact-content">
                <div className="container">
                    <div className="content-grid">
                        {/* Contact Form */}
                        <div className="contact-form-wrapper">
                            <form onSubmit={handleSubmit} className="contact-form">
                                <div className="form-row">
                                    <div className="form-group">
                                        <label htmlFor="name" className="form-label">Nome Completo</label>
                                        <input
                                            type="text"
                                            id="name"
                                            name="name"
                                            placeholder="Digite seu nome..."
                                            value={formData.name}
                                            onChange={handleInputChange}
                                            required
                                            className="form-input"
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="email" className="form-label">E-mail</label>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            placeholder="seu@email.com"
                                            value={formData.email}
                                            onChange={handleInputChange}
                                            required
                                            className="form-input"
                                        />
                                    </div>
                                </div>

                                <div className="form-group">
                                    <label htmlFor="subject" className="form-label">Assunto</label>
                                    <select
                                        id="subject"
                                        name="subject"
                                        value={formData.subject}
                                        onChange={handleInputChange}
                                        className="form-input"
                                    >
                                        <option>Agendamento de Consulta</option>
                                        <option>Dúvidas sobre Programas</option>
                                        <option>Parcerias e Eventos</option>
                                        <option>Outros</option>
                                    </select>
                                </div>

                                <div className="form-group">
                                    <label htmlFor="message" className="form-label">Mensagem</label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        placeholder="Conte-nos um pouco sobre seus objetivos de saúde..."
                                        value={formData.message}
                                        onChange={handleInputChange}
                                        required
                                        rows="5"
                                        className="form-input form-textarea"
                                    ></textarea>
                                </div>

                                {submitStatus === 'success' && (
                                    <div className="form-message success">
                                        <span className="material-symbols-outlined">check_circle</span>
                                        <span>Mensagem enviada com sucesso! Entraremos em contato em breve.</span>
                                    </div>
                                )}

                                {submitStatus === 'error' && (
                                    <div className="form-message error">
                                        <span className="material-symbols-outlined">error</span>
                                        <span>Erro ao enviar. Por favor, tente novamente.</span>
                                    </div>
                                )}

                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className={`form-submit ${isSubmitting ? 'submitting' : ''}`}
                                >
                                    {isSubmitting ? 'Enviando...' : 'Enviar Mensagem'}
                                    <span className="material-symbols-outlined">send</span>
                                </button>
                            </form>
                        </div>

                        {/* Sidebar */}
                        <aside className="contact-sidebar">
                            {/* Quick Contact Card */}
                            <div className="contact-card contact-card-primary">
                                <h3 className="card-title">Canais Diretos</h3>
                                <div className="contact-channels">
                                    <a href="https://wa.link/21a1uj" target="_blank" rel="noreferrer" className="contact-channel">
                                        <div className="channel-icon">
                                            <span className="material-symbols-outlined">chat</span>
                                        </div>
                                        <div className="channel-info">
                                            <span className="channel-label">WhatsApp</span>
                                            <span className="channel-value">+55 (19) 99657-5566</span>
                                        </div>
                                    </a>
                                    <div className="contact-channel">
                                        <div className="channel-icon">
                                            <span className="material-symbols-outlined">mail</span>
                                        </div>
                                        <div className="channel-info">
                                            <span className="channel-label">E-mail</span>
                                            <span className="channel-value">fabros@gmail.com</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="card-divider"></div>

                                <h4 className="social-title">Siga nas redes</h4>
                                <div className="social-links">
                                    <a
                                        href="https://www.linkedin.com/in/nutrifabianorodrigues/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="social-link"
                                        aria-label="LinkedIn"
                                        title="LinkedIn"
                                    >
                                        <img src={`${process.env.PUBLIC_URL}/linkedin.png`} alt="LinkedIn" />
                                    </a>
                                    <a
                                        href="https://www.instagram.com/fabianorodriguesnutri/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="social-link"
                                        aria-label="Instagram"
                                        title="Instagram"
                                    >
                                        <img src={`${process.env.PUBLIC_URL}/instagram.png`} alt="Instagram" />
                                    </a>
                                    <a
                                        href="https://www.facebook.com/people/Fabiano-Rodrigues-Nutri/61591259564072/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="social-link"
                                        aria-label="Facebook"
                                        title="Facebook"
                                    >
                                        <img src={`${process.env.PUBLIC_URL}/facebook.png`} alt="Facebook" />
                                    </a>
                                </div>
                            </div>
                        </aside>
                    </div>
                </div>
            </section>

            {/* ================= LOCATION MAP ================= */}
            <LocationMap />
            
        </main>
    );
};

export default Contact;