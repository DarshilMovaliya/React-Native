import React from "react";
import ExStyle from "./styles/style";
import { Platform, Text, View } from "react-native";

const PlatformCheck =()=>{
    return(
        <View style={ExStyle.main1}>
            <Text style={ExStyle.textbox}>platform :  {Platform.OS}</Text>
            {
                Platform.OS=="android"?
                <View style={{backgroundColor:"red",height:150,width:150}}></View>:
                <View style={{backgroundColor:"blue",height:150,width:150}}></View>
            }
            
            <Text style={ExStyle.platformstyle}>Hello Darshil!!</Text>

            <Text style={{fontSize:20}}>{JSON.stringify(Platform)}</Text>
        </View>
    )
}

export default PlatformCheck;