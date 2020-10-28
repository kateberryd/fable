import axios from '../../utils/axios';
import { setAlert } from '../alert/action';
import jwt_decode from 'jwt-decode';
import {
    REGISTER_SUCCESS,
    REGISTER_FAIL,
    VERIFY_SUCCESS,
    VERIFY_FAIL,
    USER_LOADED,
    AUTH_ERROR,
    GET_ERROR,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    FORGOT_PASSWORD,
    FORGOT_ERROR,
    RESET_PASSWORD,
    RESET_ERROR,
    LOGOUT,
    GET_ERRORS,
    CLEAR_AUTH,
    SET_CURRENT_USER
} from '../constants/';
import setAuthToken from '../../utils/setAuthToken';


export const loadUser = () => async dispatch => {
    try {
        const res = await axios.get('/user');

        dispatch({
            type: USER_LOADED,
            payload: res.data,
        });
    } catch (err) {
        dispatch({
            type: AUTH_ERROR
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
             console.log(err.response)
         })
    }

    // export const adminRegister = (formData, history) => async dispatch => {
    //     axios.post('/api/admin/register',  {
    //             username: formData.username,
    //             email: formData.email,
    //             phone: formData.phone,
    //             password: formData.password,
    //             confirmPassword: formData.confirmpassword
    //         })
    //          .then(res => {
    //             if (res.status === 'success') {
    //                 dispatch(setAlert(res.message, 'success'))
    //                 dispatch({
    //                     type: VERIFY_SUCCESS
    //                 });
    //                 dispatch(loadUser());
    //             } else {
    //                 dispatch(setAlert('error', 'warning'))
    //                 dispatch({
    //                     type: VERIFY_FAIL
    //                 })
    //                 dispatch({
    //                     type: CLEAR_AUTH
    //                 })
                    
    //                 // console.log(res.data)
    //             }
    //          })
    //          .catch(err => {
    //              dispatch({
    //                  type: GET_ERRORS,
    //                  payload: err.response.data
    //              })
    //          })
    //     }

// Verify User
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

// Login User
export const login = (formData) => async dispatch => {
         await axios.post('/api/admin/login', {
                username: formData.username,
                password: formData.password
            })
            .then(res => {
                const {token } = res.data;
                localStorage.setItem('jwtToken', token);
                setAuthToken(token);
                const decoded = jwt_decode(token);
                dispatch(setCurrentUser(decoded.user))
                console.log(res.data)
            })
            .catch(err => {
                console.log(err)
               if(err){
                dispatch({
                    type: GET_ERRORS,
                    payload: err.response.data
                })
               }
            })
    }

    export const setCurrentUser = decoded => {
        return{
            type: SET_CURRENT_USER,
            payload: decoded
        }
    }

    


// forgot password
export const forgotPassword = (id) => async dispatch => {
    console.log(id);
    try {
        const res = await axios.post('/auth/password/forgot', id)

        if (res.data) {
            dispatch(setAlert(res.data.status, 'success'))
            dispatch({
                type: FORGOT_PASSWORD,
                payload: res.data
            });
        } else {
            dispatch(setAlert(res.message, 'warning'))
            dispatch({
                type: FORGOT_ERROR
            })
            dispatch({
                type: CLEAR_AUTH
            })
        }

    } catch (err) {
        if (err.response) {
            dispatch(setAlert(err.response.data.message, 'warning'))
        } else {
            dispatch(setAlert(err.message, 'error'))
        }
        dispatch({
            type: FORGOT_ERROR
        })
        dispatch({
            type: CLEAR_AUTH
        })
    }
}

// reset password
export const resetPassword = (password, history) => async dispatch => {

    try {
        const res = await axios.put('/auth/password/reset', password)

        if (res.data) {
            dispatch(setAlert(res.data.status, 'success'))
            dispatch({
                type: RESET_PASSWORD,
                payload: res.data
            });
        } else {
            dispatch(setAlert(res.message, 'warning'))
            dispatch({
                type: RESET_ERROR
            })
            dispatch({
                type: CLEAR_AUTH
            })
        }

        // history.push('/auth/login');

    } catch (err) {
        if (err.response) {
            dispatch(setAlert(err.response.data.message, 'warning'))
        } else {
            dispatch(setAlert(err.message, 'warning'))
        }
        dispatch({
            type: RESET_ERROR
        })
        dispatch({
            type: CLEAR_AUTH
        })
    }
}

// logout
export const logout = () => dispatch => {
    localStorage.removeItem('jwtToken');
    setAuthToken(false);
    dispatch(setCurrentUser({}))
};