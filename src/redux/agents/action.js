import axios from '../../utils/axios';
import { setAlert } from '../alert/action';
import jwt_decode from 'jwt-decode';

import {
   CREATE_AGENT,
   CREATE_AGENT_SUCCESS,
   CREATE_AGENT_FAILED,
   GET_AGENT_LIST,
   GET_AGENT_LIST_SUCCESS,
   GET_AGENT_LIST_FAILED
} from './constant';

// create agent

export const createAgent = (formData) => async dispatch => {
    console.log(formData)
    dispatch(setCreateAgentLoading());
    await axios.post('/api/admin/create-agent', formData)
       .then(res => {
            dispatch({
                type: CREATE_AGENT_SUCCESS,
                payload: res.data.agent
            })
       })
       .catch(err => {
           console.log(err.response.data)
          if(err){
           dispatch({
               type: CREATE_AGENT_FAILED,
               payload: err.response.data
           })
          }
       })
}


export const setCreateAgentLoading = () => {
    return{
        type: CREATE_AGENT,
    }
}



export const getAgentList = (formData) => async dispatch => {
    dispatch(setGetAgentListLoading());
    await axios.get('/api/admin/getAgents')
       .then(res => {
            // dispatch({
            //     type: GET_AGENT_LIST_SUCCESS,
            //     payload: res.data
            // })
            console.log(res.data);
       })
       .catch(err => {
           console.log(err.response.data)
          if(err){
           dispatch({
               type: GET_AGENT_LIST_FAILED,
               payload: err.response.data
           })
          }
       })
}


export const setGetAgentListLoading = () => {
    return{
        type: GET_AGENT_LIST,
    }
}