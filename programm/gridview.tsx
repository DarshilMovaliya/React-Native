import React from "react";
import { Text, View,ScrollView } from "react-native";
import ExStyle from "./styles/style";

const Gridview =()=>{
    const flist=[
        {
            id:1,
            name:'Darshil',
        },
        {
            id:2,
            name:'Himanshu',
        },
        {
            id:3,
            name:'Sumit',
        },
        {
            id:4,
            name:'Ronak',
        },
        {
            id:5,
            name:'Jenil',
        },
        {
            id:1,
            name:'Darshil',
        },
        {
            id:2,
            name:'Himanshu',
        },
        {
            id:3,
            name:'Sumit',
        },
        {
            id:4,
            name:'Ronak',
        },
        {
            id:5,
            name:'Jenil',
        },
        {
            id:1,
            name:'Darshil',
        },
        {
            id:2,
            name:'Himanshu',
        },
        {
            id:3,
            name:'Sumit',
        },
        {
            id:4,
            name:'Ronak',
        },
        {
            id:5,
            name:'Jenil',
        },
        {
            id:1,
            name:'Darshil',
        },
        {
            id:2,
            name:'Himanshu',
        },
        {
            id:3,
            name:'Sumit',
        },
        {
            id:4,
            name:'Ronak',
        },
        {
            id:5,
            name:'Jenil',
        },
        {
            id:1,
            name:'Darshil',
        },
        {
            id:2,
            name:'Himanshu',
        },
        {
            id:3,
            name:'Sumit',
        },
        {
            id:4,
            name:'Ronak',
        },
        {
            id:5,
            name:'Jenil',
        },
        {
            id:5,
            name:'Jenil',
        },
        
    ]
     return(
        <View>
        <ScrollView>
        <View style={ExStyle.griddrow}>
        {
            flist.map((item) =><Text style={ExStyle.textbox}>{item.name}</Text>)

        }
        </View>
        </ScrollView>
        </View>
     )
}

export default Gridview;