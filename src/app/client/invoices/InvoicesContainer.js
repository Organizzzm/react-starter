/**
 * Invoices page container.
 */
import React, {Component} from 'react';
import {connect} from 'react-redux';

class InvoicesContainer extends Component {
    render() {
        return (
            <h1>Invoices container Page!!</h1>
        )
    }
}

function mapStateToProps(state) {
    return {
        user: state.todos[0]
    }
}


export default connect(mapStateToProps)(InvoicesContainer);