import axios from '../../utils/axios';
import { setAlert } from '../alert/action';
import jwt_decode from 'jwt-decode';

import {
   CREATE_AGENT,
   CREATE_AGENT_SUCCESS,
   CREATE_AGENT_FAILED
} from './constant';

// create agent

export const createStation = (formData) => async dispatch => {
    
    console.log(formData)
    // await axios.post('/api/admin/login', {
    //        username: formData.username,
    //        password: formData.password
    //    })
    //    .then(res => {
    //        const {token } = res.data;
    //        localStorage.setItem('jwtToken', token);
    //        setAuthToken(token);
    //        const decoded = jwt_decode(token);
    //        dispatch(setCurrentUser(decoded.user))
    //        console.log(res.data)
    //    })
    //    .catch(err => {
    //        console.log(err)
    //       if(err){
    //        dispatch({
    //            type: GET_ERRORS,
    //            payload: err.response.data
    //        })
    //       }
    //    })
}


export const createAgentSuccess = (response) => ({
    type: CREATE_AGENT_SUCCESS,
    payload: response,
});

export const createAgentFailed = (error) => ({
    type: CREATE_AGENT_FAILED,
    payload: error,
});