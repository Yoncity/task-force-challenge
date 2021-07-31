export default {
  auth: {
    loading: false,
    error: null,
    user: {},
  },
  continents: {
    loading: false,
    error: null,
    data: [],
  },
  country: {
    loading: false,
    error: null,
    data: [],
  },
};

export type InitialState = {
  auth: Record<string, any>;
  country: Record<string, any>;
};

export type ContinentState = {
  continents: Record<string, any>;
};
