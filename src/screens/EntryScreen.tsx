import React, { Component } from "react";
import { connect } from "react-redux";
import ConnectAction from "../actions/ConnectAction";
import EntryComponent from "../components/EntryComponent";
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
        this.connectAction = this.connectAction.bind(this);
    }

    render() {
        return <EntryComponent connectAction={this.connectAction} />;
    }

    connectAction(state: EntryScreenState) {
        this.props.dispatch(ConnectAction(state.server, state.port));
    }
}

// auth and sample are the reducer keys defined in ../utilities/storage/store.ts
function mapStateToProps({ connect }) {
    return { connect };
}

export default connect(mapStateToProps)(EntryScreen);
