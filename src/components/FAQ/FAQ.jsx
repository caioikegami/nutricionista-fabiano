import { useState } from 'react';
import { Link } from 'react-router-dom';
import './FAQ.css';

const FAQ = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const faqs = [
        {
            id: 1,
            question: 'O que é a Nutrição Funcional?',
            answer: 'A Nutrição Funcional é uma abordagem que investiga como o seu corpo está funcionando — não apenas o que você come. Em vez de prescrever uma dieta padrão, ela busca identificar os mecanismos fisiológicos por trás dos seus sintomas: por que você sente fadiga, por que não consegue emagrecer, por que sua glicemia está subindo. A partir dessa investigação, construímos um protocolo que corrige a causa do desequilíbrio, não apenas controla o sintoma.'
        },
        {
            id: 2,
            question: 'Qual é a diferença entre nutrição convencional e funcional?',
            answer: `Nutrição convencional trabalha com uma pergunta: "quantas calorias você precisa?" A Nutrição Funcional trabalha com uma pergunta diferente: "por que seu metabolismo não está funcionando como deveria?"

            A diferença prática: a convencional prescreve restrição calórica. A funcional investiga resistência à insulina, inflamação, desequilíbrios hormonais e disbiose intestinal — e corrige esses mecanismos. Além disso, interpretamos seus exames laboratoriais sob uma lente funcional, identificando desequilíbrios que os valores de referência "normais" escondem.`
        },
        {
            id: 3,
            question: 'Preciso eliminar calorias e focar apenas no peso?',
            answer: `Não. A contagem de calorias ignora o que realmente importa: como seu metabolismo responde ao que você come.

                    Duas pessoas podem comer exatamente as mesmas calorias e ter respostas metabólicas opostas. Se você tem resistência à insulina, um mesmo alimento que seria inofensivo para outra pessoa pode gerar picos glicêmicos, armazenamento de gordura e inflamação em você.
                    O foco é corrigir o mecanismo — sensibilidade à insulina, eixo inflamatório, saúde intestinal. Quando o metabolismo funciona, a composição corporal se ajusta como consequência, não como meta.`
        },
        {
            id: 4,
            question: 'Para quem é indicada a nutrição funcional?',
            answer: `É indicada principalmente para adultos que têm sintomas ou exames alterados, mas não encontraram respostas na abordagem convencional.
                    Procuramos especialmente pessoas com:

                - Resistência à insulina ou glicemia elevada
                - Dificuldade de emagrecer que não responde a dieta
                - Fadiga persistente, mesmo dormindo bem
                - Síndrome metabólica ou esteatose hepática
                - Inflamação crônica (PCR elevado, dores articulares)
                - Dislipidemias (triglicérides altos, HDL baixo)
                - Disbioses e desconfortos intestinais

                    Também atendemos atletas e praticantes de atividade física que querem otimizar performance e recuperação através da Nutrição Esportiva Funcional.`
        },
        {
            id: 5,
            question: 'Como funciona a consulta com um nutricionista funcional?',
            answer: `A consulta é dividida em etapas:
                    1. Anamnese metabólica: análise detalhada da sua dieta, sono, estresse, atividade física, histórico familiar, medicações e sintomas físicos (queda de cabelo, dores de cabeça, inchaço, fadiga, etc.).
                    2. Interpretação de exames: análise dos seus exames laboratoriais sob a ótica funcional — identificando desequilíbrios nos eixos glicêmico, inflamatório, hormonal, intestinal e nutricional. Se necessário, solicitamos exames complementares.
                    3. Construção do protocolo: plano alimentar individualizado, estratégia de suplementação direcionada e ajustes de estilo de vida — tudo baseado no que a investigação revelou.
                    4. Acompanhamento: consultas periódicas para monitorar sintomas, reavaliar marcadores laboratoriais e ajustar o protocolo conforme a resposta metabólica.`
        },
        {
            id: 6,
            question: 'Quanto tempo leva para ver resultados?',
            answer: `Depende do eixo metabólico afetado e da adesão ao protocolo, mas em geral:

                - Energia e disposição: melhorias em 2 a 4 semanas
                - Glicemia, insulina e triglicérides: alterações significativas em 8 a 12 semanas
                - Composição corporal: mudanças consistentes a partir de 12 semanas
                - Marcadores inflamatórios e hormonais: 3 a 6 meses

                    Os resultados variam conforme o individual bioquímico de cada pessoa. O acompanhamento é contínuo e o protocolo é ajustado conforme a resposta — porque bioquímica é dinâmica.`
        },
        {
            id: 7,
            question: 'Preciso fazer exames para começar?',
            answer: `Sim, exames são parte fundamental do método.

                        Além do hemograma e perfil lipídico básicos, frequentemente solicitamos marcadores que a avaliação convencional costuma ignorar: insulina basal, HOMA-IR, PCR ultrassensível, ferritina, homocisteína, vitamina D, painel hormonal completo e, quando indicado, testes genéticos.

                        Se você já tem exames recentes, traga na primeira consulta. Se não, solicitamos o painel adequado ao seu quadro. A escolha dos marcadores depende dos seus sintomas e objetivos — não pedimos o mesmo painel para todo mundo.`
        },
        {
            id: 8,
            question: 'Como é o acompanhamento após a consulta inicial?',
            answer: `O acompanhamento é contínuo porque bioquímica é dinâmica — o que funciona hoje pode precisar de ajuste em 3 meses. Modalidades disponíveis: Consultas quinzenais ou mensais (presencial em Indaiatuba/SP ou online), acompanhamento via app com troca de mensagens, check-ins periódicos com reavaliação de exames. Em cada retorno, monitoramos sintomas, marcadores laboratoriais, composição corporal e qualidade de vida. O protocolo é ajustado conforme a resposta metabólica — não é um plano estático que você recebe uma vez e segue para sempre.`
        },
        {
            id: 9,
            question: 'O que é interpretação funcional de exames?',
            answer: `Os valores de referência dos exames laboratoriais são baseados na média populacional — e essa média inclui pessoas com problemas de saúde. Um valor "dentro da normalidade" pode já indicar um desequilíbrio em estágio inicial.  Interpretamos seus exames sob faixas mais restritas e relacionamos marcadores entre si, identificando padrões que a avaliação convencional ignora.`
        },
        {
            id: 10,
            question: 'Atende online ou presencialmente?',
            answer: `Atendimento presencial em Indaiatuba/SP e online por videochamada para pacientes em qualquer localidade. O protocolo de exames e acompanhamento funciona igualmente nas duas modalidades.`
        },
            {
            id: 11,
            question: 'O Fabiano também atende atletas?',
            answer: `Sim. Além da investigação metabólica clínica, atuo com Nutrição Esportiva Funcional — periodização nutricional, composição corporal por bioimpedância, suplementação direcionada e otimização de recuperação. Para atletas e praticantes de atividade física de todos os níveis que querem extrair o máximo do treinamento.`
        },

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