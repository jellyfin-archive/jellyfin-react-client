import React, { Component } from 'react';
import {
    Text,
    View,
    TextInput,
    Button,
    Image,
} from 'react-native';
import styles from './Style'
import { Formik } from 'formik';


export default class EntryComponent extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            serverMessage: 'Server: ',
            server: '',
            portMessage: 'Port: ',
            port: '',
            connectButtonMessage: 'Connect'
        };
    }

    render() {
        return (
            <View style={styles.container}>
                <Image
                    style={[styles.image]}
                    source={require('./splash.png')}
                    resizeMethod="resize"
                />
                <Formik
                    onSubmit={() => {
                        this.props.connectAction(this.state);
                    }}
                    render={({
                        handleSubmit,
                    }) => (
                            <View style={styles.container}>
                                <View style={styles.loginInput}>
                                    <Text style={styles.text}>
                                        {this.state.serverMessage}
                                    </Text>
                                    <View>
                                        <TextInput style={[styles.text, styles.inputBox]}
                                            onChangeText={(server) => this.setState({ server })}
                                            value={this.state.server}
                                        />
                                    </View>
                                </View>
                                <View style={styles.loginInput}>
                                    <Text style={styles.text}>
                                        {this.state.portMessage}
                                    </Text>
                                    <View>
                                        <TextInput style={[styles.text, styles.inputBox]}
                                            onChangeText={(port) => this.setState({ port })}
                                            value={this.state.port}
                                        />
                                    </View>
                                </View>
                                <View style={styles.loginInput}>
                                    <Button style={[styles.button]}
                                        title={this.state.connectButtonMessage}
                                        onPress={handleSubmit}
                                    />
                                </View>
                            </View>
                        )}
                />
            </View>
        );
    }
}
