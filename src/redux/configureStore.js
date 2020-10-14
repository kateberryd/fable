import { createStore, applyMiddleware, compose } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunkMiddleware from 'redux-thunk';
// import { createLogger } from 'redux-logger';
import rootReducer from './reducers';
import setAuthToken from '../utils/setAuthToken';

// const logger = createLogger();

export default function configureStore(initialState = {}) {

    const middlewares = [thunkMiddleware]; //logger

    const middlewareEnhancer = composeWithDevTools(
        applyMiddleware(...middlewares)
    );

    const enhancers = [middlewareEnhancer];
    const composedEnhancers = compose(...enhancers);

    const store = createStore(rootReducer, initialState, composedEnhancers);

    // set up a store subscription listener
    // to store the users token in localStorage

    // initialize current state from redux store for subscription comparison
    // preventing undefined error

    let currentState = store.getState();

    store.subscribe(() => {
        // keep track of the previous and current state to compare changes
        let previousState = currentState;
        currentState = store.getState();
        // if the token changes set the value in localStorage and axios headers
        if (previousState.authentication.token !== currentState.authentication.token) {
            const token = currentState.authentication.token;
            setAuthToken(token);
        }
    });

    return store;
};