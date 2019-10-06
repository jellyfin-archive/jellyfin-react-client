import React, { Component } from "react";
import { Redirect } from "react-router";

//This is a component to make Electron load index.html and then forward to the correct Route.

export default class ElectronRedirect extends Component {
    render() {
        return <Redirect to="/" />;
    }
}
