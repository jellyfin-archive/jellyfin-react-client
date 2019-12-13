import React, { useState } from "react";
import { View, TextInput, Button, Image } from "react-native";
import styles from "./Style";
import { Formik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router";
import { ConnectionStatus, Storage } from "../Props";
import ConnectAction from "../actions/ConnectAction";

export interface EntryComponentState {
    server: string;
    connectionStatus: ConnectionStatus;
}

const EntryComponent: React.SFC = () => {

    const dispatch = useDispatch()
    const connectionStatus = useSelector((state: Storage) => state.connectionStatus)
    const [server, setServer] = useState(connectionStatus.serverAddress)

    return connectionStatus.connectStatus ? (
        <Redirect to="/login" />
    ) : (
        <View style={styles.container}>
            <Image style={[styles.image]} source={require("./splash.jpg")} resizeMethod="resize" />
            <Formik
                initialValues={{}}
                onSubmit={() => {
                    dispatch(ConnectAction(server));
                }}
                render={({ handleSubmit }) => (
                    <View>
                        <View style={styles.loginInput}>
                            <View>
                                <TextInput
                                    style={[styles.text, styles.inputBox]}
                                    onChangeText={server => setServer(server)}
                                    value={server}
                                    placeholder="Server (eg http://localhost)"
                                    placeholderTextColor="grey"
                                />
                            </View>
                        </View>
                        <View style={styles.loginInput}>
                            <Button title='Connect' onPress={handleSubmit} />
                        </View>
                    </View>
                )}
            />
        </View>
    );
}

export default EntryComponent;
