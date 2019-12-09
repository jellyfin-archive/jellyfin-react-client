import React, { Component, ReactNode } from "react";
import { Redirect } from "../utilities/routing";

// Equivalent of a 404

export default class NoMatch extends Component {
    render(): ReactNode {
        return <Redirect to="/" />;
    }
}
