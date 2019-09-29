import React, { PureComponent } from "react";
import { View, TextInput, Button, Image } from "react-native";
import styles from "./Style";
import { Formik } from "formik";
import { connect } from "react-redux";
import { Redirect } from "react-router";
import { ConnectionStatus, JellyfinProps } from "../Props";
import ConnectAction from "../actions/ConnectAction";

export interface EntryComponentState {
    server: string,
    port: string,
    connectButtonMessage: string,
    connectionStatus: ConnectionStatus
}

class EntryComponent extends PureComponent<JellyfinProps, EntryComponentState> {
    constructor(props: JellyfinProps) {
        super(props);
        this.state = {
            server: "",
            port: "",
            connectButtonMessage: "Connect",
            connectionStatus : {
                serverAddress: "",
                serverPort: "",
                connectStatus: false
            },
        };
    }

    componentDidMount() {
        this.setState({
            server: this.props.connectionStatus.serverAddress,
            port: this.props.connectionStatus.serverPort
        });
    }

    componentDidUpdate() {
        if (this.state.connectionStatus.connectStatus !== this.props.connectionStatus.connectStatus)
            this.setState({
                connectionStatus: {
                    serverAddress: this.props.connectionStatus.serverAddress,
                    serverPort: this.props.connectionStatus.serverPort,
                    connectStatus: this.props.connectionStatus.connectStatus
                }
            });
    }

    render() {
        return this.state.connectionStatus.connectStatus ? (
            <Redirect to="/login" />
        ) : (
            <View style={styles.container}>
                <Image style={[styles.image]} source={require("./splash.jpg")} resizeMethod="resize" />
                <Formik
                    initialValues={{}}
                    onSubmit={() => {
                        this.props.dispatch(ConnectAction(this.state.server, this.state.port));
                    }}
                    render={props => (
                        <View>
                            <View style={styles.loginInput}>
                                <View>
                                    <TextInput
                                        style={[styles.text, styles.inputBox]}
                                        onChangeText={server => this.setState({ server })}
                                        value={this.state.server}
                                        placeholder="Server (eg http://localhost)"
                                        placeholderTextColor="grey"
                                    />
                                </View>
                            </View>
                            <View style={styles.loginInput}>
                                <View>
                                    <TextInput
                                        style={[styles.text, styles.inputBox]}
                                        onChangeText={port => this.setState({ port })}
                                        value={this.state.port}
                                        placeholder="Port (eg 8096)"
                                        placeholderTextColor="grey"
                                    />
                                </View>
                            </View>
                            <View style={styles.loginInput}>
                                <Button title={this.state.connectButtonMessage} onPress={props.submitForm} />
                            </View>
                        </View>
                    )}
                />
            </View>
        );
    }
}

function mapStateToProps(state: EntryComponentState) {
    return { connectionStatus: state.connectionStatus } as JellyfinProps;
}

export default connect(mapStateToProps)(EntryComponent);
