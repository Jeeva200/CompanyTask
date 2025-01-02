const initialState = {
    communications: [],
};

const communicationReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_COMMUNICATION':
            return { ...state, communications: [...state.communications, action.payload] };
        case 'DELETE_COMMUNICATION':
            return {
                ...state,
                communications: state.communications.filter(
                    (communication) => communication.id !== action.payload
                ),
            };
        default:
            return state;
    }
};

export default communicationReducer;
