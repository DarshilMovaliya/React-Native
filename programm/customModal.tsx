import React, {useState} from 'react';
import {Button, Text, View} from 'react-native';
import ExStyle from './styles/style';

const CustomModal = () => {
  const [show, setShow] = useState(false);
  return (
    <View style={ExStyle.main2}>
      {show ? (
        <View style={ExStyle.modalcust}>
          <View style={ExStyle.container}>
            <Text style={ExStyle.textbox}>Custome Modal</Text>
            <Button title="Close Modal" onPress={()=>setShow(false)}/>
          </View>
        </View>
      ) : null}
      <Button title="Show Modal" onPress={()=>setShow(true)}/>
    </View>
  );
};

export default CustomModal;
