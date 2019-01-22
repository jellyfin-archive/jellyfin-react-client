import React, {Component} from 'react';
import {connect} from "react-redux";

import LoginAction from '../actions/LoginAction';

import LoginComponent from '../components/LoginComponent'


class LoginScreen extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            message: 'Welcome to login component of this app.',
            passActionDispatchValue: 1,
            failActionDispatchValue: 0,
        };
        this.loginAction = this.loginAction.bind(this);
    }

    render() {
        return (            
            <LoginComponent
                loginAction={this.loginAction}
                username={this.props.auth.username}
                password={this.props.auth.password}
                serverAddress={this.props.auth.serverAddress}
            />
        );
    }

    loginAction(state) {
        this.props.dispatch(LoginAction(state.serverAddress,state.username,state.password))
    }
}
// auth is the reducer key defined in ../utilities/storage/store.js
function mapStateToProps({auth}) {
    return ({auth})
}


export default connect(mapStateToProps)(LoginScreen);
