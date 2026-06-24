export const companyAssets = {
  Google: {
    logo: 'https://cdn.simpleicons.org/google',
    applyLink: 'https://www.google.com/about/careers/applications/jobs/results',
    linkedin: 'https://www.linkedin.com/jobs/search/?keywords=Google'
  },
  Microsoft: {
    logo: 'https://cdn.simpleicons.org/microsoft',
    applyLink: 'https://jobs.careers.microsoft.com/global/en/search',
    linkedin: 'https://www.linkedin.com/jobs/search/?keywords=Microsoft'
  },
  TCS: {
    logo: 'https://cdn.simpleicons.org/tata',
    applyLink: 'https://www.tcs.com/careers',
    linkedin: 'https://www.linkedin.com/jobs/search/?keywords=TCS'
  },
  Infosys: {
    logo: 'https://cdn.simpleicons.org/infosys',
    applyLink: 'https://www.infosys.com/careers/apply.html',
    linkedin: 'https://www.linkedin.com/jobs/search/?keywords=Infosys'
  },
  Wipro: {
    logo: 'https://cdn.simpleicons.org/wipro',
    applyLink: 'https://careers.wipro.com/careers-home/',
    linkedin: 'https://www.linkedin.com/jobs/search/?keywords=Wipro'
  },
  Oracle: {
    logo: 'https://cdn.simpleicons.org/oracle',
    applyLink: 'https://careers.oracle.com/jobs/',
    linkedin: 'https://www.linkedin.com/jobs/search/?keywords=Oracle'
  },
  IBM: {
    logo: 'https://cdn.simpleicons.org/ibm',
    applyLink: 'https://www.ibm.com/careers/search',
    linkedin: 'https://www.linkedin.com/jobs/search/?keywords=IBM'
  },
  'Zoho Corporation': {
    logo: 'https://cdn.simpleicons.org/zoho',
    applyLink: 'https://www.zoho.com/careers/job-openings.html',
    linkedin: 'https://www.linkedin.com/jobs/search/?keywords=Zoho%20Corporation'
  },
  'HCL Technologies': {
    logo: 'https://cdn.simpleicons.org/hcl',
    applyLink: 'https://www.hcltech.com/careers',
    linkedin: 'https://www.linkedin.com/jobs/search/?keywords=HCLTech'
  },
  Cognizant: {
    logo: 'https://cdn.simpleicons.org/cognizant',
    applyLink: 'https://careers.cognizant.com/global-en/jobs/',
    linkedin: 'https://www.linkedin.com/jobs/search/?keywords=Cognizant'
  },
  Accenture: {
    logo: 'https://cdn.simpleicons.org/accenture',
    applyLink: 'https://www.accenture.com/in-en/careers/jobsearch',
    linkedin: 'https://www.linkedin.com/jobs/search/?keywords=Accenture'
  },
  Capgemini: {
    logo: 'https://cdn.simpleicons.org/capgemini',
    applyLink: 'https://www.capgemini.com/careers/join-us/',
    linkedin: 'https://www.linkedin.com/jobs/search/?keywords=Capgemini'
  },
  Freshworks: {
    logo: 'https://cdn.simpleicons.org/freshworks',
    applyLink: 'https://www.freshworks.com/company/careers/jobs/',
    linkedin: 'https://www.linkedin.com/jobs/search/?keywords=Freshworks'
  },
  Paytm: {
    logo: 'https://cdn.simpleicons.org/paytm',
    applyLink: 'https://paytm.com/careers/',
    linkedin: 'https://www.linkedin.com/jobs/search/?keywords=Paytm'
  },
  Cisco: {
    logo: 'https://cdn.simpleicons.org/cisco',
    applyLink: 'https://jobs.cisco.com/jobs/SearchJobs/',
    linkedin: 'https://www.linkedin.com/jobs/search/?keywords=Cisco'
  },
  'Tech Mahindra': {
    logo: 'https://cdn.simpleicons.org/techmahindra',
    applyLink: 'https://www.techmahindra.com/en-in/careers/',
    linkedin: 'https://www.linkedin.com/jobs/search/?keywords=Tech%20Mahindra'
  },
  'Larsen & Toubro': {
    logo: 'https://cdn.simpleicons.org/larsentoubro',
    applyLink: 'https://www.larsentoubro.com/corporate/careers/',
    linkedin: 'https://www.linkedin.com/jobs/search/?keywords=Larsen%20%26%20Toubro'
  }
};

export function getCompanyAsset(company) {
  return companyAssets[company] || {
    logo: '',
    applyLink: 'https://www.linkedin.com/jobs',
    linkedin: `https://www.linkedin.com/jobs/search/?keywords=${encodeURIComponent(company)}`
  };
}
