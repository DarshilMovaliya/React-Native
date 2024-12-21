import React from "react";
import { Text, View } from "react-native";
import { WebView } from "react-native-webview";

const WebDisplay = () => {
    return (

        <WebView source={{ uri: "https://reactnative.dev/docs/libraries" }} />

    )
}

export default WebDisplay;