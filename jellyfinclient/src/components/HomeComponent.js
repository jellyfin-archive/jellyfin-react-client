import React, { Component } from 'react';
import {
    View,
    Text
} from 'react-native';
import { connect } from 'react-redux';

import styles from './Style'
import JFInterface from '../actions/ApiClient';

class HomeComponent extends Component {
    state = {
        demoText: ""
    }

    async componentDidMount() {
        let newDemoText
        if (JFInterface.apiClient) {
            newDemoText = await JFInterface.apiClient.getResumableItems(this.props.storage.authCredentials.userid);
            newDemoText = await JSON.stringify(newDemoText);
        }
        else newDemoText = "NOT CONNECTED";
        this.setState({ demoText: newDemoText });
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={[styles.biggerText]}>
                    DEMO-STRING (your resumable items):
                    {"\n"}
                    {"\n"}
                    {this.state.demoText}
                </Text>
            </View>
        )
    }
}

function mapStateToProps(state) {
    return { storage: state };
}

export default connect(mapStateToProps)(HomeComponent);
