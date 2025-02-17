import {
    SET_ALERT,
    REMOVE_ALERT,
    CLOSE_ALERT
} from './constant';

const INIT_STATE = [];

export default (state = INIT_STATE, action) => {
    const { type, payload } = action;

    switch (type) {
        case SET_ALERT:
            return [...state, payload];

        case REMOVE_ALERT:
            return state.filter(alert => alert.id !== payload);

        case CLOSE_ALERT:
            return state.filter(alert => alert.id !== payload);

        default:
            return state;
    }
}