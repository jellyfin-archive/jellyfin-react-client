import React, { Component, ReactNode } from "react";
import { ActivityIndicator, StyleSheet, View } from "react-native";

// This is a loading component that is common for native and web
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center"
    },
    horizontal: {
        flexDirection: "row",
        justifyContent: "space-around",
        padding: 10
    }
});

export default class Loading extends Component {
    render(): ReactNode {
        return (
          <View style={[styles.container, styles.horizontal]}>
            <ActivityIndicator size="large" color="#0000ff" />
          </View>
        );
    }
}
