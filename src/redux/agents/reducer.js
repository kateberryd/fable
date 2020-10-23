import {
    CREATE_AGENT,
    CREATE_AGENT_SUCCESS,
    CREATE_AGENT_FAILED
 } from './constant';

import isEmpty from '../../validation/is-empty'

const INIT_STATE = {
    create_agent: null,
    error: null,
    loading: false,
}

export default (state = INIT_STATE, action) => {
    const { type, payload } = action;

    switch (type) {
        case CREATE_AGENT:
            return { ...state, loading: true };
        case CREATE_AGENT_SUCCESS:
            return { ...state, create_agent: payload, loading: false, error: null };
        case CREATE_AGENT_FAILED:
            return { ...state, error: payload, loading: false };
        default:
            return state
    }
}