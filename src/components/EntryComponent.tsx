import React, { useState,useCallback } from "react";
import { View, TextInput, Button, Image } from "react-native";
import styles from "./Style";
import { Formik } from "formik";
import { useDispatch } from "react-redux";
import { Redirect } from "react-router";
import connectToServer from "../actions/ConnectAction";
import { useSelector } from "../utilities/storage/store";

const EntryComponent: React.FC = () => {

    const dispatch = useDispatch()
    const connectionStatus = useSelector(state => state.connectionStatus)

    const [server, setServer] = useState(connectionStatus.serverAddress || '')

    const handleSubmit = useCallback(() => {
        dispatch(connectToServer(server));
    }, [dispatch, server])

    return connectionStatus.connectStatus ? (
      <Redirect to="/login" />
    ) : (
      <View style={styles.container}>
        <Image style={[styles.image]} source={require("./splash.jpg")} resizeMethod="resize" />
        <Formik
          initialValues={{}}
          onSubmit={handleSubmit}
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
