import React, { Component } from 'react';
import { Formik } from 'formik';
import { connect } from 'react-redux';
import {
    Button,
    Text,
    View,
    TextInput,
    StatusBar
} from 'react-native';
import styles from './Style'
import { Redirect } from '../utilities/routing'
import { loginToJellyfin } from '../actions/ApiFunctions';

class LoginComponent extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            message: 'Login with your user credentials:',
            usernameMessage: 'Username: ',
            passwordMessage: 'Password: ',
            username: this.props.storage.authCredentials.username,
            password: '',
            loginButtonMessage: 'Login',
            loginSuccess: false
        };
    }

    componentDidUpdate() {
        let isloggedin = this.props.storage.jellyfinInterface.apiClient.isLoggedIn();
        if (this.state.loginSuccess !== isloggedin)
            this.setState({ loginSuccess: isloggedin });
    }

    render() {
        return (
            !this.props.storage.jellyfinInterface.apiClient ?
                <Redirect to="/" />
                :
                this.state.loginSuccess ?
                    <Redirect to="/home" />
                    :
                    <View style={styles.container}>
                        <StatusBar hidden />
                        <Formik
                            onSubmit={() => {
                                loginToJellyfin(this.state.username, this.state.password)
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
