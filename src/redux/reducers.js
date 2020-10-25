import { combineReducers } from 'redux';
// Imported Reducers
import alert from './alert/reducer';
import errors from './errorReducer'
import authentication from './authentication/reducer';
import profile from './profile/reducer';
import product from './product/reducer';
import settings from './settings/reducer';
import agent from './agents/reducer';
import station from './station/reducer';

const reducers = combineReducers({
    alert,
    authentication,
    settings,
    profile,
    product,
    agent,
    station,
    errors
});

export default reducers;