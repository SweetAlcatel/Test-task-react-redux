
const dataSuccess = (payload) => {
    return {
        type: 'DATA_SUCCESS',
        payload
    };
};

const likeElement = (id) => {
    return {
        type: 'LIKE_ITEM',
        id: id
    };
};

const fetchData = () => {
    return (dispatch) => {
        fetch('https://api.thecatapi.com/v1/breeds')
        .then(response => response.json())
        .then(data => dispatch(dataSuccess(data)))
    };
};

export {
    dataSuccess,
    fetchData,
    likeElement
};
