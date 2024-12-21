import React from 'react';
import {Button, Text, View} from 'react-native';
import ExStyle from './styles/style';

const FormDiaplay = (props : any) => {
  const {name,pass,email}=props.route.params
  return (
    <View>
      <Text style={ExStyle.textbox}>Name is :{name}</Text>
      <Text style={ExStyle.textbox}>Password is :{pass}</Text>
      <Text style={ExStyle.textbox}>Email is :{email}</Text>
      <Button title='Back to Home Page' onPress={()=>props.navigation.navigate("HomePage")}/>
    </View>
  );
};

export default FormDiaplay;
