export type Locales = {
  pageNotFound: string;
  header: {
    title: string;
    contact: string;
  };
  countryAndDateInput: {
    updates: string;
    hint: string;
  };
  footer: {
    reachMe: string;
    profile: string;
    develpedBy: string;
  };
  email: string;
  phone: string;
  perContinents: string;
  cumulatively: string;
  tests: string;
  positiveCases: string;
  hospitalized: string;
  recovered: string;
  deaths: string;
  vaccinated: string;
  submit: string;
};

const eng: Locales = {
  pageNotFound: 'Page Not Found',
  header: {
    title: 'C O V I C A L C',
    contact: 'CONTACT',
  },
  countryAndDateInput: {
    updates: 'UPDATES',
    hint: 'Search a country',
  },
  footer: {
    reachMe: 'REACH ME',
    profile: 'Profile',
    develpedBy: 'Developed By',
  },
  email: 'Email',
  phone: 'Phone',
  perContinents: 'PER CONTINENTS',
  cumulatively: 'Cumulatively',
  tests: 'Tests',
  positiveCases: 'Positive Cases',
  hospitalized: 'Critical',
  recovered: 'Recoverd',
  deaths: 'Deaths',
  vaccinated: 'Vaccinated',
  submit: 'SUBMIT',
};

export default { eng };
