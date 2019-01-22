import React, { Component } from 'react';
import { Formik } from 'formik';
import {
    Button,
    StyleSheet,
    Text,
    View,
    TextInput
} from 'react-native';
import { Link } from '../utilities/routing/index';

// This is a dumb component that is common for native and web

export default class LoginComponent extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            message: 'Welcome to login component of this app.',
            usernameMessage: 'Username: ',
            passwordMessage: 'Password: ',
            serverAddressMessage: 'Server address: ',
            serverAddress: '',
            username: '',
            password: '',
            loginButtonMessage: 'Login',
        };
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.biggerText}>
                    {this.state.message}
                </Text>
                <Formik
                    onSubmit={() => {
                        this.props.loginAction(this.state)
                    }}
                    render={({
                        handleSubmit,
                    }) => (
                            <View>
                                <View style={styles.row}>
                                    <Text style={styles.text}>
                                        {this.state.usernameMessage}
                                    </Text>
                                    <View style={styles.text}>
                                        <TextInput style={{ height: 25, borderColor: 'gray', borderWidth: 1 }}
                                            onChangeText={(username) => this.setState({ username })}
                                            value={this.state.username}
                                        />
                                    </View>
                                </View>

                                <View style={styles.row}>
                                    <Text style={styles.text}>
                                        {this.state.passwordMessage}
                                    </Text>
                                    <View style={styles.text}>
                                        <TextInput secureTextEntry={true} style={{ height: 25, borderColor: 'gray', borderWidth: 1 }}
                                            onChangeText={(password) => this.setState({ password })}
                                            value={this.state.password}
                                        />
                                    </View>
                                </View>

                                <View style={styles.row}>
                                    <Text style={styles.text}>
                                        {this.state.serverAddressMessage}
                                    </Text>
                                    <View style={styles.text}>
                                        <TextInput style={{ height: 25, borderColor: 'gray', borderWidth: 1 }}
                                            onChangeText={(serverAddress) => this.setState({ serverAddress })}
                                            value={this.state.serverAddress}
                                        />
                                    </View>
                                </View>

                                <View style={styles.row}>
                                    <Button onPress={handleSubmit} title={this.state.loginButtonMessage} />
                                </View>
                            </View>
                        )}
                />
                <Text style={styles.biggerText}>
                Current data{"\n"}
                {this.state.usernameMessage} {this.props.username}{"\n"}
                {this.state.passwordMessage} {this.props.password}{"\n"}
                {this.state.serverAddressMessage} {this.props.serverAddress}
                </Text>

                <View style={styles.button}>
                    <Link to={'/'}>
                        <Text>Go back.</Text>
                    </Link>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    row: {
        flexDirection: 'row',
        margin: 5,
        justifyContent: 'center',
        alignItems: 'center',
    },
    biggerText: {
        fontSize: 17,
        alignSelf: 'center'
    },
    button: {
        margin: 5
    }
});
