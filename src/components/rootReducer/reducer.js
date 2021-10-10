const initialState = {
    data: []
};

const reducer = (state = initialState, action) => {

    const { data } = action

    switch(action.type) {
        case 'DATA_SUCCESS':
            const newDataWithDoneFlag = data.map((item) => {
                return {
                    ...item,
                    done: false
                } 
            });
            return {
                ...state,
                data: newDataWithDoneFlag
            }
        default: 
            return state    
    };
};

export default reducer;