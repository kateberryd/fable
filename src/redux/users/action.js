import axios from '../../utils/axios';
import { setAlert } from '../alert/action';


import {
 GET_USER_LIST,
 GET_USER_LIST_SUCCESS,
 GET_USER_LIST_FAILED
} from './constant';


// GET USERS

export const getUserList = () => async dispatch => {
    dispatch(setGetUserLoading());
    await axios.get('/api/admin/users')
       .then(res => {
            dispatch({
                type: GET_USER_LIST_SUCCESS,
                payload: res.data.users
            })
            console.log(res.data);
       })
       .catch(err => {
           console.log(err.response.data)
          if(err){
           dispatch({
               type: GET_USER_LIST_FAILED ,
               payload: err.response.data
           })
          }
       })
}

export const setGetUserLoading = () => {
    return{
        type: GET_USER_LIST,
    }
}



