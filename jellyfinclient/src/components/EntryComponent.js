import React, { Component } from 'react';
import {
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
            server: '',
            port: '',
            connectButtonMessage: 'Connect'
        };
    }

    render() {
        return (
            <View style={styles.container}>
                <Image
                    style={[styles.image]}
                    source={require('./splash.jpg')}
                    resizeMethod="resize"
                />
                <Formik
                    onSubmit={() => {
                        this.props.connectAction(this.state);
                    }}
                    render={({
                        handleSubmit,
                    }) => (
                            <View>
                                <View style={styles.loginInput}>
                                    <View>
                                        <TextInput style={[styles.text, styles.inputBox]}
                                            onChangeText={(server) => this.setState({ server })}
                                            value={this.state.server}
                                            placeholder="Server (eg http://localhost)"
                                            placeholderTextColor="grey"
                                        />
                                    </View>
                                </View>
                                <View style={styles.loginInput}>
                                    <View>
                                        <TextInput style={[styles.text, styles.inputBox]}
                                            onChangeText={(port) => this.setState({ port })}
                                            value={this.state.port}
                                            placeholder="Port (eg 8096)"
                                            placeholderTextColor="grey"
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
