import React, {useState} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import ExStyle from './styles/style';

const RadioButton = () => {
  const rlist = [
    {
      id: 1,
      name: 'JAVA',
    },
    {
      id: 2,
      name: 'Python',
    },
    {
      id: 3,
      name: 'C++',
    },
    {
      id: 4,
      name: 'C',
    },
    {
      id: 5,
      name: 'PHP',
    },
  ];
  const [selectradio, setselectradio] = useState(1);
  return (
    <View style={ExStyle.main1}>
      {rlist.map((item, index) => (
        <TouchableOpacity key={index} onPress={() => setselectradio(item.id)}>
          <View style={ExStyle.radio3}>
            <View style={ExStyle.radio2}>
              {selectradio === item.id ? (
                <View style={ExStyle.radiobg}></View>
              ) : null}
            </View>
            <Text style={ExStyle.radio1}>{item.name}</Text>
          </View>
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default RadioButton;
