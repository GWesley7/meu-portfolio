'use client';

import { useEffect } from 'react'; 
import { useApp } from '@/context/AppContext';

export default function Home() {
    const { theme, toggleTheme, language, changeLanguage, t } = useApp();

    useEffect(() => { 
        // Smooth scroll para âncoras
        const handleAnchorClick = (e: any) => {
            const href = e.currentTarget.getAttribute('href');
            if (href && href.startsWith('#')) {
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            }
        }; 

        const links = document.querySelectorAll('a[href^="#"]');
        links.forEach(link => {
            link.addEventListener('click', handleAnchorClick);
        });

        return () => {
            links.forEach(link => {
                link.removeEventListener('click', handleAnchorClick);
            });
        };
    }, []);


  const contactLinks = {
  linkedin: "https://www.linkedin.com/in/gabriel-wesley-3268341b7/",
  github: "https://github.com/GWesley7",
  email: "mailto:gabriel07wesley@gmail.com"
};

  // Certificações 
  const certifications = [
    { name: "Engenharia de Software", institution: "UNESA - Universidade Estácio de Sá", year: "2022 - 2026" },
    { name: "Competência Transversal – Tecnologia da Informação e Comunicação", institution: "ESCOLA SENAI ROBERTO MANGE", year: "2019" },
    { name: "Algoritimo e Lógica de Programção", institution: "ALURA - Escola de tecnologia", year: "2021" },
    { name: "CS50's Introduction to Artificial Intelligence with Python", institution: "HarvardX", year: "2025", status: "Em progresso" },
    // Adicionar mais certificações aqui
  ];

  return (
          <div className="scroll-smooth transition-colors duration-300">

            {/* Botões de Idioma Flutuantes */}
            <div className={`fixed right-6 top-1/2 transform -translate-y-1/2 z-40 flex flex-col space-y-3 ${
              theme === 'dark' ? 'bg-gray-800/90' : 'bg-white/90'
            } rounded-2xl p-3 backdrop-blur-sm border ${
              theme === 'dark' ? 'border-gray-700' : 'border-gray-200'
            } shadow-lg`}>
              
              {/* Português - Brasil */}
              <button
                onClick={() => changeLanguage('pt')}
                className={`w-12 h-12 rounded-full flex items-center justify-center text-sm font-bold transition-all ${
                  language === 'pt'
                    ? theme === 'dark' 
                      ? 'bg-green-500 text-white shadow-lg scale-110' 
                      : 'bg-green-600 text-white shadow-lg scale-110'
                    : theme === 'dark'
                      ? 'bg-gray-700 text-gray-300 hover:bg-gray-600 hover:scale-105'
                      : 'bg-gray-200 text-gray-700 hover:bg-gray-300 hover:scale-105'
                }`}
                title="Português (Brasil)"
              >
                PT
              </button>

              {/* Inglês - EUA */}
              <button
                onClick={() => changeLanguage('en')}
                className={`w-12 h-12 rounded-full flex items-center justify-center text-sm font-bold transition-all ${
                  language === 'en'
                    ? theme === 'dark' 
                      ? 'bg-blue-500 text-white shadow-lg scale-110' 
                      : 'bg-blue-600 text-white shadow-lg scale-110'
                    : theme === 'dark'
                      ? 'bg-gray-700 text-gray-300 hover:bg-gray-600 hover:scale-105'
                      : 'bg-gray-200 text-gray-700 hover:bg-gray-300 hover:scale-105'
              }`}
                title="English (USA)"
              >
                EN
              </button>

              {/* Espanhol - Argentina */}
              <button
                onClick={() => changeLanguage('es')}
                className={`w-12 h-12 rounded-full flex items-center justify-center text-sm font-bold transition-all ${
                  language === 'es'
                    ? theme === 'dark' 
                      ? 'bg-yellow-500 text-white shadow-lg scale-110' 
                      : 'bg-yellow-600 text-white shadow-lg scale-110'
                    : theme === 'dark'
                      ? 'bg-gray-700 text-gray-300 hover:bg-gray-600 hover:scale-105'
                      : 'bg-gray-200 text-gray-700 hover:bg-gray-300 hover:scale-105'
                }`}
                title="Español (Argentina)"
              >
                ES
              </button>
            </div>

      {/* Header Fixo */}
      <header className={`fixed top-0 w-full backdrop-blur-sm z-50 border-b transition-colors duration-300 ${
          theme === 'dark' 
            ? 'bg-gray-900/95 border-gray-800' 
            : 'bg-white/95 border-gray-200'
        }`}>
        <nav className="max-w-6xl mx-auto px-4">
          <div className="flex justify-between items-center h-16">
              {/* Logo */}
              <div className={`font-bold text-xl transition-colors duration-300 ${
                  theme === 'dark' ? 'text-green-400' : 'text-green-600'
                }`}>
                  Gabriel Wesley
              </div>
              
              {/* Menu + Botão Tema */}
              
              <div className="flex space-x-8">
                  <a href="#inicio" className={`transition font-medium ${
                      theme === 'dark' ? 'text-gray-300 hover:text-green-400' : 'text-gray-700 hover:text-green-600'
                    }`}>
                      {t.hello.split(' ')[0]} {/* Mostra "Olá" sem vírgula */}
                  </a>
                  <a href="#sobre" className={`transition font-medium ${
                      theme === 'dark' ? 'text-gray-300 hover:text-green-400' : 'text-gray-700 hover:text-green-600'
                    }`}>
                      {t.about}
                  </a>
                  <a href="#certificacoes" className={`transition font-medium ${
                      theme === 'dark' ? 'text-gray-300 hover:text-green-400' : 'text-gray-700 hover:text-green-600'
                    }`}>
                      {t.certifications}
                  </a>
                    <a href="#projetos" className={`transition font-medium ${
                      theme === 'dark' ? 'text-gray-300 hover:text-green-400' : 'text-gray-700 hover:text-green-600'
                    }`}>
                      {t.projects}
                  </a>
                  <a href="#contato" className={`transition font-medium ${
                      theme === 'dark' ? 'text-gray-300 hover:text-green-400' : 'text-gray-700 hover:text-green-600'
                    }`}>
                      {t.contact}
                  </a>
                </div>

                {/* Botão Toggle Theme */}
                <button
                    onClick={toggleTheme}
                    className={`p-2 rounded-lg transition-all duration-300 ${
                      theme === 'dark' 
                        ? 'bg-gray-700 text-yellow-300 hover:bg-gray-600' 
                        : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                    }`}
                    aria-label="Alternar tema"
                  >
                  {theme === 'dark' ? '☀️' : '🌙'}
                </button>
          </div>
        </nav>
      </header>
              {/* Seção Hero/Início */}
                <section 
                    id="inicio" 
                    className={`
                      min-h-screen flex items-center justify-center 
                      relative overflow-hidden transition-colors 
                      duration-300
                      ${theme === 'dark' 
                        ? 'bg-gradient-to-br from-gray-900 to-gray-800' 
                        : 'bg-gradient-to-br from-blue-50 to-gray-100'
                      }
                    `}
                  >
                  
              {/* Efeito de partículas */}
              <div className="absolute inset-0 opacity-20">
                <div className={`absolute top-1/4 left-1/4 w-2 h-2 rounded-full animate-pulse ${
                  theme === 'dark' ? 'bg-green-400' : 'bg-green-500'
                }`}></div>
                <div className={`absolute top-1/3 right-1/4 w-1 h-1 rounded-full animate-pulse ${
                  theme === 'dark' ? 'bg-blue-400' : 'bg-blue-500'
                }`}></div>
                <div className={`absolute bottom-1/4 left-1/3 w-1 h-1 rounded-full animate-pulse ${
                  theme === 'dark' ? 'bg-purple-400' : 'bg-purple-500'
                }`}></div>
              </div>
              
              <div className="max-w-6xl mx-auto px-4 flex flex-col lg:flex-row items-center justify-between gap-12">
                {/* Texto */}
                <div className="text-center lg:text-left lg:w-1/2">
                  <div className={`mb-4 text-lg transition-colors duration-300 ${
                    theme === 'dark' ? 'text-green-400' : 'text-green-600'
                  }`}>
                    {t.hello}
                  </div>
                  
                  <h1 className={`text-5xl lg:text-6xl font-bold mb-6 transition-colors duration-300 ${
                    theme === 'dark' ? 'text-white' : 'text-gray-900'
                  }`}>
                    {t.name.split(' ')[0]} <span className={theme === 'dark' ? 'text-green-400' : 'text-green-600'}>{
                      t.name.split(' ')[1]
                    }</span>
                  </h1>
                  
                  <div className={`text-xl mb-8 transition-colors duration-300 ${
                    theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
                  }`}>
                    {t.title}
                  </div>

                  <p className={`text-lg mb-12 max-w-lg leading-relaxed transition-colors duration-300 ${
                    theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
                  }`}>
                    {t.description}
                  </p>

                  {/* <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">

                    <a
                      href="#projetos"
                      className={`px-8 py-3 rounded-lg font-medium transition shadow-lg ${
                        theme === 'dark'
                          ? 'bg-green-500 text-gray-900 hover:bg-green-400 hover:shadow-green-500/25'
                          : 'bg-green-600 text-white hover:bg-green-500 hover:shadow-green-600/25'
                      }`}
                    >
                      {t.seeProjects}
                    </a>  

                    <a 

                      href="#contato"           
                      className={`border px-8 py-3 rounded-lg font-medium transition ${
                        theme === 'dark'
                          ? 'border-green-500 text-green-500 hover:bg-green-500/10'
                          : 'border-green-600 text-green-600 hover:bg-green-600/10'
                      }`}
                    >
                      {t.contact}
                    </a>
                  </div> */}

                  <div className="mt-16 flex justify-center lg:justify-start space-x-12">
                    {[t.backend, t.data, t.apis].map((item, index) => (
                      <div key={item} className="text-center">
                        <div className={`font-bold text-2xl transition-colors duration-300 ${
                          theme === 'dark' ? 'text-white' : 'text-gray-900'
                        }`}>
                          {item}
                        </div>
                        <div className={`text-sm transition-colors duration-300 ${
                          theme === 'dark' ? 'text-gray-500' : 'text-gray-600'
                        }`}>
                          {[t.mainFocus, t.experience, t.specialty][index]}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* SUA FOTO - CÓDIGO CORRIGIDO */}
                <div className="lg:w-1/2 flex justify-center">
                        <div
                          className={`w-80 h-80 rounded-2xl border-4 transition-colors duration-300 ${
                            theme === 'dark' ? 'border-green-400' : 'border-green-500'
                          } overflow-hidden shadow-2xl`}
                        >
                          <img
                            src="/foto.jpg"
                            alt="Gabriel Wesley"
                            className="w-full h-full object-cover"
                          />
                        </div>
                      </div>
              </div>
            </section>

      {/* Seção Sobre */}
      <section id="sobre" className={`min-h-screen py-20 px-4 transition-colors duration-300 ${
        theme === 'dark' ? 'bg-gray-800' : 'bg-gray-50'
      }`}>
        <div className="max-w-4xl mx-auto">
          <h2 className={`text-4xl font-bold mb-12 text-center transition-colors duration-300 ${
            theme === 'dark' ? 'text-white' : 'text-gray-900'
          }`}>
            {t.about}
          </h2>
          
          {/* SEU TEXTO AQUI */}
          <div className={`rounded-xl p-8 border transition-colors duration-300 ${
            theme === 'dark' ? 'bg-gray-700/50 border-gray-600' : 'bg-white border-gray-200'
          }`}>
            <div className={`text-lg leading-relaxed space-y-4 transition-colors duration-300 ${
              theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
            }`}>
              <p>
                Sou estudante do 6° semestre de Engenharia de Software e tenho 24 anos. Tenho interesse em desenvolver minha carreira na área de tecnologia, com foco em soluções que unam lógica, inovação e impacto real.
              </p>
              <p>
                Ao longo da minha trajetória, adquiri experiência prática que me proporcionou uma base sólida em análise e manipulação de dados, além de uma visão abrangente sobre o ciclo de desenvolvimento de software.
              </p>
              <p>
                Sou uma pessoa comprometida, proativa e em constante busca por aprendizado, sempre buscando aprimorar minhas habilidades técnicas e contribuir de forma significativa para os projetos dos quais participo.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mt-12">
            <div className="space-y-6">
              <div className={`rounded-lg p-6 border-l-4 transition-colors duration-300 ${
                theme === 'dark' ? 'bg-gray-700/50 border-green-400' : 'bg-white border-green-500'
              }`}>
                <h3 className={`text-xl font-semibold mb-3 transition-colors duration-300 ${
                  theme === 'dark' ? 'text-white' : 'text-gray-900'
                }`}>
                  🎓 Formação
                </h3>
                <p className={theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}>
                  Estudante de <strong className={theme === 'dark' ? 'text-green-400' : 'text-green-600'}>Engenharia de Software</strong> (6° semestre) com foco em desenvolvimento backend e arquitetura de sistemas.
                </p>
              </div>

              <div className={`rounded-lg p-6 border-l-4 transition-colors duration-300 ${
                theme === 'dark' ? 'bg-gray-700/50 border-blue-400' : 'bg-white border-blue-500'
              }`}>
                <h3 className={`text-xl font-semibold mb-3 transition-colors duration-300 ${
                  theme === 'dark' ? 'text-white' : 'text-gray-900'
                }`}>
                  💼 Objetivo
                </h3>
                <p className={theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}>
                  Buscando uma oportunidade em <strong className={theme === 'dark' ? 'text-blue-400' : 'text-blue-600'}>Tecnologia</strong> para aplicar e expandir meus conhecimentos.
                </p>
              </div>
            </div>

            <div className="space-y-6">
              <div className={`rounded-lg p-6 border-l-4 transition-colors duration-300 ${
                theme === 'dark' ? 'bg-gray-700/50 border-purple-400' : 'bg-white border-purple-500'
              }`}>
                <h3 className={`text-xl font-semibold mb-3 transition-colors duration-300 ${
                  theme === 'dark' ? 'text-white' : 'text-gray-900'
                }`}>
                  🚀 Tecnologias
                </h3>
                <div className="flex flex-wrap gap-2">
                  {['Python', 'FastAPI', 'Node.js', 'PostgreSQL', 'MongoDB', 'Docker', 'Git'].map((tech) => (
                    <span key={tech} className={`px-3 py-1 rounded text-sm transition-colors duration-300 ${
                      theme === 'dark' ? 'bg-gray-600 text-gray-200' : 'bg-gray-200 text-gray-700'
                    }`}>
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className={`rounded-lg p-6 border-l-4 transition-colors duration-300 ${
                theme === 'dark' ? 'bg-gray-700/50 border-yellow-400' : 'bg-white border-yellow-500'
              }`}>
                <h3 className={`text-xl font-semibold mb-3 transition-colors duration-300 ${
                  theme === 'dark' ? 'text-white' : 'text-gray-900'
                }`}>
                  📊 Áreas de Interesse
                </h3>
                <p className={theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}>
                  Desenvolvimento Backend, Arquitetura de APIs, Banco de Dados, Ciência de Dados e Boas Práticas de Programação.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Seção Certificações */}
            <section id="certificacoes" className={`min-h-screen py-20 px-4 transition-colors duration-300 ${
        theme === 'dark' ? 'bg-gray-900' : 'bg-white'
      }`}>
        <div className="max-w-4xl mx-auto">
          <h2 className={`text-4xl font-bold mb-12 text-center transition-colors duration-300 ${
            theme === 'dark' ? 'text-white' : 'text-gray-900'
          }`}>
            {t.certifications}
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            {certifications.map((cert, index) => (
              <div key={index} className={`rounded-xl p-6 border transition-all duration-300 hover:scale-105 ${
                theme === 'dark' 
                  ? 'bg-gray-800 border-gray-700 hover:border-green-400' 
                  : 'bg-gray-50 border-gray-200 hover:border-green-500'
              }`}>
                <h3 className={`text-xl font-semibold mb-2 transition-colors duration-300 ${
                  theme === 'dark' ? 'text-white' : 'text-gray-900'
                }`}>
                  {cert.name}
                </h3>
                <p className={`mb-2 transition-colors duration-300 ${
                  theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
                }`}>
                  {cert.institution}
                </p>
                <div className="flex items-center gap-2">
                  <span className={`text-sm px-3 py-1 rounded-full transition-colors duration-300 ${
                    cert.status === 'Em progresso'
                      ? theme === 'dark' 
                        ? 'bg-yellow-500/20 text-yellow-400' 
                        : 'bg-yellow-100 text-yellow-700'
                      : theme === 'dark' 
                        ? 'bg-green-500/20 text-green-400' 
                        : 'bg-green-100 text-green-700'
                  }`}>
                    {cert.status === 'Em progresso' ? '🟡 Em andamento' : cert.year}
                  </span>
                  {cert.status === 'Em progresso' && (
                    <span className={`text-xs px-2 py-1 rounded transition-colors duration-300 ${
                      theme === 'dark' ? 'text-gray-400' : 'text-gray-500'
                    }`}>
                      {cert.year}
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Seção Projetos */}
      <section id="projetos" className={`min-h-screen py-20 px-4 transition-colors duration-300 ${
        theme === 'dark' ? 'bg-gray-800' : 'bg-gray-50'
      }`}>
        <div className="max-w-6xl mx-auto">
          <h2 className={`text-4xl font-bold mb-12 text-center transition-colors duration-300 ${
            theme === 'dark' ? 'text-white' : 'text-gray-900'
          }`}>
            {t.projects}
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Projeto 1 */}
            {/* Projeto Blog API - REAL */}
            <div className={`rounded-xl p-6 border transition-all duration-300 group ${
              theme === 'dark' 
                ? 'bg-gray-700/50 border-gray-600 hover:border-purple-400' 
                : 'bg-white border-gray-200 hover:border-purple-500'
            }`}>
              <div className={`mb-2 font-semibold transition-colors duration-300 ${
                theme === 'dark' ? 'text-purple-400' : 'text-purple-600'
              }`}>
                ✅ PROJETO CONCLUÍDO
              </div>
              <h3 className={`text-2xl font-bold mb-4 transition-colors duration-300 ${
                theme === 'dark' ? 'text-white' : 'text-gray-900'
              }`}>
                🚀 Blog API - Backend
              </h3>
              <p className={`mb-6 leading-relaxed transition-colors duration-300 ${
                theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
              }`}>
                API RESTful completa para sistema de blog com autenticação JWT, CRUD de posts, MongoDB e deploy em produção.
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                {['Node.js', 'Express', 'MongoDB', 'JWT', 'REST API'].map((tech) => (
                  <span key={tech} className={`px-3 py-1 rounded text-sm transition-colors duration-300 ${
                    theme === 'dark' ? 'bg-gray-600 text-purple-400' : 'bg-purple-100 text-purple-700'
                  }`}>
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex gap-3">
                <a 
                  href="https://github.com/Gwesley7/blog-api-backend" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className={`flex-1 py-3 px-4 rounded text-sm text-center transition-all duration-300 ${
                    theme === 'dark' 
                      ? 'bg-purple-600 hover:bg-purple-700 text-white' 
                      : 'bg-purple-500 hover:bg-purple-600 text-white'
                  }`}
                >
                  📁 Código Fonte
                </a>
                <a 
                  href="https://ideal-truth.up.railway.app/api/health" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className={`flex-1 py-3 px-4 rounded text-sm text-center transition-all duration-300 ${
                    theme === 'dark' 
                      ? 'bg-gray-600 hover:bg-gray-500 text-white' 
                      : 'bg-gray-200 hover:bg-gray-300 text-gray-700'
                  }`}
                >
                  🌐 API Online
                </a>
              </div>
            </div>

            {/* Projeto 2 */}
            <div className={`rounded-xl p-6 border transition-all duration-300 group ${
              theme === 'dark' 
                ? 'bg-gray-700/50 border-gray-600 hover:border-blue-400' 
                : 'bg-white border-gray-200 hover:border-blue-500'
            }`}>
              <div className={`mb-2 font-semibold transition-colors duration-300 ${
                theme === 'dark' ? 'text-blue-400' : 'text-blue-600'
              }`}>
                🚧 EM DESENVOLVIMENTO
              </div>
              <h3 className={`text-2xl font-bold mb-4 transition-colors duration-300 ${
                theme === 'dark' ? 'text-white' : 'text-gray-900'
              }`}>
                Sistema de Autenticação
              </h3>
              <p className={`mb-6 leading-relaxed transition-colors duration-300 ${
                theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
              }`}>
                Microserviço de autenticação com registro, login, recuperação de senha e verificação por email.
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                {['Node.js', 'Express', 'MongoDB', 'JWT', 'Redis'].map((tech) => (
                  <span key={tech} className={`px-3 py-1 rounded text-sm transition-colors duration-300 ${
                    theme === 'dark' ? 'bg-gray-600 text-blue-400' : 'bg-blue-100 text-blue-700'
                  }`}>
                    {tech}
                  </span>
                ))}
              </div>
              <button className={`w-full py-3 rounded text-sm cursor-not-allowed transition-colors duration-300 ${
                theme === 'dark' ? 'bg-gray-600 text-gray-400' : 'bg-gray-200 text-gray-500'
              }`} disabled>
                Em Desenvolvimento
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Seção Contato */}
      <section id="contato" className={`min-h-screen py-20 px-4 transition-colors duration-300 ${
        theme === 'dark' ? 'bg-gray-900' : 'bg-white'
      }`}>
        <div className="max-w-2xl mx-auto">
          <h2 className={`text-4xl font-bold mb-12 text-center transition-colors duration-300 ${
            theme === 'dark' ? 'text-white' : 'text-gray-900'
          }`}>
            {t.contactTitle}
          </h2>

          <div className={`rounded-xl p-8 border transition-colors duration-300 ${
            theme === 'dark' ? 'bg-gray-800 border-gray-700' : 'bg-gray-50 border-gray-200'
          }`}>
            <div className="space-y-6">
              {/* Email */}
                <div className="flex items-center space-x-4">
                    <div className={`w-12 h-12 rounded-full flex items-center justify-center transition-colors duration-300 ${
                        theme === 'dark' ? 'bg-green-400' : 'bg-green-500'
                    }`}>
                        {/* Substituir o emoji da câmera pelo SVG do Gmail */}
                        <img src="/gmail.svg" alt="Email" className="w-6 h-6" />
                    </div>
                    <div>
                        <h3 className={`font-semibold transition-colors duration-300 ${
                            theme === 'dark' ? 'text-white' : 'text-gray-900'
                        }`}>
                            Email
                        </h3>
                        <p className={theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}>
                            gabriel07wesley@gmail.com
                        </p>
                </div>
            </div>

              {/* Status */}
              <div className="flex items-center space-x-4">
                <div className={`w-12 h-12 rounded-full flex items-center justify-center transition-colors duration-300 ${
                  theme === 'dark' ? 'bg-blue-400' : 'bg-blue-500'
                }`}>
                  <span className={theme === 'dark' ? 'text-gray-900 font-bold' : 'text-white font-bold'}>💼</span>
                </div>
                <div>
                  <h3 className={`font-semibold transition-colors duration-300 ${
                    theme === 'dark' ? 'text-white' : 'text-gray-900'
                  }`}>
                    {t.professionalStatus}
                  </h3>
                  <p className={theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}>
                    <span className={`px-3 py-1 rounded text-sm transition-colors duration-300 ${
                      theme === 'dark' 
                        ? 'bg-green-500/20 text-green-400' 
                        : 'bg-green-100 text-green-700'
                    }`}>
                      {t.seekingOpportunities}
                    </span>
                  </p>
                </div>
              </div>

                  {/* Links de Contato */}
                <div className="flex justify-center space-x-8 pt-6">
                    <a 
                        href={contactLinks.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`p-4 rounded-full transition-all duration-300 hover:scale-110 ${
                            theme === 'dark' 
                                ? 'bg-blue-600 hover:bg-blue-500' 
                                : 'bg-blue-500 hover:bg-blue-400'
                        }`}
                        title="LinkedIn"
                    >
                        {/* Substituir o emoji 💼 pelo SVG do LinkedIn */}
                        <img src="/linkedin.svg" alt="LinkedIn" className="w-6 h-6 filter invert" />
                    </a>
                    
                    <a 
                        href={contactLinks.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`p-4 rounded-full transition-all duration-300 hover:scale-110 ${
                            theme === 'dark' 
                                ? 'bg-gray-700 hover:bg-gray-600' 
                                : 'bg-gray-600 hover:bg-gray-500'
                        }`}
                        title="GitHub"
                    >
                        {/* Substituir o emoji 🔗 pelo SVG do GitHub */}
                        <img src="/github.svg" alt="GitHub" className="w-6 h-6 filter invert" />
                    </a>
                    
                    
                </div>

                {/* Caixa de disponibilidade - mantendo apenas uma */}
                <div className={`mt-8 p-4 rounded border-l-4 transition-colors duration-300 ${
                    theme === 'dark' 
                        ? 'bg-gray-700 border-yellow-400' 
                        : 'bg-yellow-50 border-yellow-500'
                }`}>
                    <p className={`text-sm transition-colors duration-300 ${
                        theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
                    }`}>
                        {t.availableFor}
                    </p>
                </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}