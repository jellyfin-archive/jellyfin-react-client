import React, { Component } from 'react';
import {Redirect} from '../utilities/routing/index';

// Equivalent of a 404

export default class NoMatch extends Component {
    render() {
        return (
            <Redirect to="/"/>
        );
    }
}

