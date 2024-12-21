import React, {useState} from 'react';
import {Button, StatusBar, View} from 'react-native';
import ExStyle from './styles/style';

const StatusBarUpdate = () => {
  const [hide, setHide] = useState(false);
  const [style, setStyle] = useState('default');
  return (
    <View style={ExStyle.main1}>
      <StatusBar backgroundColor="blue" barStyle={style} hidden={hide} />
      <Button title="Toogle Status Bar" onPress={() => setHide(!hide)} />
      <Button
        title="Update Style"
        onPress={() => {
          if (style == 'default') {
            setStyle('dark-content');
          } else {
            setStyle('default');
          }
        }}
      />
    </View>
  );
};

export default StatusBarUpdate;
