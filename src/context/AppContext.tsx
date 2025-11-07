'use client';

import React, { createContext, useContext, useEffect, useState } from 'react';

type Theme = 'light' | 'dark';
type Language = 'pt' | 'en' | 'es';

// Traduções simples para começar
const translations = {
  pt: {
    hello: "Olá, Mundo! 👋",
    name: "Gabriel Wesley",
    title: "Desenvolvedor Backend | Análise de Dados | Engenharia de Software",
    description: "Construindo soluções robustas e escaláveis com foco em qualidade de código e melhores práticas de desenvolvimento.",
    seeProjects: "Ver Projetos",
    contact: "Entrar em Contato",
    backend: "Backend",
    data: "Dados", 
    apis: "APIs",
    mainFocus: "Foco Principal",
    experience: "Experiência",
    specialty: "Especialidade",
    about: "Sobre Mim",
    projects: "Meus Projetos",
    contactTitle: "Vamos Conversar?",
    professionalStatus: "Status Profissional", 
    seekingOpportunities: "Buscando Oportunidades",
    availableFor: "Disponível para oportunidades",
    certifications: "Certificações e Cursos",
  },
  en: {
    hello: "Hello, World! 👋", 
    name: "Gabriel Wesley",
    title: "Backend Developer | Data Analysis | Software Engineering",
    description: "Building robust and scalable solutions with focus on code quality and best development practices.",
    seeProjects: "See Projects",
    contact: "Contact Me", 
    backend: "Backend",
    data: "Data",
    apis: "APIs",
    mainFocus: "Main Focus",
    experience: "Experience",
    specialty: "Specialty",
    about: "About Me",
    projects: "My Projects",
    contactTitle: "Let's Talk?",
    professionalStatus: "Professional Status",
    seekingOpportunities: "Seeking Opportunities", 
    availableFor: "Available for opportunities",
    certifications: "Certifications and Courses",
  },
  es: {
    hello: "¡Hola, Mundo! 👋",
    name: "Gabriel Wesley", 
    title: "Desarrollador Backend | Análisis de Datos | Ingeniería de Software",
    description: "Construyendo soluciones robustas y escalables con enfoque en calidad de código y mejores prácticas de desarrollo.",
    seeProjects: "Ver Proyectos",
    contact: "Contactar",
    backend: "Backend",
    data: "Datos",
    apis: "APIs", 
    mainFocus: "Enfoque Principal",
    experience: "Experiencia",
    specialty: "Especialidad",
    about: "Sobre Mí",
    projects: "Mis Proyectos", 
    contactTitle: "¿Hablemos?",
    professionalStatus: "Estado Profesional",
    seekingOpportunities: "Buscando Oportunidades",
    availableFor: "Disponible para oportunidades",
    certifications: "Certificaciones y Cursos",
  }
};

type AppContextType = {
  theme: Theme;
  language: Language;
  toggleTheme: () => void;
  changeLanguage: (lang: Language) => void;
  t: typeof translations.pt;
};

const AppContext = createContext<AppContextType | undefined>(undefined);

export function AppProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Theme>('dark');
  const [language, setLanguage] = useState<Language>('pt');

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') as Theme;
    const savedLanguage = localStorage.getItem('language') as Language;
    
    if (savedTheme) setTheme(savedTheme);
    if (savedLanguage) setLanguage(savedLanguage);
  }, []);

  useEffect(() => {
    localStorage.setItem('theme', theme);
    document.documentElement.className = theme;
  }, [theme]);

  useEffect(() => {
    localStorage.setItem('language', language);
  }, [language]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light');
  };

  const changeLanguage = (lang: Language) => {
    setLanguage(lang);
  };

  const t = translations[language];

  return (
    <AppContext.Provider value={{ theme, language, toggleTheme, changeLanguage, t }}>
      {children}
    </AppContext.Provider>
  );
}

export function useApp() {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error('useApp must be used within a AppProvider');
  }
  return context;
}