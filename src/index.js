/**
 * Application initialization.
 */

import React from 'react';
import ReactDOM from "react-dom";
import {Provider} from 'react-redux';

import configureStore from './config/configureStore';
import {AppContainer} from './app/app';

const store = configureStore();

function render() {
    ReactDOM.render((
        <Provider store={store}>
            <AppContainer/>
        </Provider>
    ), document.getElementById('root'));
}

render();

if (module.hot) module.hot.accept('./app/app', () => {
    render();
});