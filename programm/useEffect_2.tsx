import React, { useEffect, useState } from "react";
import { Button, Text, View } from "react-native";
import ExStyle from "./styles/style";

const UseE2 =(props)=>{
    useEffect(()=>{
        console.warn("Count is called in props : "+props.info.count);
    },[props.info.count])

    useEffect(()=>{
        console.warn("Data is Called in props : "+props.info.data);
    },[props.info.data])
    return(
        <View>
            <Text style={ExStyle.head}>UseEffect With Life-Cycle  </Text>
            <Text style={{fontSize:25}}>Count  : {props.info.count}</Text>
            <Text style={{fontSize:25}}>Data : {props.info.data}</Text>

        </View>
    )
}

export default UseE2;