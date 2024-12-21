import React, {useState} from 'react';
import {Button, Modal, Text, View} from 'react-native';
import ExStyle from './styles/style';

const ModalDiloag = () => {
  const [showModal, setShowModal] = useState(false);
  return (
    <View style={ExStyle.main2}>
      <Modal transparent={true} visible={showModal} animationType="fade">
        <View style={ExStyle.modalView}>
          <View style={ExStyle.modalView1}>
            <Text style={ExStyle.textView}>Hello Darshil Movaliya</Text>
            <Button title="Close" onPress={() => setShowModal(false)} />
          </View>
        </View>
      </Modal>
      <Button title="Open Modal" onPress={() => setShowModal(true)} />
    </View>
  );
};

export default ModalDiloag;
