export type Locale = 'en' | 'es';

export const defaultLocale: Locale = 'en';
export const supportedLocales: Locale[] = ['en', 'es'];

export const translations = {
  en: {
    nav: {
      about: 'About',
      experience: 'Experience',
      work: 'Work',
      skills: 'Skills',
      contact: 'Contact',
    },
    language: {
      label: 'ES',
      ariaLabel: 'Switch to Spanish',
    },
    hero: {
      title: 'Senior Software Engineer',
      lead: '<strong>Python specialist</strong> with 5+ years of experience developing data-intensive systems.',
      body: 'I am focused on building software that is reliable, secure, and actually enjoyable to use. I pay close attention to details, and strongly believe that working closely with users is critical to build better products.',
      contact: 'Get in touch',
    },
    about: {
      title: 'About me',
      backgroundLabel: 'Background:',
      background: 'I started programming with Java at university in 2014 and transitioned to the Python/JS ecosystems in 2019.',
      previousLabel: 'Previous work:',
      previous: 'I have worked extensively on backend services, system architecture, data pipelines, AI integration, M365 and enterprise cloud environments.',
      humanLabel: 'The human side:',
      human: "Off the clock, you'll find me exercising, cooking, exploring cybersecurity reports and AI trends, or automating something.",
    },
    experience: {
      title: 'Experience',
      present: 'Present',
      entries: {
        '01-teleperformance-lead': {
          role: 'Lead Software Developer',
          summary: 'Led development and maintenance of a distributed orchestration platform supporting over 2000 ETL pipelines',
          highlights: [
            'Developed and maintained a distributed orchestration platform using Python, Javascript, Django, SQL Server, Microsoft Graph and Entra ID to support over 2000 ETL pipelines for 5+ years',
            'Led 6 company-wide projects to automatically deliver KPI reports over email, automating reporting workflows with Python and SSIS',
            'Built chatbot prototypes for Teams with Microsoft Azure AI services in hybrid cloud environments using C#',
            'Collaborated with senior management to advise on project direction, scope, and protocols',
            'Conducted technical interviews for more than 20 candidates to hire for senior developer roles',
          ],
        },
        '02-teleperformance-analyst': {
          role: 'Data Analyst',
          summary: 'Built data visualization and automation projects using SQL Server, SSIS, Power BI, and Python',
          highlights: [
            'Built 10+ data visualization and automation projects using SQL Server, SSIS, Power BI, Excel, and Python',
            'Designed and implemented automated reporting solutions that reduced manual reporting workload',
            'Created complex Power BI dashboards for executive and operational reporting',
            'Developed Python scripts for data pipeline automation and Excel automation with VBA',
          ],
        },
      },
    },
    work: {
      title: 'Selected Technical Work',
      problem: 'Problem',
      solution: 'Solution',
      result: 'Result',
      repository: 'Repository',
      demo: 'Demo',
      projects: {
        '01-orchestration-platform': {
          title: 'Distributed ETL Orchestration Platform',
          summary: 'A scalable platform managing 2000+ enterprise data pipelines in production',
          problem: 'Enterprise needed to orchestrate and monitor thousands of ETL pipelines across multiple systems with visibility into execution status, error handling, and performance metrics.',
          solution: 'Built a distributed orchestration platform using Python and Django backend with JavaScript frontend, integrated with SQL Server for persistence and Microsoft Graph/Entra ID for enterprise authentication. Platform provides pipeline scheduling, monitoring, alerting, and comprehensive logging.',
          result: 'Successfully orchestrated 2000+ pipelines for 5+ years with 99%+ uptime. Reduced manual monitoring overhead and enabled self-service pipeline management across 100+ users.',
        },
        '02-kpi-reporting': {
          title: 'Automated KPI Reporting System',
          summary: 'Enterprise-wide automated KPI reporting system delivering insights to stakeholders via email',
          problem: 'Manual KPI report generation was time-consuming and error-prone. Stakeholders needed consistent, timely access to key performance metrics without manual intervention.',
          solution: 'Built an automated reporting pipeline using Python and SSIS that extracts data from multiple sources, performs aggregations and transformations, and generates formatted reports delivered via email. Integrated with orchestration platform for scheduling and monitoring.',
          result: 'Automated 6 company-wide KPI reporting projects, eliminating manual report generation and ensuring stakeholders received consistent, accurate reports on schedule. Saved approximately 40+ hours per month of manual work.',
        },
      },
    },
    skills: {
      title: 'Technical Skills',
      categories: {
        languages: 'Languages',
        backend: 'Backend',
        databases: 'Databases',
        infrastructure: 'Infrastructure',
        cloud: 'Cloud Services',
        tools: 'Tools & Platforms',
        testing: 'Testing',
        ai: 'AI & Generative Tools',
      },
    },
    contact: {
      title: 'Get in Touch',
      body: "Interested in working together? I'm always open to discussing new opportunities, interesting projects, or just having a conversation.",
      email: 'Send me an email',
      linkedin: 'Connect on LinkedIn →',
      github: 'Follow on GitHub →',
    },
    footer: {
      description: 'Senior Software Engineer specializing in distributed systems and data infrastructure.',
      quickLinks: 'Quick Links',
      backToTop: 'Back to top',
      about: 'About',
      experience: 'Experience',
      work: 'Work',
      contact: 'Contact',
      rights: 'All rights reserved.',
    },
    meta: {
      title: 'Manuel Ferreira - Senior Software Engineer',
      description: 'Senior Software Engineer specializing in backend development, distributed systems, and data integration',
    },
  },
  es: {
    nav: {
      about: 'Sobre mí',
      experience: 'Experiencia',
      work: 'Trabajo',
      skills: 'Habilidades',
      contact: 'Contacto',
    },
    language: {
      label: 'EN',
      ariaLabel: 'Switch to English',
    },
    hero: {
      title: 'Ingeniero de Software Senior',
      lead: '<strong>Especialista en Python</strong> con más de 5 años de experiencia desarrollando sistemas intensivos en datos.',
      body: 'Me enfoco en crear software confiable, seguro y realmente agradable de usar. Presto mucha atención a los detalles y considero fundamental trabajar de cerca con los usuarios para construir mejores productos.',
      contact: 'Contáctame',
    },
    about: {
      title: 'Sobre mí',
      backgroundLabel: 'Trayectoria:',
      background: 'Comencé a programar con Java en la universidad en 2014 y pasé a los ecosistemas de Python y JavaScript en 2019.',
      previousLabel: 'Experiencia profesional:',
      previous: 'He trabajado ampliamente en servicios backend, arquitectura de sistemas, pipelines de datos, integración de IA, M365 y entornos cloud empresariales.',
      humanLabel: 'El lado personal:',
      human: 'Fuera del trabajo, suelo hacer ejercicio, cocinar, explorar informes de ciberseguridad y tendencias de IA, o automatizar algo.',
    },
    experience: {
      title: 'Experiencia',
      present: 'Actualidad',
      entries: {
        '01-teleperformance-lead': {
          role: 'Desarrollador de Software Líder',
          summary: 'Lideré el desarrollo y mantenimiento de una plataforma distribuida de orquestación que soportaba más de 2000 pipelines ETL',
          highlights: [
            'Desarrollé y mantuve una plataforma distribuida de orquestación con Python, JavaScript, Django, SQL Server, Microsoft Graph y Entra ID para soportar más de 2000 pipelines ETL durante más de 5 años',
            'Lideré 6 proyectos a nivel corporativo para entregar automáticamente informes de KPI por correo electrónico, automatizando los flujos de reporting con Python y SSIS',
            'Construí prototipos de chatbots para Teams con servicios de Azure AI en entornos cloud híbridos usando C#',
            'Colaboré con la alta dirección para asesorar sobre la dirección, alcance y protocolos de los proyectos',
            'Realicé entrevistas técnicas a más de 20 candidatos para contratar desarrolladores senior',
          ],
        },
        '02-teleperformance-analyst': {
          role: 'Analista de Datos',
          summary: 'Desarrollé proyectos de visualización de datos y automatización utilizando SQL Server, SSIS, Power BI y Python',
          highlights: [
            'Desarrollé más de 10 proyectos de visualización y automatización de datos utilizando SQL Server, SSIS, Power BI, Excel y Python',
            'Diseñé e implementé soluciones automatizadas de reporting que redujeron el trabajo manual',
            'Creé dashboards complejos en Power BI para reporting ejecutivo y operativo',
            'Desarrollé scripts de Python para automatizar pipelines de datos y procesos de Excel con VBA',
          ],
        },
      },
    },
    work: {
      title: 'Proyectos técnicos seleccionados',
      problem: 'Problema',
      solution: 'Solución',
      result: 'Resultado',
      repository: 'Repositorio',
      demo: 'Demo',
      projects: {
        '01-orchestration-platform': {
          title: 'Plataforma distribuida de orquestación ETL',
          summary: 'Plataforma escalable que gestiona más de 2000 pipelines de datos empresariales en producción',
          problem: 'La empresa necesitaba orquestar y monitorizar miles de pipelines ETL en múltiples sistemas, con visibilidad sobre el estado de ejecución, gestión de errores y métricas de rendimiento.',
          solution: 'Construí una plataforma distribuida de orquestación con backend en Python y Django y frontend en JavaScript, integrada con SQL Server para persistencia y Microsoft Graph/Entra ID para autenticación empresarial. La plataforma ofrece programación, monitorización, alertas y logging completo de pipelines.',
          result: 'Orquestó con éxito más de 2000 pipelines durante más de 5 años con una disponibilidad superior al 99 %. Redujo la carga de monitorización manual y permitió la gestión autoservicio de pipelines para más de 100 usuarios.',
        },
        '02-kpi-reporting': {
          title: 'Sistema automatizado de reporting de KPI',
          summary: 'Sistema empresarial automatizado de reporting de KPI que entrega información a los responsables por correo electrónico',
          problem: 'La generación manual de informes de KPI consumía mucho tiempo y era propensa a errores. Los responsables necesitaban acceso consistente y oportuno a las métricas clave sin intervención manual.',
          solution: 'Construí un pipeline automatizado de reporting con Python y SSIS que extrae datos de múltiples fuentes, realiza agregaciones y transformaciones y genera informes formateados enviados por correo electrónico. Lo integré con la plataforma de orquestación para su programación y monitorización.',
          result: 'Automaticé 6 proyectos corporativos de reporting de KPI, eliminando la generación manual de informes y garantizando entregas consistentes y precisas. Ahorró aproximadamente 40 horas mensuales de trabajo manual.',
        },
      },
    },
    skills: {
      title: 'Habilidades técnicas',
      categories: {
        languages: 'Lenguajes',
        backend: 'Backend',
        databases: 'Bases de datos',
        infrastructure: 'Infraestructura',
        cloud: 'Servicios cloud',
        tools: 'Herramientas y plataformas',
        testing: 'Testing',
        ai: 'IA y herramientas generativas',
      },
    },
    contact: {
      title: 'Contacto',
      body: '¿Te interesa trabajar conmigo? Siempre estoy abierto a conversar sobre nuevas oportunidades, proyectos interesantes o simplemente intercambiar ideas.',
      email: 'Envíame un correo',
      linkedin: 'Conectar en LinkedIn →',
      github: 'Seguir en GitHub →',
    },
    footer: {
      description: 'Ingeniero de Software Senior especializado en sistemas distribuidos e infraestructura de datos.',
      quickLinks: 'Enlaces rápidos',
      backToTop: 'Volver arriba',
      about: 'Sobre mí',
      experience: 'Experiencia',
      work: 'Trabajo',
      contact: 'Contacto',
      rights: 'Todos los derechos reservados.',
    },
    meta: {
      title: 'Manuel Ferreira - Ingeniero de Software Senior',
      description: 'Ingeniero de Software Senior especializado en desarrollo backend, sistemas distribuidos e integración de datos',
    },
  },
} as const;
