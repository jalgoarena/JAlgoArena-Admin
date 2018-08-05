import rootReducer from './reducers';
import {applyMiddleware, createStore, compose} from 'redux';
import thunk from 'redux-thunk';

import {createHashHistory} from 'history';

import {connectRouter, routerMiddleware} from 'connected-react-router';

const history = createHashHistory();

const composeEnhancers =
    typeof window === 'object' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : compose;
const store = createStore(
    connectRouter(history)(rootReducer),
    composeEnhancers(
        applyMiddleware(
            routerMiddleware(history),
            thunk
        )
    )
);

export {store, history};
