import React, { Component } from 'react';
import { Formik } from 'formik';
import { connect } from "react-redux";
import {
    Button,
    Text,
    View,
    TextInput,
    StatusBar
} from 'react-native';
import styles from './Style'

class LoginComponent extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            message: 'Login with your user credentials:',
            usernameMessage: 'Username: ',
            passwordMessage: 'Password: ',
            username: this.props.storage.authCredentials.username,
            password: this.props.storage.authCredentials.password,
            loginButtonMessage: 'Login',
        };
    }

    render() {
        return (
            <View style={styles.container}>
                <StatusBar hidden />
                <Formik
                    onSubmit={() => {
                        this.props.loginAction(this.state)
                    }}
                    render={({
                        handleSubmit,
                    }) => (
                            <View>
                                <View style={styles.loginInput}>
                                    <Text style={[styles.biggerText]}>
                                        {this.state.message}
                                    </Text>
                                </View>
                                <View style={styles.loginInput}>
                                    <Text style={styles.text}>
                                        {this.state.usernameMessage}
                                    </Text>
                                    <View>
                                        <TextInput style={[styles.text, styles.inputBox]}
                                            onChangeText={(username) => this.setState({ username })}
                                            value={this.state.username}
                                        />
                                    </View>
                                </View>

                                <View style={styles.loginInput}>
                                    <Text style={styles.text}>
                                        {this.state.passwordMessage}
                                    </Text>
                                    <View>
                                        <TextInput secureTextEntry={true} style={[styles.text, styles.inputBox]}
                                            onChangeText={(password) => this.setState({ password })}
                                            value={this.state.password}
                                        />
                                    </View>
                                </View>

                                <View style={styles.loginInput}>
                                    <Button onPress={handleSubmit} title={this.state.loginButtonMessage} />
                                </View>
                            </View>
                        )}
                />
            </View>
        );
    }
}

function mapStateToProps(storage) {
    return { storage };
}

export default connect(mapStateToProps)(LoginComponent);
