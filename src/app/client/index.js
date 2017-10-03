/**
 * Client side container.
 */
import React, {Component, PureComponent} from 'react';
import {connect} from 'react-redux';
import {Header} from '../shared/components/header/header';
// import {Routes} from "./router";
import {Redirect, Route, Switch} from "react-router-dom";
import {PageNotFound} from "../404/index";
import InvoicesContainer from "./invoices/InvoicesContainer";

class ClientSide extends PureComponent {
    render() {
        return (
            <div>
                <Header/>
                <h1>Client Page!! {this.props.user.text}</h1>
                <hr/>
                <Switch>
                    <Route exact path='/' component={InvoicesContainer}/>
                </Switch>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        user: state.todos[0]
    }
}


export default connect(mapStateToProps)(ClientSide);