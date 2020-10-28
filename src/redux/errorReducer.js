import {GET_ERRORS} from './constants/index';

const INIT_STATE = {
  
}

export default (state = INIT_STATE, action) => {
    const { type, payload} = action;

    switch (type) {
        case GET_ERRORS:
        return payload
        default:
            return state
    }
}