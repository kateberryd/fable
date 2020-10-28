import axios from '../../utils/axios';
import { setAlert } from '../alert/action';


import {
   CREATE_STATION,
   CREATE_STATION_SUCCESS,
   CREATE_STATION_FAILED
} from './constant';


// create agent

export const createStation = (formData) => async dispatch => {
    console.log(formData)
    dispatch(setCreateStationLoading());
    await axios.post('/api/admin/create-station', {
        adminId: formData.adminId,
        stationName: formData.station_name,
        email: formData.station_email,
        phone: formData.station_phone,
        address: formData.station_address,
        city: formData.station_city,
        state: formData.station_state,
        lga: formData.station_lga,
    })
       .then(res => {
            dispatch({
                type: CREATE_STATION_SUCCESS,
                payload: res.data.station
            })
       })
       .catch(err => {
           console.log(err.response.data)
          if(err){
           dispatch({
               type: CREATE_STATION_FAILED,
               payload: err.response.data
           })
          }
       })
}


export const setCreateStationLoading = () => {
    return{
        type: CREATE_STATION,
    }
}

