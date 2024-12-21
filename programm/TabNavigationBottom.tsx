import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { NavigationContainer } from "@react-navigation/native"
import React from "react"
import { Text, View } from "react-native"
import Form from "./form";


const Tab=createBottomTabNavigator();
const TabNavigation =()=> {
  return (
    <View style={{backgroundColor:"white" ,flex:1}}>
        <NavigationContainer>
            <Tab.Navigator>
                <Tab.Screen name="Login" component={Login}/>
                <Tab.Screen name="SignUp" component={SignUp}/>
            </Tab.Navigator>

        </NavigationContainer>
    </View>
  )
}

const Login =()=>{
    return(
        <View style={{flex:1,justifyContent:"center",alignItems:"center"}}>
            <Text style={{color:'black' ,fontSize:35}}>
                Login Screen
            </Text>
        </View>
    )
}
const SignUp =()=>{
    return(
        <View style={{flex:1,justifyContent:"center",alignItems:"center"}}>
            <Text style={{color:'black' ,fontSize:35}}>
                SIgn Up Screen
            </Text>
        </View>
    )
}

export default TabNavigation