const initialState = {
    data: [],
    likedData: []
};

const reducer = (state = initialState, action) => {

    switch(action.type) {
        case 'DATA_SUCCESS':
            const newDataWithDoneFlag = action.payload.map((item) => {
                return {
                    ...item,
                    done: false
                } 
            });
            return {
                ...state,
                data: newDataWithDoneFlag
            }
        case 'LIKE_ITEM':

            const likedItems1 = state.data.filter((item) => {
                if(item.id === action.id) {
                    return item
                }
            });

            const newArrayLiked = state.likedData.concat(likedItems1)

            return {
                ...state,
                likedData: newArrayLiked
            }
        default: 
            return state;   
    };
};

export default reducer;