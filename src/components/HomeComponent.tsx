import React, { Component, ReactNode } from "react";
import { View, Text } from "react-native";
import { connect } from "react-redux";

import styles from "./Style";
import { JellyfinProps, Storage } from "../Props";
import { getApiClient } from '../utilities/api-client';

interface HomeComponentState {
    demoText: string;
}

class HomeComponent extends Component<JellyfinProps, HomeComponentState> {
    state = {
        demoText: ""
    };

    async componentDidMount() {
        const apiClient = getApiClient();
        let newDemoText;
        if (apiClient) {
            newDemoText = await apiClient.getResumableItems(this.props.storage.authCredentials.userId);
            newDemoText = await JSON.stringify(newDemoText);
        } else {
            newDemoText = "NOT CONNECTED";
        }
        this.setState({ demoText: newDemoText });
    }

    render(): ReactNode {
        return (
            <View style={styles.container}>
                <Text style={[styles.biggerText]}>
                    DEMO-STRING (your resumable items):
                    {"\n"}
                    {"\n"}
                    {this.state.demoText}
                </Text>
            </View>
        );
    }
}

function mapStateToProps(storage: Storage) {
    return {
        storage: {
            jellyfinInterface: storage.jellyfinInterface,
            authCredentials: storage.authCredentials
        }
    } as JellyfinProps;
}

export default connect(mapStateToProps)(HomeComponent);
