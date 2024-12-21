import React, {useState} from 'react';
import {Button, TextInput, View} from 'react-native';
import DemoProps from './demoProps';
const State = () => {
  const [inputText, setInputText] = useState('');
  const [textToSet, setTextToSet] = useState('darshil');

  const handleInputChange = (text: any) => {
    setInputText(text);
  };

  const handleButtonClick = () => {
    setTextToSet(inputText);
  };

  return (
    <View>
      <TextInput
        value={inputText}
        onChangeText={handleInputChange}
        placeholder="Enter text"
      />
      <Button
        color="green"
        accessibilityLabel="Learn more about this purple button"
        title="Set Text"
        onPress={handleButtonClick}
      />
      <Button title="Clear Data" onPress={() => setInputText('')} />
      {/* call to demoProps page */}
      <DemoProps name={textToSet} />
    </View>
  );
};

export default State;
