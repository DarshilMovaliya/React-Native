import React, {Component} from 'react';
import {Button, Text, TextInput, View} from 'react-native';
import ExStyle from './styles/style';
import StateProps from './Class_state_props';

class ClassComp extends Component {
  constructor() {
    super();
    this.state = {name: 'darshil'};
  }
  updateName(val: any) {
    this.setState({name: val});
  }
  render() {
    return (
      <View>
        <Text style={{fontSize: 30}}>{this.state.name}</Text>
        <TextInput
          placeholder="Enter Name"
          style={ExStyle.inputtext}
          onChangeText={text => this.updateName(text)}
          
        />

        <Button title="Pres Me" color="lightgreen" />
        <StateProps name={this.state.name} />
      </View>
    );
  }
}

export default ClassComp;
