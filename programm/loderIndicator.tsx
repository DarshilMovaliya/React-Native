import React, {useState} from 'react';
import {ActivityIndicator, Button, View} from 'react-native';
import ExStyle from './styles/style';

const LoaderIndicator = () => {
  const [show, setshow] = useState(false);
  const displayLoader = () => {
    setshow(true);
    setTimeout(() => {
        setshow(false)
    }, 3000);
  };
  return (
    <View style={ExStyle.main1}>
      {show ? <ActivityIndicator size={60} color="skyblue" /> : null}
      <Button title="Show Loader" onPress={displayLoader} />
    </View>
  );
};

export default LoaderIndicator;
