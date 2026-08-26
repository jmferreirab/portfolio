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
        summary: 'Led development and maintenance of a distributed orchestration platform supporting over 2000 ETL pipelines',
        highlights: [
          'Developed and maintained a distributed orchestration platform using Python, Javascript, Django, SQL Server, Microsoft Graph and Entra ID to support over 2000 ETL pipelines for 5+ years',
          'Led 6 company-wide projects to automatically deliver KPI reports over email, automating reporting workflows with Python and SSIS',
          'Built chatbot prototypes for Teams with Microsoft Azure AI services in hybrid cloud environments using C#',
          'Collaborated with senior management to advise on project direction, scope, and protocols',
          'Conducted technical interviews for more than 20 candidates to hire for senior developer roles',
        ],
      },
      es: {
        role: 'Desarrollador de Software Lead',
        employmentType: 'Tiempo completo',
        location: "Bogotá, Colombia (Remoto)",
        summary: 'Lideré el desarrollo y mantenimiento de una plataforma de orquestación distribuida que soporta más de 2000 pipelines de ETL',
        highlights: [
          'Desarrollé y mantuve una plataforma de orquestación distribuida utilizando Python, Javascript, Django, SQL Server, Microsoft Graph y Entra ID para soportar más de 2000 pipelines de ETL durante más de 5 años',
          'Lideré 6 proyectos a nivel de empresa para entregar automáticamente reportes de KPI por correo electrónico, automatizando los flujos de reporte con Python y SSIS',
          'Construí prototipos de chatbots para Teams con los servicios de IA de Microsoft Azure en entornos de nube híbrida utilizando C#',
          'Colaboré con la alta gerencia para asesorar sobre la dirección, el alcance y los protocolos del proyecto',
          'Realicé entrevistas técnicas a más de 20 candidatos para contratar roles de desarrollador senior',
        ],
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
        summary: 'Built data visualization and automation projects using SQL Server, SSIS, Power BI, and Python',
        highlights: [
          'Built 10+ data visualization and automation projects using SQL Server, SSIS, Power BI, Excel, and Python',
          'Designed and implemented automated reporting solutions that reduced manual reporting workload',
          'Created complex Power BI dashboards for executive and operational reporting',
          'Developed Python scripts for data pipeline automation and Excel automation with VBA',
        ],
      },
      es: {
        role: 'Analista de Datos',
        employmentType: 'Tiempo completo',
        location: 'Bogotá, Colombia',
        summary: 'Construí proyectos de visualización de datos y automatización utilizando SQL Server, SSIS, Power BI y Python',
        highlights: [
          'Construí más de 10 proyectos de visualización de datos y automatización utilizando SQL Server, SSIS, Power BI, Excel y Python',
          'Diseñé e implementé soluciones de reporte automatizadas que redujeron la carga de trabajo de reporte manual',
          'Creé tableros complejos de Power BI para reportes ejecutivos y operativos',
          'Desarrollé scripts de Python para la automatización de pipelines de datos y automatización de Excel con VBA',
        ],
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
