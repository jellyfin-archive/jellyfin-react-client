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

    async componentWillMount() {
        console.log(this.props);
        let newDemoText = await JFInterface.apiClient.getResumableItems(this.props.storage.authCredentials.userid);
        newDemoText = await JSON.stringify(newDemoText);
        this.setState({ demoText: newDemoText });
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={[styles.biggerText]}>
                    DEMO-STRING (your resumable items):
                    <br />
                    <br />
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
