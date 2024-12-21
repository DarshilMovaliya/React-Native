import React from "react";
import { Pressable, Text, View } from "react-native";
import ExStyle from "./styles/style";

const PressableEvent =()=> {
    return(
        <View style={ExStyle.main1}>
        <Pressable
        onPress={()=> console.warn("Pressed")}
        onLongPress={()=> console.warn("Long Pressed")}
        onPressIn={()=>console.warn("Pressed In")}
        onPressOut={()=>console.warn("Pressed Out")}
        >
        <Text style={ExStyle.textbox}>Pressable</Text>
        </Pressable>
        </View>
    )
}

export default PressableEvent;