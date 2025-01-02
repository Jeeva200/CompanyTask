export const addCommunication = (communication) => {
    return {
        type: 'ADD_COMMUNICATION',
        payload: communication,
    };
};

export const deleteCommunication = (id) => {
    return {
        type: 'DELETE_COMMUNICATION',
        payload: id,
    };
};
