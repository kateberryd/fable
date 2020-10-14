import {
    GET_PROFILE,
    GET_PROFILES,
    PROFILE_NOT_FOUND,
    PROFILE_LOADING,
    CLEAR_CURRENT_PROFILE
} from '../constants'
import isEmpty from '../../validation/is-empty';

const INIT_STATE = {
   profile: null,
   profiles : null,
   loading: false
}

export default (state = INIT_STATE, action) => {
    const { type, payload} = action;

    switch (type) {
        case PROFILE_LOADING:
            return{
                ...state,
                loading: true
            }
        case GET_PROFILE:
            return{
                ...state,
               profile: payload,
               loading: false
            }
            
        case CLEAR_CURRENT_PROFILE:
            return{
                ...state,
                profile: null
               
            }
        default:
            return state
    }
}