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
                return item.id === action.id ? {...item, done: true} : null
            });
            const unionArray = state.likedData.concat(likedItems1);
            
            const newArrayLikeDone = unionArray.map((item) => {
                return { 
                    ...item,
                    done: !item.true
                }
            });

            return {
                ...state,
                likedData: newArrayLikeDone
            }
        case 'DELETE_ITEM':

            const deleteItemData = state.data.filter((item) => {
                if(item.id !== action.id) {
                    return item
                }
            });

            return {
                ...state,
                data: deleteItemData
            }
        default: 
            return state;   
    };
};

export default reducer;