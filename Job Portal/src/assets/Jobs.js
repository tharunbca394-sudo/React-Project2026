import { getCompanyAsset } from './companyAssets';

const baseJobsData = [
  {
    id: 1,
    title: "Frontend Developer",
    company: "Google",
    location: "Bangalore",
    type: "Full-Time",
    role: "Job",
    salary: "8-12 LPA",
    skills: ["React", "JavaScript", "CSS", "HTML"],
    experience: "0-2 Years",
    description: "Build fast, accessible web interfaces and reusable UI components for product teams.",
    posted: "2 days ago",
    applyLink: "https://careers.google.com"
  },
  {
    id: 2,
    title: "Software Engineer",
    company: "Microsoft",
    location: "Hyderabad",
    type: "Full-Time",
    role: "Job",
    salary: "7-11 LPA",
    skills: ["C#", "JavaScript", "Azure", "SQL"],
    experience: "0-2 Years",
    description: "Develop cloud-connected applications and work with engineering teams on scalable services.",
    posted: "1 day ago",
    applyLink: "https://careers.microsoft.com"
  },
  {
    id: 3,
    title: "Java Developer",
    company: "TCS",
    location: "Chennai",
    type: "Full-Time",
    role: "Job",
    salary: "3.5-5 LPA",
    skills: ["Java", "Spring Boot", "MySQL", "REST API"],
    experience: "0-1 Year",
    description: "Develop enterprise Java applications, APIs, and database-backed features for client projects.",
    posted: "3 days ago",
    applyLink: "https://careers.tcs.com"
  },
  {
    id: 4,
    title: "Data Analyst",
    company: "Infosys",
    location: "Pune",
    type: "Full-Time",
    role: "Job",
    salary: "4-6 LPA",
    skills: ["Python", "Excel", "SQL", "Power BI"],
    experience: "0-2 Years",
    description: "Analyze business data, create dashboards, and prepare insights for delivery teams.",
    posted: "5 days ago",
    applyLink: "https://careers.infosys.com"
  },
  {
    id: 5,
    title: "Cloud Support Engineer",
    company: "Wipro",
    location: "Mumbai",
    type: "Full-Time",
    role: "Job",
    salary: "4-7 LPA",
    skills: ["AWS", "Linux", "Networking", "Python"],
    experience: "0-2 Years",
    description: "Support cloud deployments, monitor incidents, and help customers resolve infrastructure issues.",
    posted: "4 days ago",
    applyLink: "https://careers.wipro.com"
  },
  {
    id: 6,
    title: "Database Administrator",
    company: "Oracle",
    location: "Noida",
    type: "Full-Time",
    role: "Job",
    salary: "5-8 LPA",
    skills: ["Oracle DB", "SQL", "Backup", "Linux"],
    experience: "1-3 Years",
    description: "Maintain database performance, backups, access controls, and production support tasks.",
    posted: "1 week ago",
    applyLink: "https://www.oracle.com/careers"
  },
  {
    id: 7,
    title: "Backend Developer",
    company: "IBM",
    location: "Kolkata",
    type: "Full-Time",
    role: "Job",
    salary: "5-9 LPA",
    skills: ["Node.js", "Express", "MongoDB", "REST API"],
    experience: "0-2 Years",
    description: "Create backend APIs, integrate services, and improve application performance.",
    posted: "6 days ago",
    applyLink: "https://www.ibm.com/careers"
  },
  {
    id: 8,
    title: "UI/UX Designer",
    company: "Zoho Corporation",
    location: "Coimbatore",
    type: "Full-Time",
    role: "Job",
    salary: "4-7 LPA",
    skills: ["Figma", "Wireframes", "Prototyping", "CSS"],
    experience: "0-2 Years",
    description: "Design user-friendly screens, prototypes, and design system components for SaaS products.",
    posted: "2 days ago",
    applyLink: "https://careers.zoho.com"
  },
  {
    id: 9,
    title: "Python Developer",
    company: "HCL Technologies",
    location: "Madurai",
    type: "Full-Time",
    role: "Job",
    salary: "4-7 LPA",
    skills: ["Python", "Django", "PostgreSQL", "REST API"],
    experience: "0-2 Years",
    description: "Build scalable backend services and APIs for web and mobile applications.",
    posted: "4 days ago",
    applyLink: "https://careers.hcltech.com"
  },
  {
    id: 10,
    title: "QA Test Engineer",
    company: "Cognizant",
    location: "Trichy",
    type: "Full-Time",
    role: "Job",
    salary: "3.5-5.5 LPA",
    skills: ["Manual Testing", "Selenium", "Jira", "API Testing"],
    experience: "0-2 Years",
    description: "Prepare test cases, run manual and automation tests, and report defects clearly.",
    posted: "1 week ago",
    applyLink: "https://careers.cognizant.com"
  },
  {
    id: 11,
    title: "Cybersecurity Analyst",
    company: "Accenture",
    location: "Delhi",
    type: "Full-Time",
    role: "Job",
    salary: "5-8 LPA",
    skills: ["Security", "SIEM", "Networking", "Linux"],
    experience: "0-2 Years",
    description: "Monitor security alerts, investigate incidents, and document remediation steps.",
    posted: "3 days ago",
    applyLink: "https://www.accenture.com/in-en/careers"
  },
  {
    id: 12,
    title: "Business Analyst",
    company: "Capgemini",
    location: "Kochi",
    type: "Hybrid",
    role: "Job",
    salary: "4.5-7 LPA",
    skills: ["Excel", "Documentation", "SQL", "Communication"],
    experience: "0-2 Years",
    description: "Gather requirements, prepare process documents, and coordinate with technical teams.",
    posted: "2 weeks ago",
    applyLink: "https://www.capgemini.com/careers"
  },
  {
    id: 13,
    title: "React Intern",
    company: "Google",
    location: "Bangalore",
    type: "Full-Time",
    role: "Internship",
    salary: "25,000/month",
    skills: ["React", "JavaScript", "Git"],
    experience: "Freshers",
    description: "Build frontend features with mentor support and learn production UI development.",
    posted: "2 days ago",
    applyLink: "https://careers.google.com"
  },
  {
    id: 14,
    title: "Azure Cloud Intern",
    company: "Microsoft",
    location: "Hyderabad",
    type: "Remote",
    role: "Internship",
    salary: "22,000/month",
    skills: ["Azure", "Cloud", "Linux", "Python"],
    experience: "Freshers",
    description: "Assist cloud teams with deployments, documentation, and monitoring workflows.",
    posted: "1 week ago",
    applyLink: "https://careers.microsoft.com"
  },
  {
    id: 15,
    title: "Java Intern",
    company: "TCS",
    location: "Chennai",
    type: "Hybrid",
    role: "Internship",
    salary: "12,000/month",
    skills: ["Java", "OOP", "SQL", "Git"],
    experience: "Freshers",
    description: "Work on Java modules, learn coding standards, and support project documentation.",
    posted: "3 days ago",
    applyLink: "https://careers.tcs.com"
  },
  {
    id: 16,
    title: "Data Science Intern",
    company: "Infosys",
    location: "Pune",
    type: "Part-Time",
    role: "Internship",
    salary: "15,000/month",
    skills: ["Python", "Pandas", "Machine Learning", "SQL"],
    experience: "Freshers",
    description: "Clean datasets, create notebooks, and build basic prediction models with guidance.",
    posted: "5 days ago",
    applyLink: "https://careers.infosys.com"
  },
  {
    id: 17,
    title: "DevOps Intern",
    company: "Wipro",
    location: "Mumbai",
    type: "Remote",
    role: "Internship",
    salary: "14,000/month",
    skills: ["Git", "Docker", "Linux", "CI/CD"],
    experience: "Freshers",
    description: "Learn release pipelines, container basics, and deployment automation.",
    posted: "6 days ago",
    applyLink: "https://careers.wipro.com"
  },
  {
    id: 18,
    title: "Database Intern",
    company: "Oracle",
    location: "Noida",
    type: "Full-Time",
    role: "Internship",
    salary: "18,000/month",
    skills: ["SQL", "Oracle DB", "Data Modeling"],
    experience: "Freshers",
    description: "Support database design tasks, SQL queries, and performance review activities.",
    posted: "1 week ago",
    applyLink: "https://www.oracle.com/careers"
  },
  {
    id: 19,
    title: "AI Research Intern",
    company: "IBM",
    location: "Kolkata",
    type: "Hybrid",
    role: "Internship",
    salary: "20,000/month",
    skills: ["Python", "NLP", "Machine Learning", "Git"],
    experience: "Freshers",
    description: "Assist with experiments, model evaluation, and research documentation.",
    posted: "2 weeks ago",
    applyLink: "https://www.ibm.com/careers"
  },
  {
    id: 20,
    title: "Digital Marketing Intern",
    company: "Freshworks",
    location: "Coimbatore",
    type: "Part-Time",
    role: "Internship",
    salary: "10,000/month",
    skills: ["SEO", "Content", "Analytics", "Social Media"],
    experience: "Freshers",
    description: "Support campaigns, track analytics, and prepare content performance reports.",
    posted: "4 days ago",
    applyLink: "https://careers.freshworks.com"
  },
  {
    id: 21,
    title: "Mobile App Developer",
    company: "Paytm",
    location: "Jaipur",
    type: "Full-Time",
    role: "Job",
    salary: "5-8 LPA",
    skills: ["React Native", "JavaScript", "Android", "API"],
    experience: "0-2 Years",
    description: "Develop mobile screens, integrate APIs, and improve app performance.",
    posted: "3 days ago",
    applyLink: "https://paytm.com/careers"
  },
  {
    id: 22,
    title: "Network Engineer",
    company: "Cisco",
    location: "Ahmedabad",
    type: "Full-Time",
    role: "Job",
    salary: "4.5-7 LPA",
    skills: ["Networking", "CCNA", "Routing", "Switching"],
    experience: "0-2 Years",
    description: "Configure network devices, troubleshoot connectivity, and maintain network reports.",
    posted: "1 week ago",
    applyLink: "https://jobs.cisco.com"
  },
  {
    id: 23,
    title: "Content Writer Intern",
    company: "Tech Mahindra",
    location: "Lucknow",
    type: "Remote",
    role: "Internship",
    salary: "8,000/month",
    skills: ["Writing", "Research", "SEO", "Editing"],
    experience: "Freshers",
    description: "Write career content, edit articles, and optimize pages for search visibility.",
    posted: "2 days ago",
    applyLink: "https://www.techmahindra.com/en-in/careers"
  },
  {
    id: 24,
    title: "HR Executive",
    company: "Larsen & Toubro",
    location: "Vellore",
    type: "Hybrid",
    role: "Job",
    salary: "3-5 LPA",
    skills: ["Recruitment", "MS Office", "Communication", "HRMS"],
    experience: "0-2 Years",
    description: "Coordinate hiring, maintain employee records, and support onboarding activities.",
    posted: "5 days ago",
    applyLink: "https://www.larsentoubro.com/corporate/careers"
  },
  ...createExtraInternships()
];

export const jobsData = baseJobsData.map((job) => {
  const asset = getCompanyAsset(job.company);
  const query = `${job.company} ${job.title} ${job.location}`;

  return {
    ...job,
    logo: job.logo || asset.logo,
    applyLink: asset.applyLink || job.applyLink,
    linkedInAlertLink:
      job.linkedInAlertLink ||
      `${asset.linkedin}&location=${encodeURIComponent(job.location)}&f_TPR=r86400`,
    companyJobsLink: asset.linkedin,
    directApplyQuery: `https://www.google.com/search?q=${encodeURIComponent(`${query} careers apply`)}`
  };
});

function createExtraInternships() {
  const companies = ["Google", "Microsoft", "Wipro", "TCS", "IBM", "Oracle", "Infosys", "Zoho Corporation", "Freshworks"];
  const locations = ["Bangalore", "Hyderabad", "Chennai", "Pune", "Mumbai", "Noida", "Kolkata", "Coimbatore", "Madurai"];
  const roles = [
    { title: "Frontend Intern", skills: ["React", "CSS", "JavaScript", "Git"] },
    { title: "Backend Intern", skills: ["Node.js", "SQL", "API", "Git"] },
    { title: "Data Analyst Intern", skills: ["Excel", "SQL", "Python", "Power BI"] },
    { title: "Cloud Intern", skills: ["AWS", "Azure", "Linux", "Networking"] },
    { title: "QA Intern", skills: ["Manual Testing", "Selenium", "Jira", "API Testing"] },
    { title: "UI/UX Intern", skills: ["Figma", "Wireframes", "Prototyping", "Design"] },
    { title: "HR Intern", skills: ["Recruitment", "Communication", "MS Office", "HRMS"] },
    { title: "Marketing Intern", skills: ["SEO", "Content", "Analytics", "Social Media"] },
    { title: "Cybersecurity Intern", skills: ["Security", "Linux", "Networking", "SIEM"] }
  ];
  const internshipTypes = [
    { type: "Full-Time", count: 9 },
    { type: "Part-Time", count: 9 },
    { type: "Remote", count: 8 },
    { type: "Hybrid", count: 9 }
  ];

  let id = 25;
  return internshipTypes.flatMap(({ type, count }) =>
    Array.from({ length: count }, (_, index) => {
      const role = roles[index % roles.length];
      const company = companies[(index + id) % companies.length];
      const location = locations[(index + id) % locations.length];
      return {
        id: id++,
        title: role.title,
        company,
        location,
        type,
        role: "Internship",
        salary: `${8 + (index % 8)},000/month`,
        skills: role.skills,
        experience: "Freshers",
        description: `Learn ${role.title.replace(" Intern", "").toLowerCase()} work with mentor support, real tasks, and weekly feedback.`,
        posted: `${(index % 6) + 1} days ago`,
        applyLink: "https://www.linkedin.com/jobs"
      };
    })
  );
}
