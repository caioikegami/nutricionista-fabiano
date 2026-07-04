import React, { useEffect } from 'react';
import useSEO from '../hooks/useSEO';
import '../styles/privacy-policy.css';

const PrivacyPolicy = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    useSEO({
        title: 'Política de Privacidade | Dr. Fabiano Rodrigues',
        description: 'Conheça como protegemos seus dados pessoais. Política de privacidade do Dr. Fabiano Rodrigues - Nutricionista Funcional.',
        canonical: 'https://www.drfabiano.com.br/privacidade',
        keywords: 'política de privacidade, proteção de dados, privacidade',
    });

    return (
        <main className="privacy-policy-page">
            <section className="privacy-hero">
                <div className="container">
                    <h1 className="text-headline-lg">Política de Privacidade</h1>
                    <p className="subtitle">Última atualização: {new Date().getFullYear()}</p>
                </div>
            </section>

            <section className="privacy-content">
                <div className="container">
                    <div className="toc">
                        <h2 className="text-headline-sm">Índice</h2>
                        <ul className="toc-list">
                            <li><a href="#introducao">Introdução</a></li>
                            <li><a href="#coleta">Coleta de Dados</a></li>
                            <li><a href="#uso">Uso dos Dados</a></li>
                            <li><a href="#protecao">Proteção de Dados</a></li>
                            <li><a href="#direitos">Seus Direitos</a></li>
                            <li><a href="#seguranca">Segurança</a></li>
                            <li><a href="#contato">Contato</a></li>
                        </ul>
                    </div>

                    {/* Introdução */}
                    <section id="introducao" className="policy-section">
                        <h2 className="text-headline-md">1. Introdução</h2>
                        <p>
                            A Política de Privacidade estabelecida pelo Dr. Fabiano Rodrigues trata sobre
                            a utilização segura e responsável de dados pessoais. Essa política é parte
                            inerente dos nossos Termos de Uso e ressalta que os dados pessoais tratados
                            por este serviço serão processados em conformidade com a legislação em vigor.
                        </p>
                        <p>
                            Nos comprometemos a proteger sua privacidade e a manter a confidencialidade
                            de suas informações pessoais dentro dos limites legais estabelecidos pela
                            Lei Geral de Proteção de Dados (LGPD).
                        </p>
                    </section>

                    {/* Coleta de Dados */}
                    <section id="coleta" className="policy-section">
                        <h2 className="text-headline-md">2. Coleta de Dados Pessoais</h2>
                        <p>
                            Coletamos informações pessoais que você fornece voluntariamente, tais como:
                        </p>
                        <ul className="policy-list">
                            <li>Nome completo</li>
                            <li>Endereço de e-mail</li>
                            <li>Número de telefone</li>
                            <li>Data de nascimento</li>
                            <li>Histórico de saúde e informações nutricionais</li>
                            <li>Endereço físico</li>
                            <li>Informações de pagamento</li>
                            <li>Dados coletados automaticamente (cookies, análises de acesso)</li>
                        </ul>
                        <p className="note">
                            <strong>Observação:</strong> Você não é obrigado a fornecer essas informações,
                            mas a falta delas pode impedir que você utilize plenamente nossos serviços.
                        </p>
                    </section>

                    {/* Uso dos Dados */}
                    <section id="uso" className="policy-section">
                        <h2 className="text-headline-md">3. Como Utilizamos seus Dados</h2>
                        <p>Utilizamos os dados pessoais coletados para:</p>
                        <ul className="policy-list">
                            <li>Prestar serviços de nutrição funcional personalizada</li>
                            <li>Agendar e gerenciar consultas nutricionais</li>
                            <li>Enviar informações sobre nossos serviços e produtos</li>
                            <li>Responder suas dúvidas e solicitações</li>
                            <li>Melhorar nossos serviços e experiência do usuário</li>
                            <li>Cumprir obrigações legais e regulatórias</li>
                            <li>Processar pagamentos de consultas e produtos</li>
                            <li>Enviar comunicações de marketing (com seu consentimento)</li>
                        </ul>
                    </section>

                    {/* Proteção de Dados */}
                    <section id="protecao" className="policy-section">
                        <h2 className="text-headline-md">4. Proteção de Dados Pessoais</h2>
                        <p>
                            O Dr. Fabiano Rodrigues, no papel de responsável pelas informações pessoais
                            dos usuários, cumpre todas as legislações inerentes ao uso correto dos dados
                            pessoais de forma a preservar a privacidade.
                        </p>
                        <p>
                            Este compromisso inclui:
                        </p>
                        <ul className="policy-list">
                            <li>Utilizar criptografia para proteger dados sensíveis</li>
                            <li>Implementar protocolos de segurança de ponta</li>
                            <li>Restringir o acesso a dados pessoais apenas ao pessoal autorizado</li>
                            <li>Realizar treinamentos periódicos sobre proteção de dados</li>
                            <li>Manter backups seguros de seus dados</li>
                        </ul>
                    </section>

                    {/* Direitos do Usuário */}
                    <section id="direitos" className="policy-section">
                        <h2 className="text-headline-md">5. Seus Direitos</h2>
                        <p>
                            De acordo com a Lei Geral de Proteção de Dados (LGPD), você tem o direito de:
                        </p>
                        <ul className="policy-list">
                            <li><strong>Acessar:</strong> Solicitar acesso aos seus dados pessoais</li>
                            <li><strong>Retificar:</strong> Corrigir informações imprecisas ou incompletas</li>
                            <li><strong>Deletar:</strong> Solicitar a exclusão de seus dados (direito ao esquecimento)</li>
                            <li><strong>Portar:</strong> Receber seus dados em formato estruturado</li>
                            <li><strong>Objetar:</strong> Manifestar objeção ao processamento de seus dados</li>
                            <li><strong>Revogar Consentimento:</strong> Retirar consentimento para coleta de dados</li>
                        </ul>
                    </section>

                    {/* Segurança */}
                    <section id="seguranca" className="policy-section">
                        <h2 className="text-headline-md">6. Segurança de Dados</h2>
                        <p>
                            A violação de dados pessoais é uma violação de segurança que provoque, de modo
                            acidental ou ilícito, a destruição, a perda, a alteração, a divulgação ou o
                            acesso não autorizado a dados pessoais.
                        </p>
                        <p>
                            Em caso de violação que possa causar alto risco para seus direitos e liberdades
                            pessoais, nos comprometemos a:
                        </p>
                        <ul className="policy-list">
                            <li>Comunicar você em prazo adequado</li>
                            <li>Descrever a natureza da violação</li>
                            <li>Informar as medidas que estamos tomando</li>
                            <li>Fornecer recomendações para mitigar riscos</li>
                        </ul>
                        <p className="note">
                            <strong>Responsabilidade:</strong> O Dr. Fabiano Rodrigues não será responsável
                            pela instalação de códigos maliciosos (vírus, trojans, malware, worm) em
                            equipamentos de usuários, exceto se comprovada negligência.
                        </p>
                    </section>

                    {/* Cookies */}
                    <section className="policy-section">
                        <h2 className="text-headline-md">7. Cookies e Rastreamento</h2>
                        <p>
                            Nosso site utiliza cookies para melhorar sua experiência de navegação.
                            Cookies são pequenos arquivos armazenados no seu dispositivo que nos ajudam a:
                        </p>
                        <ul className="policy-list">
                            <li>Lembrar suas preferências</li>
                            <li>Analisar o uso do site</li>
                            <li>Personalizar conteúdo</li>
                            <li>Manter você conectado</li>
                        </ul>
                        <p>
                            Você pode desabilitar cookies em suas configurações de navegador, mas isso
                            pode afetar a funcionalidade do site.
                        </p>
                    </section>

                    {/* Retenção de Dados */}
                    <section className="policy-section">
                        <h2 className="text-headline-md">8. Retenção de Dados</h2>
                        <p>
                            Reteremos seus dados pessoais pelo tempo necessário para fornecer nossos
                            serviços e cumprir obrigações legais. Após o término do relacionamento,
                            reteremos dados conforme exigido por lei ou segurança.
                        </p>
                    </section>

                    {/* Terceiros */}
                    <section className="policy-section">
                        <h2 className="text-headline-md">9. Compartilhamento com Terceiros</h2>
                        <p>
                            Não compartilhamos seus dados pessoais com terceiros sem seu consentimento,
                            exceto quando necessário para:
                        </p>
                        <ul className="policy-list">
                            <li>Prestar serviços (processadores de pagamento, hospedagem)</li>
                            <li>Cumprir obrigações legais</li>
                            <li>Proteger direitos e segurança</li>
                        </ul>
                        <p>
                            Todos os terceiros são obrigados a manter a confidencialidade de seus dados.
                        </p>
                    </section>

                    {/* Alterações */}
                    <section className="policy-section">
                        <h2 className="text-headline-md">10. Alterações nesta Política</h2>
                        <p>
                            Podemos atualizar esta Política de Privacidade periodicamente. Notificaremos
                            você sobre qualquer alteração significativa publicando a nova versão nesta
                            página e atualizando a data de "última atualização" no topo.
                        </p>
                        <p>
                            Seu uso continuado do site após tais modificações constitui aceitação das
                            alterações.
                        </p>
                    </section>

                    {/* Contato */}
                    <section id="contato" className="policy-section cta-section">
                        <h2 className="text-headline-md">11. Entre em Contato</h2>
                        <p>
                            Se você tiver dúvidas sobre esta Política de Privacidade ou deseje exercer
                            seus direitos de proteção de dados, entre em contato conosco:
                        </p>
                        <div className="contact-info">
                            <div className="contact-item">
                                <h3>E-mail</h3>
                                <a href="mailto:fabrosnutricao@gmail.com">fabrosnutricao@gmail.com</a>
                            </div>
                            <div className="contact-item">
                                <h3>Telefone</h3>
                                <a href="tel:+5519996575566">+55 (19) 99657-5566</a>
                            </div>
                            <div className="contact-item">
                                <h3>Endereço</h3>
                                <p>
                                    Av. Coronel Antônio Estanislau do Amaral, 277<br />
                                    Indaiatuba - SP<br />
                                    CEP: 13340-480
                                </p>
                            </div>
                        </div>
                    </section>

                    {/* Conformidade */}
                    <section className="policy-section compliance">
                        <h2 className="text-headline-md">Conformidade</h2>
                        <p>
                            Esta Política de Privacidade está em conformidade com:
                        </p>
                        <ul className="policy-list">
                            <li>Lei Geral de Proteção de Dados (LGPD) - Lei nº 13.709/2018</li>
                            <li>Constituição Federal - Artigo 37 (Princípio da Publicidade)</li>
                            <li>Normas internacionais de proteção de dados</li>
                        </ul>
                    </section>
                </div>
            </section>
        </main>
    );
};

export default PrivacyPolicy;