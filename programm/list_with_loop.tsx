import React from 'react';
import {FlatList, Text, View} from 'react-native';
import ExStyle from './styles/style';

const ListData = () => {
  const flist = [
    {
      id: 1,
      name: 'Darshil',
      email: 'abc@gmail.com',
    },
    {
      id: 2,
      name: 'Himanshu',
      email: 'abc@gmail.com',
    },
    {
      id: 3,
      name: 'Sumit',
      email: 'abc@gmail.com',
    },
    {
      id: 4,
      name: 'Ronak',
      email: 'abc@gmail.com',
    },
    {
      id: 5,
      name: 'Jenil',
      email: 'abc@gmail.com',
    },
  ];
  return (
    <View>
        <Text style={ExStyle.head}>Component loop with list</Text>
      <FlatList
        data={flist}
        renderItem={({item}) => <Userdata it={item} />}
      />
    </View>
  );
};

const Userdata = (dt: any) => {
  const item = dt.it;
  return (
    <View style={ExStyle.viewtxt}>
      <Text style={ExStyle.texttxt}>{item.name}</Text>
      <Text style={ExStyle.texttxt}>{item.email}</Text>
    </View>
  );
};

export default ListData;
