import React, { useEffect, useState } from "react";
import { Button, Text, View } from "react-native";
import ExStyle from "./styles/style";
import UseE2 from "./useEffect_2";

const UseE1 =()=>{
    const [count,setcount]=useState(0);
    const [data,setdata]=useState(100);
    // useEffect(()=>{
    //     console.warn("Count is called");
    // },[count])

    // useEffect(()=>{
    //     console.warn("Data is Called");
    // },[data])
    return(
        <View>
            <Text style={ExStyle.head}>UseEffect With Life-Cycle  </Text>
            <Text style={ExStyle.textbox}>Count  : {count}</Text>
            <Text style={ExStyle.textbox}>Data : {data}</Text>
            <View style={ExStyle.btn}>
            <Button title="Update Count" onPress={()=>setcount(count+1)}/>
            </View>
            <Button title="Update Count" onPress={()=>setdata(data+1)}/>
            <UseE2 info={{count,data}}/>

        </View>
    )
}

export default UseE1;