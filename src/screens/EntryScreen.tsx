import React, { Component } from "react";
import { connect } from "react-redux";
import ConnectAction from "../actions/ConnectAction";
import EntryComponent, { EntryComponentState } from "../components/EntryComponent";
import { JellyfinProps } from "../Props";

interface EntryScreenState {
    server: string,
    port: string
}

class EntryScreen extends Component<JellyfinProps, EntryScreenState> {
    constructor(props: JellyfinProps) {
        super(props);
        this.state = {
            server: "",
            port: ""
        };
    }

    render() {
        return <EntryComponent />;
    }

}

// auth and sample are the reducer keys defined in ../utilities/storage/store.ts
function mapStateToProps(state: EntryScreenState) {
    return state;
}
function mapDispatchToProps(state: EntryComponentState) {
    return ConnectAction(state.server, state.port)
}

export default connect(mapStateToProps, mapDispatchToProps)(EntryScreen);
