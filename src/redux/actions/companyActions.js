export const addCompany = (company) => {
    return {
        type: 'ADD_COMPANY',
        payload: company,
    };
};

export const deleteCompany = (id) => {
    return {
        type: 'DELETE_COMPANY',
        payload: id,
    };
};
