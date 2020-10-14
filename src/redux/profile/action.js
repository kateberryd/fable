import axios from '../../utils/axios';
import {
    GET_PROFILE,
    GET_PROFILES,
    PROFILE_NOT_FOUND,
    PROFILE_LOADING,
    CLEAR_CURRENT_PROFILE,
    GET_ERRORS
} from '../constants'


export const getCurrentProfile = () => dispatch => {
    
    dispatch(setProfileLoading)
    axios.get('/api/admin/adminProfile')
         .then(res => {
             dispatch({
                 type: GET_PROFILE,
                 payload: res.data.details[0]
             })
         })
         .catch(err => {
            dispatch({
                type: GET_ERRORS,
                payload: {}
            })
         })
}

export const setProfileLoading = () => dispatch => {
    return{
        type: PROFILE_LOADING
    }
}

export const clearCurrentProfile = () => dispatch => {
    return{
        type: CLEAR_CURRENT_PROFILE
    }
}