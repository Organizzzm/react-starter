import {combineReducers} from 'redux';
import {routerReducer} from 'react-router-redux';

import {todos} from '../app/client/todo';

export default combineReducers({
    router: routerReducer,
    todos
});