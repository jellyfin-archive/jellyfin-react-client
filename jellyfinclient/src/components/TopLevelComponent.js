import React, { Component } from 'react';
import {
    Button,
    StyleSheet,
    Text,
    View
} from 'react-native';
import {Link} from '../utilities/routing/index';

// This is a dumb component that is common for native and web

export default class TopLevelComponent extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            message: 'Welcome to top level component of this app.',
        };
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.biggerText}>
                    {this.state.message}
                </Text>

                <Text style={styles.biggerText}>
                    {this.props.message}
                </Text>
                <View style={styles.button}>
                    <Link to={'/login'}>
                        <Button title="To get started, go to the login page."/>
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
    link: {
        alignSelf: 'center'
    },
    biggerText: {
        fontSize: 17,
        alignSelf: 'center'
    },
    button: {
        margin: 5
    }
});
