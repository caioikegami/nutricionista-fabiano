import { useState } from 'react';
import { Link } from 'react-router-dom';
import './FAQ.css';

const FAQ = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const faqs = [
        {
            id: 1,
            question: 'O que é a Nutrição Funcional?',
            answer: 'É uma área da ciência da nutrição que foca no funcionamento integrado do corpo. Em vez de padronizar dietas, ela busca compreender como os alimentos interagem com a genética, o metabolismo e o estilo de vida de cada pessoa para promover a saúde e prevenir doenças.'
        },
        {
            id: 2,
            question: 'Qual é a diferença entre nutrição convencional e funcional?',
            answer: 'Enquanto a nutrição convencional atua muitas vezes com foco na perda de peso ou na restrição calórica, a nutrição funcional prioriza a qualidade dos alimentos, a absorção de nutrientes pelas células, a saúde intestinal e a correção de deficiências ou excessos.'
        },
        {
            id: 3,
            question: 'O que são "alimentos funcionais"?',
            answer: 'São alimentos ou ingredientes que, além de nutrir, contêm compostos bioativos que oferecem benefícios fisiológicos, metabólicos e de proteção à saúde (como ação antioxidante ou anti-inflamatória), ajudando na prevenção de doenças crônicas.'
        },
        {
            id: 4,
            question: 'Preciso eliminar calorias e focar apenas no peso?',
            answer: 'Não. O foco central não é a contagem de calorias, mas a densidade nutricional. O objetivo é nutrir o organismo adequadamente para restabelecer o equilíbrio, o que naturalmente auxilia no controle de peso, na disposição e no bem-estar.'
        },
        {
            id: 5,
            question: 'Para quem é indicada a nutrição funcional?',
            answer: 'É indicada para qualquer pessoa que busque melhoria na qualidade de vida, prevenção de doenças e tratamento de condições crônicas. É muito procurada para lidar com desconfortos gastrointestinais, fadiga e falta de energia, desequilíbrios hormonais, doenças autoimunes, diabetes e obesidade.'
        },
        {
            id: 6,
            question: 'Como funciona a consulta com um nutricionista funcional?',
            answer: 'A consulta é bastante detalhada. O profissional fará um rastreamento metabólico, analisando a dieta, a qualidade do sono, os níveis de estresse, a prática de atividades físicas, o histórico familiar e os sinais e sintomas físicos (como queda de cabelo, dores de cabeça, inchaços, etc.)'
        },
        {
            id: 7,
            question: 'Quanto tempo leva para ver resultados?',
            answer: 'Os resultados variam conforme o individual bioquímico de cada pessoa. Geralmente, você começa a sentir melhorias em energia e disposição entre 2 a 4 semanas. Para resultados mais significativos em composição corporal e saúde metabólica, recomenda-se acompanhamento de 8 a 12 semanas.'
        },
        {
            id: 8,
            question: 'A nutrição funcional funciona para crianças?',
            answer: 'Sim, totalmente! Muitas crianças enfrentam problemas como alergias, problemas digestivos e falta de concentração que podem ser abordados através da nutrição funcional. A abordagem é sempre adaptada à idade e necessidades específicas da criança.'
        },
        {
            id: 9,
            question: 'Preciso fazer exames para começar?',
            answer: 'É altamente recomendado! Exames laboratoriais complementam o diagnóstico e ajudam a identificar deficiências nutricionais, desequilíbrios hormonais e inflamação sistêmica. Isso torna o protocolo mais preciso e efetivo.'
        },
        {
            id: 10,
            question: 'Como é o acompanhamento após a consulta inicial?',
            answer: 'Oferecemos diferentes modalidades: consultas quinzenais ou mensais, acompanhamento via app com troca de mensagens, e check-ins periódicos. Você escolhe a modalidade que melhor se encaixa no seu estilo de vida.'
        }
    ];

    const toggleFAQ = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <section id="faq" className="faq-section">
            <div className="container">
                <div className="faq-header">
                    <h2 className="text-headline-lg">Perguntas Frequentes</h2>
                    <div className="divider"></div>
                    <p className="faq-subtitle">
                        Dúvidas comuns sobre nutrição funcional e nossos serviços
                    </p>
                </div>
                <div className="faq-grid">
                    {faqs.map((faq, index) => (
                        <div
                            key={faq.id}
                            className={`faq-item ${activeIndex === index ? 'active' : ''}`}
                        >
                            <button
                                className="faq-question"
                                onClick={() => toggleFAQ(index)}
                                aria-expanded={activeIndex === index}
                            >
                                <span className="question-text">{faq.question}</span>
                                <span className="faq-icon material-symbols-outlined">
                                    expand_more
                                </span>
                            </button>
                            <div className="faq-answer">
                                <p>{faq.answer}</p>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="faq-cta">
                    <p>Ainda tem dúvidas?</p>
                    <Link to="/contato" className="btn btn-primary">
                        Entre em Contato
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default FAQ;