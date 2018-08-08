import { GET_DATA, GET_ERROR } from './actionTypes';


export const fetchData = (response) => {
    return {
        type: GET_DATA,
        response: response
    };
}
