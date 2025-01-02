import { configureStore, createSlice } from '@reduxjs/toolkit';

// Helper functions for localStorage
const loadFromLocalStorage = () => {
  const data = localStorage.getItem('companies');
  return data ? JSON.parse(data) : [];
};

const saveToLocalStorage = (state) => {
  localStorage.setItem('companies', JSON.stringify(state));
};

// Redux slice
const companiesSlice = createSlice({
  name: 'companies',
  initialState: loadFromLocalStorage(), // Load from localStorage on initialization
  reducers: {
    addCompany: (state, action) => {
      const updatedState = [...state, action.payload];
      saveToLocalStorage(updatedState); // Save updated state to localStorage
      return updatedState;
    },
    deleteCompany: (state, action) => {
      const updatedState = state.filter((company) => company.id !== action.payload);
      saveToLocalStorage(updatedState); // Save updated state to localStorage
      return updatedState;
    },
    updateCompanyCommunication: (state, action) => {
      const { id, communication } = action.payload;
      const updatedState = state.map((company) =>
        company.id === id ? { ...company, communication } : company
      );
      saveToLocalStorage(updatedState); // Save updated state to localStorage
      return updatedState;
    },
    updateNextScheduled: (state, action) => {
      const { id, nextScheduled } = action.payload;
      const updatedState = state.map((company) =>
        company.id === id ? { ...company, nextScheduled } : company
      );
      saveToLocalStorage(updatedState); // Save updated state to localStorage
      return updatedState;
    },
  },
});

export const {
  addCompany,
  deleteCompany,
  updateCompanyCommunication,
  updateNextScheduled,
} = companiesSlice.actions;

const store = configureStore({
  reducer: {
    companies: companiesSlice.reducer,
  },
});

export default store;
