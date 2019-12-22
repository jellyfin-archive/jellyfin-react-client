import React, { useState } from "react";
import { Formik } from "formik";
import { Button, Text, View, TextInput, StatusBar } from "react-native";
import styles from "./Style";
import { Redirect } from "../utilities/routing";
import loginToJellyfin from "../actions/ApiFunctions";
import { useSelector } from "../utilities/storage/store";
import { useDispatch } from "react-redux";

const LoginComponent: React.FC = () => {
  const dispatch = useDispatch()

  const persistedUsername = useSelector(state => state.authCredentials.username)
  const isLoggedIn = useSelector(state => state.authCredentials.loginStatus)

  const [username, setUsername] = useState(persistedUsername)
  const [password, setPassword] = useState('')

  if (isLoggedIn) return <Redirect to="/home" />;

  return (
    <View style={styles.container}>
      <StatusBar hidden />
      <Formik
        initialValues={{}}
        onSubmit={() => {
                  dispatch(loginToJellyfin(username, password));
        }}
        render={({ submitForm: handleSubmit }) => (
          <View>
            <View style={styles.loginInput}>
              <Text style={[styles.biggerText]}>Login with your user credentials:</Text>
            </View>
            <View style={styles.loginInput}>
              <Text style={styles.text}>Username:</Text>
              <View>
                <TextInput
                  style={[styles.text, styles.inputBox]} 
                  onChangeText={username => setUsername(username)} 
                  value={username}
                />
              </View>
            </View>

            <View style={styles.loginInput}>
              <Text style={styles.text}>Password:</Text>
              <View>
                <TextInput
                  secureTextEntry 
                  style={[styles.text, styles.inputBox]} 
                  onChangeText={password => setPassword(password)}
                  value={password}
                />
              </View>
            </View>

            <View style={styles.loginInput}>
              <Button onPress={handleSubmit} title='Login' />
            </View>
          </View>
        )}
      />
    </View>
  );
}


export default LoginComponent;
