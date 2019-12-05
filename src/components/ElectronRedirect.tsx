import React, { Component, ReactNode } from "react";
import { Redirect } from "../utilities/routing";

//This is a component to make Electron load index.html and then forward to the correct Route.

export default class ElectronRedirect extends Component {
    render(): ReactNode {
        return <Redirect to="/" />;
    }
}
