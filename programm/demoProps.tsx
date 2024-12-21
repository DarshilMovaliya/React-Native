import React from 'react';
import {  Text, View } from 'react-native';
import ExStyle from './styles/style';

const DemoProps = (pro :any)=>{
    return(
       <View>
        <Text style={{fontSize:35, color:'black', backgroundColor:'lightblue', margin:10, padding:20}}>
            {pro.name}
        </Text>
        <Text style={ExStyle.textbox}>
            {pro.name}
        </Text>
{/*
        <Text style={{fontSize:35}}>
             {pro.age}
        </Text> */}

       </View>
    );
};

export default DemoProps;
