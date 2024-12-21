import React, {useState} from 'react';
import {TextInput, Button, View, Text, Image} from 'react-native';
import ExStyle from './styles/style';

const Form = (props : any) => {
  const [name, setName] = useState('');
  const [pass, setPass] = useState('');
  const [email, setEmail] = useState('');
  const [dis, setDis] = useState(false);
  const clear = () => {
    setDis(false), setEmail(''), setName(''), setPass('');
  };
  return (
    <View>
      <TextInput
        placeholder="Enter Name"
        style={ExStyle.inputtext}
        value={name}
        returnKeyType={'next'}
        autoFocus={true}
        placeholderTextColor="black"
        keyboardType='name-phone-pad'
        onChangeText={text => setName(text)}
      />
      <TextInput
        placeholder="Enter Password"
        secureTextEntry={true}
        style={ExStyle.inputtext}
        returnKeyType={'next'}
        autoFocus={true}
        placeholderTextColor="black"
        onChangeText={text => setPass(text)}
        value={pass}
      />
      <TextInput
        placeholder="Enter Email"
        style={ExStyle.inputtext}
        returnKeyType={'next'}
        autoFocus={true}
        placeholderTextColor="black"
        keyboardType='email-address'
        onChangeText={text => setEmail(text)}
        value={email}
      />
      <View style={{marginBottom: 25}}>
        <Button title="Print Data" color="green" onPress={() => props.navigation.navigate("DisplayPage",{name,pass,email})} />
      </View>

      <Button title="Clear Data" color="lime" onPress={clear} />
      <Image source={require('./asset/logo_google.png')} style={{height:100, width:100}}/>

      <View>
        {dis ? (
          <>
            <Text style={ExStyle.textbox}>Name is :{name}</Text>
            <Text style={ExStyle.textbox}>Password is :{pass}</Text>
            <Text style={ExStyle.textbox}>Email is :{email}</Text>
          </>
        ) : null}
      </View>
    </View>
  );
};

export default Form;
