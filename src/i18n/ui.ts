export const ui = {
  en: {
    role: 'Senior Software Engineer',
    description:
      'Senior Software Engineer specializing in backend development, distributed systems, and data integration',
    nav: {
      about: 'About',
      experience: 'Experience',
      work: 'Work',
      skills: 'Skills',
      contact: 'Contact',
    },
    language: { switch: 'ES' },
    hero: {
      specialist: 'Python specialist',
      specialistText:
        'with 5+ years of experience developing data-intensive systems.',
      paragraph:
        'I am focused on building software that is reliable, secure, and actually enjoyable to use. I pay close attention to details, and strongly believe that working closely with users is critical to build better products.',
      getInTouch: 'Get in touch',
    },
    about: {
      title: 'About me',
      background: 'Background:',
      backgroundText:
        'I started programming with Java at university in 2014 and transitioned to the Python/JS ecosystems in 2019.',
      previousWork: 'Previous work:',
      previousWorkText:
        'I have worked extensively on backend services, system architecture, data pipelines, AI integration, M365 and enterprise cloud environments.',
      humanSide: 'The human side:',
      humanSideText:
        "Off the clock, you'll find me exercising, cooking, exploring cybersecurity reports and AI trends, or automating something.",
    },
    experience: { title: 'Experience', present: 'Present' },
    projects: {
      title: 'Projects',
      problem: 'Problem',
      solution: 'Solution',
      result: 'Result',
      repository: 'Repository',
      demo: 'Demo',
    },
    skills: {
      title: 'Technical Skills',
      languages: 'Languages',
      backend: 'Backend',
      databases: 'Databases',
      infrastructure: 'Infrastructure',
      cloud: 'Cloud Services',
      tools: 'Tools & Platforms',
      testing: 'Testing',
      ai: 'AI & Generative Tools',
    },
    contact: {
      title: 'Get in Touch',
      text: "Interested in working together? I'm always open to discussing new opportunities, interesting projects, or just having a conversation.",
      email: 'Send me an email',
      linkedin: 'Connect on LinkedIn',
      github: 'Follow on GitHub',
    },
    footer: {
      description:
        'Senior Software Engineer specializing in distributed systems and data infrastructure.',
      quickLinks: 'Quick Links',
      backToTop: 'Back to top',
      rights: 'All rights reserved.',
    },
    common: {
      themeToggle: 'Switch to dark mode',
    },
  },
  es: {
    role: 'Ingeniero de Software Senior',
    description:
      'Ingeniero de Software Senior especializado en desarrollo backend, sistemas distribuidos e integración de datos',
    nav: {
      about: 'Sobre mí',
      experience: 'Experiencia',
      work: 'Trabajo',
      skills: 'Habilidades',
      contact: 'Contacto',
    },
    language: { switch: 'EN' },
    hero: {
      specialist: 'Especialista en Python',
      specialistText:
        'con más de 5 años de experiencia desarrollando sistemas intensivos en datos.',
      paragraph:
        'Me enfoco en construir software confiable, seguro y realmente agradable de usar. Presto mucha atención a los detalles y creo firmemente que trabajar de cerca con los usuarios es fundamental para crear mejores productos.',
      getInTouch: 'Contáctame',
    },
    about: {
      title: 'Sobre mí',
      background: 'Formación:',
      backgroundText:
        'Comencé a programar con Java en la universidad en 2014 y pasé a los ecosistemas de Python/JS en 2019.',
      previousWork: 'Experiencia previa:',
      previousWorkText:
        'He trabajado ampliamente en servicios backend, arquitectura de sistemas, pipelines de datos, integración de IA, M365 y entornos empresariales en la nube.',
      humanSide: 'El lado humano:',
      humanSideText:
        'Fuera del trabajo, me encontrarás haciendo ejercicio, cocinando, explorando informes de ciberseguridad y tendencias de IA, o automatizando algo.',
    },
    experience: { title: 'Experiencia', present: 'Actualidad' },
    projects: {
      title: 'Proyectos',
      problem: 'Problema',
      solution: 'Solución',
      result: 'Resultado',
      repository: 'Repositorio',
      demo: 'Demo',
    },
    skills: {
      title: 'Habilidades técnicas',
      languages: 'Lenguajes',
      backend: 'Backend',
      databases: 'Bases de datos',
      infrastructure: 'Infraestructura',
      cloud: 'Servicios cloud',
      tools: 'Herramientas y plataformas',
      testing: 'Testing',
      ai: 'IA y herramientas generativas',
    },
    contact: {
      title: 'Contacto',
      text: '¿Te interesa trabajar conmigo? Siempre estoy abierto a conversar sobre nuevas oportunidades, proyectos interesantes o simplemente intercambiar ideas.',
      email: 'Envíame un correo',
      linkedin: 'Conectar en LinkedIn',
      github: 'Seguir en GitHub',
    },
    footer: {
      description:
        'Ingeniero de Software Senior especializado en sistemas distribuidos e infraestructura de datos.',
      quickLinks: 'Enlaces rápidos',
      backToTop: 'Volver arriba',
      rights: 'Todos los derechos reservados.',
    },
    common: {
      themeToggle: 'Cambiar al modo oscuro',
    },
  },
} as const;

export type Locale = keyof typeof ui;
export const defaultLang = 'en';

export function useTranslations(locale: Locale) {
  return ui[locale] ?? ui['en'];
}
