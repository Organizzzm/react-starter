import React, {Component} from 'react';
import {connect} from "react-redux";

export class PageNotFound extends Component {
    render() {
        return (
            <h1>404. Page Not Found!</h1>
        )
    }
}

export default connect()(PageNotFound);