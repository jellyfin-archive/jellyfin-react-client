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
                username={this.props.loginReducer.username}
                password={this.props.loginReducer.password}
                serverAddress={this.props.loginReducer.serverAddress}
            />
        );
    }

    loginAction(state) {
        this.props.dispatch(LoginAction(state.serverAddress,state.username,state.password))
    }
}

function mapStateToProps({loginReducer}) {
    return ({loginReducer})
}


export default connect(mapStateToProps)(LoginScreen);
