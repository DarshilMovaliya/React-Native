import React, { useEffect, useState } from "react";
import { Button, Text, View } from "react-native";
import ExStyle from "./styles/style";

const Unmount =()=>{
    const [show,setshow]=useState(true)
    return(
        <View>
            <Text style={ExStyle.head}>useEffect for Unmounting with timer</Text>
            <Button title="Toggle" onPress={()=>setshow(!show)}/>
            {
                show ? <DataUnmounting/>:null
            }
            
        </View>
    )
}

const DataUnmounting =()=>{
    let time=setInterval(()=>{
        console.warn("Timer Called");
        
    },2000)
    useEffect(()=>{
        return()=>clearInterval(time)
})
    return(
        <View>
            <Text style={{fontSize:20, color:"yellow"}}>UseEffect UnMounting</Text>
        </View>
    )
}

export default Unmount;