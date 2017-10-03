import React from 'react';
import {Redirect, Route, Switch} from 'react-router-dom';
import {ConnectedRouter} from 'react-router-redux';
import {routerHistory} from '../config/configureStore';
import {loadableImport} from './shared/components/loadable/loadable-import';

const AsyncClientPage = loadableImport(import("./client"));
const Async404 = loadableImport(import("./404"));

export const Routes = () => (
    <ConnectedRouter history={routerHistory} key={Math.random()}>
        <Switch>
            <Route exact path="/" component={AsyncClientPage}/>
            <Route path="/admin" render={() => <h1>sdgsdgsdgsdg</h1>}/>
            <Route path="/404" component={Async404}/>
            <Redirect to="/404"/>
        </Switch>
    </ConnectedRouter>
);
