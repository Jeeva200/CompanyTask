const initialState = {
  companies: [],
};

const companyReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_COMPANY':
      return {
        ...state,
        companies: [...state.companies, action.payload],
      };
    case 'DELETE_COMPANY':
      return {
        ...state,
        companies: state.companies.filter((company) => company.id !== action.payload),
      };
    case 'UPDATE_COMPANY_CONTACT':
      return {
        ...state,
        companies: state.companies.map((company) =>
          company.id === action.payload.id
            ? {
                ...company,
                contact: {
                  ...company.contact,
                  ...action.payload.contact, // Update the contact type or value
                },
              }
            : company
        ),
      };
    default:
      return state;
  }
};

export default companyReducer;
