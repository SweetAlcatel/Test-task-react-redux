const initialState = {
    data: [],
    likedData: []
};

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case 'DATA_SUCCESS':
            const newData = action.payload.map((item) => {
                return item
            });
            return {
                ...state,
                data: newData
            };

        case 'LIKE_ITEM':
            const likedItems = state.data.filter((item) => {
                return item.id === action.id ? item : null
            });
            const likedArray = state.likedData.concat(likedItems);

            return {
                ...state,
                likedData: likedArray
            }


        case 'UNLIKE_ITEM':
            const deleteIndex = state.likedData.findIndex((el) => {
                return el.id === action.id 
            });

            const deleteLikedData = [
                ...state.likedData.slice(0, deleteIndex),
                ...state.likedData.slice(deleteIndex + 1)
            ];
        
            return {
                ...state,
                likedData: deleteLikedData
            }


        case 'DELETE_ITEM':
            const deleteItemData = state.data.filter((item) => {
                if(item.id !== action.id) {
                    return item
                }
            });
    
            const deleteLikedIndex = state.likedData.findIndex((el) => {
                return el.id === action.id
            });

            const deleteLikedItems = [
                ...state.likedData.slice(0, deleteLikedIndex),
                ...state.likedData.slice(deleteLikedIndex+1)
            ];

            return {
                data: deleteItemData,
                likedData: deleteLikedItems
            }


        default: 
            return state;   
    };
};

export default reducer;