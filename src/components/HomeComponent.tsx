import React, { useState, useEffect } from "react";
import { View, Text } from "react-native";

import styles from "./Style";
import { getApiClient } from '../utilities/api-client';
import { useSelector } from "../utilities/storage/store";

interface HomeComponentProps {
    userId: string;
}

interface HomeComponentState {
    demoText: string;
}

const HomeComponent: React.FC = () => {

    const userId = useSelector(state => state.authCredentials.userId)
    const [demoText, setDemoText] = useState('')

    useEffect(() => {
        (async () => {
            const apiClient = getApiClient();
            let newDemoText;
            try {
                newDemoText = await apiClient.getResumableItems(userId);
                newDemoText = JSON.stringify(newDemoText);
            } catch {
                newDemoText = "NOT CONNECTED";
            }
            setDemoText(newDemoText);
        })();
    }, [userId])

        return (
          <View style={styles.container}>
            <Text style={[styles.biggerText]}>
                    DEMO-STRING (your resumable items):
              {"\n"}
              {"\n"}
              {demoText}
            </Text>
          </View>
        );
}

export default HomeComponent;
