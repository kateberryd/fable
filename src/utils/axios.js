import axios from 'axios';
import { configureStore } from '../redux';
import { LOGOUT } from '../redux/constants';


const BASE_URL = "https://fable-app-master.herokuapp.com/";

const instance = axios.create({
    baseURL: BASE_URL,
    headers: {
        "Access-Control-Allow-Origin": "https://fable-app-master.herokuapp.com/",
        "Content-Type": "application/json",
    }
});

/**
 intercept any error responses from the api and check if the token is no longer valid.
 ie. Token has expired.
 logout the user if the token has expired.
**/

instance.interceptors.response.use(
    res => res,
    err => {
        if (err.response) {
            if (err.response.data.message === 'Unauthorized Access' || err.response.data.message === 'Unauthorized') {
                configureStore.dispatch({ type: LOGOUT })
            }
        }
        return Promise.reject(err)
    }
);

export default instance;