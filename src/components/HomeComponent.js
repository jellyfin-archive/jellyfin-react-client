import React, { Component } from "react";
import { View, Text } from "react-native";
import { connect } from "react-redux";

import styles from "./Style";

class HomeComponent extends Component {
  state = {
    demoText: ""
  };

  async componentDidMount() {
    let apiClient = this.props.storage.jellyfinInterface.apiClient;
    let newDemoText;
    if (apiClient) {
      newDemoText = await apiClient.getResumableItems(
        this.props.storage.authCredentials.userid
      );
      newDemoText = await JSON.stringify(newDemoText);
    } else newDemoText = "NOT CONNECTED";
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
    );
  }
}

function mapStateToProps(storage) {
  return { storage };
}

export default connect(mapStateToProps)(HomeComponent);
