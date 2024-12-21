import React, { Component } from "react";
import { Text, View } from "react-native";

class StateProps extends Component{
    render(){
        return(
            <View>
                <Text style={{fontSize:30}}>
                    {this.props.name}
                </Text>
            </View>
        )
    }
}

export default StateProps;