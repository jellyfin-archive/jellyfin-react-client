import React, { Component } from 'react';
import { connect } from "react-redux";
import ConnectAction from '../actions/ConnectAction';
import EntryComponent from '../components/EntryComponent'


class EntryScreen extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            server: '',
            port: ''
        };
        this.connectAction = this.connectAction.bind(this);
    }

    render() {
        return (
            <EntryComponent
                connectAction={this.connectAction}
            />
        );
    }

    connectAction(state) {
        this.props.dispatch(ConnectAction(state.server, state.port));
    }
}

// auth and sample are the reducer keys defined in ../utilities/storage/store.js
function mapStateToProps({ connect }) {
    return ({ connect })
}

export default connect(mapStateToProps)(EntryScreen);
