import React, {Component} from 'react';
import {connect} from "react-redux";

import  SampleAction from '../actions/SampleAction';
import LoginComponent from '../components/LoginComponent'


class LoginScreen extends Component {
    render() {
        return (
            <LoginComponent
                message={this.props.sampleReducer.message}
            />
        );
    }
}

function mapStateToProps({sampleReducer}) {
    return ({sampleReducer})
}


export default connect(mapStateToProps)(LoginScreen);
