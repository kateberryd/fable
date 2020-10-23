import axios from '../../utils/axios';
import { setAlert } from '../alert/action';
import jwt_decode from 'jwt-decode';
import {
    GET_FARMER_LIST,
    GET_FARMER_LIST_SUCCESS,
    GET_FARMER_LIST_FAILED,
    
    GET_SINGLE_FARMER,
    GET_SINGLE_FARMER_SUCCESS,
    GET_SINGLE_FARMER_FAILED,
    
} from './constant';



export const getFarmerList = () => async dispatch => {
    try {
        const res = await axios.get('/farmers');
        dispatch({
            type: GET_FARMER_LIST,
            payload: res.data,
        });
    } catch (err) {
        dispatch({
            type: GET_FARMER
        });
    }
}

// Register User
export const register = (formData, history) => async dispatch => {
    axios.post('/api/admin/register',  {
            username: formData.username,
            email: formData.email,
            phone: formData.phone,
            password: formData.password,
            confirmPassword: formData.confirmpassword
        })
         .then(res => {
            console.log(res.data)    
         })
         .catch(err => {
             dispatch({
                 type: GET_ERRORS,
                 payload: err.response.data
             })
         })
    }


export const verify = (formData) => async dispatch => {
    try {
        const res = await axios.put('/auth/verify', formData)

        if (res.status === 'success') {
            dispatch(setAlert(res.message, 'success'))
            dispatch({
                type: VERIFY_SUCCESS
            });
            dispatch(loadUser());
        } else {
            // dispatch(setAlert('error', 'warning'))
            dispatch({
                type: VERIFY_FAIL
            })
            dispatch({
                type: CLEAR_AUTH
            })
        }
    } catch (err) {
        if (err.response) {
            dispatch(setAlert(err.response.data.message, 'warning'))
        } else {
            dispatch(setAlert(err.message, 'warning'))
        }
        dispatch({
            type: VERIFY_FAIL
        })
        dispatch({
            type: CLEAR_AUTH
        })
    }
}
