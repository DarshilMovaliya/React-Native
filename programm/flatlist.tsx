import React from "react";
import { Text, View,FlatList } from "react-native";
import ExStyle from "./styles/style";

const FlatList1 =()=>{
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
    ]
    return(

        <View>
            <FlatList
        data={flist}
        renderItem={({item}) => <Text style={ExStyle.textbox}> Name : {item.name} </Text>}
        // keyExtractor={item => item.id}
      />
        </View>
    )
}

export default FlatList1;

