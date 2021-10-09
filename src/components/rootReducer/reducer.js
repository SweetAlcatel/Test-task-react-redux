const initialState = {
    data: []
};

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case 'DATA_SUCCESS': 
            return {
                ...state,
                data: action.data
            }
        default: 
            return state    
    };
};

export default reducer;