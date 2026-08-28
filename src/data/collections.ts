import type { Experience, Project } from './types';

export const experienceData: Experience[] = [
  {
    company: 'Teleperformance',
    startDate: new Date('2021-03-01'),
    endDate: new Date('2026-08-01'),
    technologies: [
      'Python',
      'JavaScript',
      'Django',
      'SQL Server',
      'Microsoft Graph',
      'Entra ID',
      'SSIS',
      'Azure AI',
      'C#',
    ],
    translations: {
      en: {
        role: 'Lead Software Developer',
        employmentType: 'Full-time',
        location: "Bogota, Colombia (Remote)",
        summary: 'Led the development and operation of a distributed system that orchestrated 2000+ automation flows for 5 years, while taking ownership of technical direction, change management, and system security.',
      },
      es: {
        role: 'Desarrollador de Software Lead',
        employmentType: 'Tiempo completo',
        location: "Bogotá, Colombia (Remoto)",
        summary: 'Lideré el desarrollo y la operación de un sistema distribuido que orquestaba 2000+ flujos de automatización por 5 años, asumiendo también la dirección técnica, gestión de cambios, y seguridad del sistema.',
      },
    },
  },
  {
    company: 'Teleperformance',
    startDate: new Date('2019-11-01'),
    endDate: new Date('2021-02-28'),
    
    technologies: [
      'SQL Server',
      'SSIS',
      'Power BI',
      'Python',
      'Excel',
      'VBA',
    ],
    translations: {
      en: {
        role: 'Data Analyst',
        employmentType: 'Full-time',
        location: 'Bogota, Colombia',
        summary: 'Built data, reporting, and automation solutions that leverage software development and analytics to drastically reduce human error in repetitive workflows.',
      },
      es: {
        role: 'Analista de Datos',
        employmentType: 'Tiempo completo',
        location: 'Bogotá, Colombia',
        summary: 'Desarrollé soluciones de datos, reportería y automatización que combinaron el desarrollo de software y la analítica para reducir drásticamente el error humano en flujos de trabajo repetitivos.',
      },
    },
  },
];

export const projectData: Project[] = [
  {
    technologies: [
      'Python',
      'Django',
      'JavaScript',
      'SQL Server',
      'Microsoft Graph',
      'Entra ID',
      'Distributed Systems',
    ],
    featured: true,
    translations: {
      en: {
        title: 'Distributed ETL Orchestration Platform',
        summary: 'A scalable platform managing 2000+ enterprise data pipelines in production',
        problem: 'Enterprise needed to orchestrate and monitor thousands of ETL pipelines across multiple systems with visibility into execution support, error handling, and performance metrics.',
        solution: 'Built a distributed orchestration platform using Python and Django backend with JavaScript frontend, integrated with SQL Server for persistence and Microsoft Graph/Entra ID for enterprise authentication. Platform provides pipeline scheduling, monitoring, alerting, and comprehensive logging.',
        result: 'Successfully orchestrated 2000+ pipelines for 5+ years with 99%+ uptime. Reduced manual monitoring overhead and enabled self-service pipeline management across 100+ users.',
      },
      es: {
        title: 'Plataforma de Orquestación de ETL Distribuida',
        summary: 'Una plataforma escalable que gestiona más de 2000 pipelines de datos empresariales en producción',
        problem: 'La empresa necesitaba orquestar y monitorear miles de pipelines de ETL a través de múltiples sistemas con visibilidad en el soporte de ejecución, el manejo de errores y las métricas de rendimiento.',
        solution: 'Construí una plataforma de orquestación distribuida utilizando un backend de Python y Django con un frontend de JavaScript, integrada con SQL Server para la persistencia y Microsoft Graph/Entra ID para la autenticación empresarial. La plataforma proporciona programación de pipelines, monitoreo, alertas y registros detallados.',
        result: 'Orquesté con éxito más de 2000 pipelines durante más de 5 años con un tiempo de actividad superior al 99%. Reduje la carga de monitoreo manual y habilité la gestión de pipelines de autoservicio para más de 100 usuarios.',
      },
    },
  },
  {
    technologies: [
      'Python',
      'SSIS',
      'SQL Server',
      'Power BI',
    ],
    featured: true,
    translations: {
      en: {
        title: 'Automated KPI Reporting System',
        summary: 'Enterprise-wide automated KPI reporting system delivering insights to stakeholders via email',
        problem: 'Manual KPI report generation was time-consuming and error-prone. Stakeholders needed consistent, timely access to key performance metrics without manual intervention.',
        solution: 'Built an automated reporting pipeline using Python and SSIS that extracts data from multiple sources, performs aggregations and transformations, and generates formatted reports delivered via email. Integrated with orchestration platform for scheduling and monitoring.',
        result: 'Automated 6 company-wide KPI reporting projects, eliminating manual report generation and ensuring stakeholders received consistent, accurate reports on schedule. Saved approximately 40+ hours per month of manual work.',
      },
      es: {
        title: 'Sistema Automatizado de Reportes de KPI',
        summary: 'Sistema automatizado de reportes de KPI a nivel de empresa que entrega información a las partes interesadas a través de correo electrónico',
        problem: 'La generación manual de reportes de KPI consumía mucho tiempo y era propensa a errores. Las partes interesadas necesitaban un acceso consistente y oportuno a las métricas clave de rendimiento sin intervención manual.',
        solution: 'Construí un pipeline de reportes automatizado utilizando Python y SSIS que extrae datos de múltiples fuentes, realiza agregaciones y transformaciones, y genera reportes formateados entregados por correo electrónico. Integrado con la plataforma de orquestación para su programación y monitoreo.',
        result: 'Automaticé 6 proyectos de reportes de KPI a nivel de empresa, eliminando la generación manual de reportes y asegurando que las partes interesadas recibieran reportes consistentes y precisos a tiempo. Ahorré aproximadamente más de 40 horas mensuales de trabajo manual.',
      },
    },
  },
];
