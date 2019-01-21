import React, { Component } from 'react';
import {Redirect} from '../utilities/routing/index';

// This is a dumb component that is common for native and web

export default class ElectronRedirect extends Component {
    render() {
        return (
            <Redirect to="/"/>
        );
    }
}

