import React, { Component } from 'react';
import { Formik } from 'formik';
import {
    Button,
    Text,
    View,
    TextInput,
    StatusBar    
} from 'react-native';
import styles from './Style'
import { Link } from '../utilities/routing/index';

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
                <StatusBar hidden/>
                <Text style={[styles.text, styles.biggerText]}>
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
                                    <Text style={styles.text}>
                                        {this.state.serverAddressMessage}
                                    </Text>
                                    <View>
                                        <TextInput style={[styles.text, styles.inputBox]}
                                            onChangeText={(serverAddress) => this.setState({ serverAddress })}
                                            value={this.state.serverAddress}
                                        />
                                    </View>
                                </View>

                                <View style={styles.loginInput}>
                                    <Button onPress={handleSubmit} title={this.state.loginButtonMessage} />
                                </View>
                            </View>
                        )}
                />
                <Text style={[styles.text, styles.biggerText]}>
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
