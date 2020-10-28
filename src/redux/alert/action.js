import { v4 as uuidv4 } from 'uuid';
import {
    SET_ALERT,
    REMOVE_ALERT,
    CLOSE_ALERT
} from './constant';


export const setAlert = (msg, alertType, timeOut = 2000) => dispatch => {
    const id = uuidv4();
    // const id = uuid.v4();
    // const id = 4;

    dispatch({
        type: SET_ALERT,
        payload: { msg, alertType, id }
    })

    setTimeout(() => dispatch({
        type: REMOVE_ALERT,
        payload: id
    }), timeOut)
}

export const closeAlert = (id) => dispatch => {

    dispatch({
        type: CLOSE_ALERT,
        payload: id
    })
}