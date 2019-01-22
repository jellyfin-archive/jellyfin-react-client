import React, {Component} from 'react';
import {connect} from "react-redux";

import EntryComponent from '../components/EntryComponent'


class EntryScreen extends Component {
    render() {
        return (
            <EntryComponent
                message={this.props.sample.message}
                loginStatus={this.props.loginStatus}
            />
        );
    }
}

// auth and sample are the reducer keys defined in ../utilities/storage/store.js
function mapStateToProps({auth,sample}) {
    return ({
        loginStatus: auth.loginStatus,
        sample
    })
}


export default connect(mapStateToProps)(EntryScreen);
