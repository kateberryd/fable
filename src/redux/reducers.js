import { combineReducers } from 'redux';
// Imported Reducers
import alert from './alert/reducer';
import errors from './errorReducer'
import authentication from './authentication/reducer';
import users from './users/reducer';
import profile from './profile/reducer';
import product from './product/reducer';
import settings from './settings/reducer';
import agent from './agents/reducer';
import station from './station/reducer';

const reducers = combineReducers({
    alert,
    authentication,
    users,
    settings,
    profile,
    product,
    agent,
    station,
    errors
});

export default reducers;