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
        title: 'Distributed orchestration platform',
        summary: 'An orchestration platform managing 2000+ enterprise ETL pipelines',
        problem: 'Enterprise needed to orchestrate and monitor thousands of ETL pipelines across multiple VMs.',
        solution: 'Built a distributed orchestration platform that provides scheduling customization, monitoring, alerting, secret management, and integrations for dozens of data providers.',
        result: 'Successfully orchestrated 2000+ pipelines for 5+ years with 85%+ uptime, drastically reducing manual ETL workflows and setting an standard for automation efforts in the company.',
      },
      es: {
        title: 'Plataforma distribuida de orquestación',
        summary: 'Una plataforma de orquestación que gestiona más de 2000 pipelines de ETL',
        problem: 'La empresa necesitaba orquestar y monitorear miles de pipelines de ETL distribuidos en múltiples VMs.',
        solution: 'Construí una plataforma distribuida de orquestación que ofrece personalización de horarios, monitoreo, alertas, gestión de secretos e integraciones con docenas de proveedores de datos.',
        result: 'Se gestióno con éxito la orquestación de 2000+ pipelines durante 5+ años con disponibilidad de 85%+, reduciendo drásticamente los flujos de trabajo manuales de ETL y estableciendo un estándar para los esfuerzos de automatización en la empresa.',
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
        title: 'Automated email reporting system',
        summary: 'Enterprise-wide automated KPI reporting system',
        problem: 'Manual KPI report generation was time-consuming and error-prone. Stakeholders expected these reports on a regular basis, and the manual process was not sustainable.',
        solution: 'Built a reporting system using Python and SSIS that extracts data from multiple sources, performs aggregations and transformations, and automatically sends formatted reports via email.',
        result: 'Automated 6 company-wide KPI reporting projects, ensuring the delivery of accurate reports on time. Each project saved approximately 40+ hours per month of work.',
      },
      es: {
        title: 'Sistema automatizado de reportes por email',
        summary: 'Sistema automatizado de reportes agregados a nivel de empresa',
        problem: 'La generación manual de reportes de KPI consumía mucho tiempo y era propensa a errores. Las partes interesadas esperaban estos reportes de manera regular, y el proceso manual no era sostenible.',
        solution: 'Construí un sistema de reportes utilizando Python y SSIS que extrae datos de múltiples fuentes, realiza agregaciones y transformaciones, y automaticamente envia reportes formateados por correo electrónico.',
        result: 'Automaticé 6 proyectos de reportes de KPI a nivel de empresa, asegurando la entrega de reportes precisos a tiempo. Cada proyecto genero ahorros de más de 40 horas mensuales de trabajo.',
      },
    },
  },
];
