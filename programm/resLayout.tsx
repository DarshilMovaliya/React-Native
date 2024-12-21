import React, {useState} from 'react';
import {
  Alert,
  Text,
  TouchableHighlight,
  TouchableOpacity,
  View,
} from 'react-native';
import ExStyle from './styles/style';

const ResLayout = () => {
  const [selectradio, setselectradio] = useState(1);
  return (
    <View style={ExStyle.main}>
      <View style={ExStyle.box1}>
        <View style={ExStyle.main1}>
          <TouchableOpacity onPress={()=>setselectradio(1)}>
            <View style={ExStyle.radio3}>
              <View style={ExStyle.radio2}>
                {selectradio === 1 ? (
                  <View style={ExStyle.radiobg}></View>
                ) : null}
              </View>
              <Text style={ExStyle.radio1}>Radio 1</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=>setselectradio(2)}>
            <View style={ExStyle.radio3}>
              <View style={ExStyle.radio2}>
                {selectradio === 2 ? (
                  <View style={ExStyle.radiobg}></View>
                ) : null}
              </View>
              <Text style={ExStyle.radio1}>Radio 2</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
      <View style={ExStyle.box2}>
        <View style={{flex: 1, margin: 5, backgroundColor: 'white'}}>
          <View style={{flex: 1, margin: 5, backgroundColor: 'black'}}></View>
          <View style={{flex: 1, margin: 5, backgroundColor: 'black'}}></View>
        </View>
        <View
          style={{
            flex: 1,
            margin: 5,
            backgroundColor: 'white',
            justifyContent: 'center',
          }}>
          <TouchableHighlight onPress={() => console.warn("Clicked")}>
            <Text style={ExStyle.btn1}>Done</Text>
          </TouchableHighlight>
        </View>
      </View>
      <View style={ExStyle.box3}></View>
    </View>
  );
};

export default ResLayout;
