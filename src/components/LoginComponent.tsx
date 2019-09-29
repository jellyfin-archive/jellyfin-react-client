import React, { Component } from "react";
import { Formik } from "formik";
import { connect } from "react-redux";
import { Button, Text, View, TextInput, StatusBar } from "react-native";
import styles from "./Style";
import { Redirect } from "../utilities/routing";
import { loginToJellyfin } from "../actions/ApiFunctions";
import { JellyfinProps } from "../Props";

class LoginComponent extends Component<JellyfinProps> {
    state = {
        message: "Login with your user credentials:",
        usernameMessage: "Username: ",
        passwordMessage: "Password: ",
        username: this.props.storage.authCredentials.username,
        password: "",
        loginButtonMessage: "Login",
        loginSuccess: false
    };

    componentDidUpdate() {
        const isLoggedIn = this.props.storage.jellyfinInterface.apiClient.isLoggedIn();
        if (this.state.loginSuccess !== isLoggedIn) this.setState({ loginSuccess: isLoggedIn });
    }

    render() {
        return this.calculateContent();
    }

    calculateContent() {
        if (!this.props.storage.jellyfinInterface.apiClient) return <Redirect to="/"/>;
        if (this.state.loginSuccess) return <Redirect to="/home"/>;
        return (
            <View style={styles.container}>
                <StatusBar hidden/>
                <Formik
                    initialValues={{}}
                    onSubmit={() => {
                        loginToJellyfin(this.state.username, this.state.password);
                    }}
                    render={(props) => (
                        <View>
                            <View style={styles.loginInput}>
                                <Text style={[styles.biggerText]}>{this.state.message}</Text>
                            </View>
                            <View style={styles.loginInput}>
                                <Text style={styles.text}>{this.state.usernameMessage}</Text>
                                <View>
                                    <TextInput style={[styles.text, styles.inputBox]} onChangeText={username => this.setState({ username })} value={this.state.username}/>
                                </View>
                            </View>

                            <View style={styles.loginInput}>
                                <Text style={styles.text}>{this.state.passwordMessage}</Text>
                                <View>
                                    <TextInput secureTextEntry={true} style={[styles.text, styles.inputBox]} onChangeText={password => this.setState({ password })}
                                               value={this.state.password}/>
                                </View>
                            </View>

                            <View style={styles.loginInput}>
                                <Button onPress={props.submitForm} title={this.state.loginButtonMessage}/>
                            </View>
                        </View>
                    )}
                />
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
    };
}

export default connect(mapStateToProps)(LoginComponent);
