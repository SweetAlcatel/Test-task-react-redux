import axios from "axios";

const dataSuccess = (payload) => {
    return {
        type: 'DATA_SUCCESS',
        data: payload
    };
};

const fetchData = () => {
    return (dispatch) => {
        axios.get('https://api.thecatapi.com/v1/breeds')
        .then(response => dispatch(dataSuccess(response.data)))
    }
};

export {
    dataSuccess,
    fetchData
};
