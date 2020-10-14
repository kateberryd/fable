import React from 'react';
import {
    CREATE_PRODUCT,
    GET_PRODUCT,
} from '../constants/';


const INIT_STATE = {
    product:{}
}

export default (state = INIT_STATE, action) => {
    const { type, payload } = action;
    switch (type) {
        default:
            return state
    }
}