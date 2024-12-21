import React, { useState } from "react";
import { Button, Text, View } from "react-native";
import ExStyle from "./styles/style";

const ToggleComponenet =()=>{
    const [data,setdata]=useState(true)
    return(
            <View>
                <Text style={ExStyle.head}>Toggle Component</Text>
                <Button title="Toggle Button" color="green" onPress={()=>setdata(!data)}/>
                {
                data ? <OnData/>:<OffData/>
            }
            </View>
            
    )
}

const OnData =()=>{
    return(
        <View>
                <Text style={{fontSize:30, textAlign:"center",margin:20}}>Toggle Button is On</Text>
            </View>
    )
}

const OffData =()=>{
    return(
        <View>
                <Text style={{fontSize:30, textAlign:"center",margin:20}}>Toggle Button is Off</Text>
            </View>
    )
}

export default ToggleComponenet;