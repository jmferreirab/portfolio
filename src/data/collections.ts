import { Experience, Project } from './types';

export const experienceData: Experience[] = [
  {
    company: 'Teleperformance',
    role: 'Lead Software Developer',
    startDate: new Date('2021-03-01'),
    endDate: new Date('2026-08-01'),
    location: 'Bogota, Colombia (Remote)',
    employmentType: 'Full-time',
    summary: 'Led development and maintenance of a distributed orchestration platform supporting over 2000 ETL pipelines',
    highlights: [
      'Developed and maintained a distributed orchestration platform using Python, Javascript, Django, SQL Server, Microsoft Graph and Entra ID to support over 2000 ETL pipelines for 5+ years',
      'Led 6 company-wide projects to automatically deliver KPI reports over email, automating reporting workflows with Python and SSIS',
      'Built chatbot prototypes for Teams with Microsoft Azure AI services in hybrid cloud environments using C#',
      'Collaborated with senior management to advise on project direction, scope, and protocols',
      'Conducted technical interviews for more than 20 candidates to hire for senior developer roles',
    ],
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
  },
  {
    company: 'Teleperformance',
    role: 'Data Analyst',
    startDate: new Date('2019-11-01'),
    endDate: new Date('2021-02-28'),
    location: 'Bogota, Colombia',
    employmentType: 'Full-time',
    summary: 'Built data visualization and automation projects using SQL Server, SSIS, Power BI, and Python',
    highlights: [
      'Built 10+ data visualization and automation projects using SQL Server, SSIS, Power BI, Excel, and Python',
      'Designed and implemented automated reporting solutions that reduced manual reporting workload',
      'Created complex Power BI dashboards for executive and operational reporting',
      'Developed Python scripts for data pipeline automation and Excel automation with VBA',
    ],
    technologies: [
      'SQL Server',
      'SSIS',
      'Power BI',
      'Python',
      'Excel',
      'VBA',
    ],
  },
];

export const projectData: Project[] = [
  {
    title: 'Distributed ETL Orchestration Platform',
    summary: 'A scalable platform managing 2000+ enterprise data pipelines in production',
    problem: 'Enterprise needed to orchestrate and monitor thousands of ETL pipelines across multiple systems with visibility into execution support, error handling, and performance metrics.',
    solution: 'Built a distributed orchestration platform using Python and Django backend with JavaScript frontend, integrated with SQL Server for persistence and Microsoft Graph/Entra ID for enterprise authentication. Platform provides pipeline scheduling, monitoring, alerting, and comprehensive logging.',
    result: 'Successfully orchestrated 2000+ pipelines for 5+ years with 99%+ uptime. Reduced manual monitoring overhead and enabled self-service pipeline management across 100+ users.',
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
  },
  {
    title: 'Automated KPI Reporting System',
    summary: 'Enterprise-wide automated KPI reporting system delivering insights to stakeholders via email',
    problem: 'Manual KPI report generation was time-consuming and error-prone. Stakeholders needed consistent, timely access to key performance metrics without manual intervention.',
    solution: 'Built an automated reporting pipeline using Python and SSIS that extracts data from multiple sources, performs aggregations and transformations, and generates formatted reports delivered via email. Integrated with orchestration platform for scheduling and monitoring.',
    result: 'Automated 6 company-wide KPI reporting projects, eliminating manual report generation and ensuring stakeholders received consistent, accurate reports on schedule. Saved approximately 40+ hours per month of manual work.',
    technologies: [
      'Python',
      'SSIS',
      'SQL Server',
      'Power BI',
    ],
    featured: true,
  },
];
