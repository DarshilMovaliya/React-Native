import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React, {useState} from 'react';
import {Button, Text, TextInput, View} from 'react-native';
import ExStyle from './styles/style';
import Form from './form';
import FormDiaplay from './form2';

const Stack = createNativeStackNavigator();
const StackNavigationBar = () => {
  return (
    <View style={ExStyle.main1}>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{
          headerStyle:{
            backgroundColor:"skyblue"
          },
          headerTitleStyle:{
            fontSize:30
          },
          // headerTitleAlign:"center",
        }}>
          <Stack.Screen name="HomePage" component={Form} options={{
            title:"Home Page",
            headerTintColor:"blue",
            headerTitle:()=><Button title='info'/>,
            headerRight:()=><Button title='more' onPress={()=>console.warn("pressed")
            }/>
          }}/>
          <Stack.Screen name="DisplayPage" component={FormDiaplay} />
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
};

const HomePage = () => {
  return (
    <View style={ExStyle.main1}>
      <Text style={ExStyle.textbox}>Hello</Text>
    </View>
  );
};

export default StackNavigationBar;
