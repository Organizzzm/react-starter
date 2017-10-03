import { createStore, applyMiddleware } from 'redux'
import { routerMiddleware } from 'react-router-redux'
import thunk from 'redux-thunk';

import {composeWithDevTools} from 'redux-devtools-extension';
import invariant from 'redux-immutable-state-invariant';

import createHistory from 'history/createBrowserHistory';
import rootReducer from './reducers';

const history = createHistory();
const middleware = routerMiddleware(history);

export default function configureStore(initialState) {
    /**
     * Connect Development Tools.
     * Invariant - Redux middleware that detects mutations between and outside redux dispatches.
     * For development use only.
     */
    const composeEnhancers = composeWithDevTools({});

    /**
     * Configurate Redux store.
     * Configurate browser history through the redux store.
     */
    const store = createStore(rootReducer, initialState, composeEnhancers(
        applyMiddleware(invariant(), thunk, middleware)
    ));

    /**
     * Hot module replacement of reducers.
     */
    if (module.hot) {
        module.hot.accept('./reducers', () => {
            const nextRootReducer = require('./reducers').default;
            store.replaceReducer(nextRootReducer);
        });
    }

    return store;
}

export const routerHistory = history;