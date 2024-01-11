import {
  View,
  Text,
  ScrollView,
  TextInput,
  Button,
  FlatList,
  SafeAreaView,
} from 'react-native';
import React from 'react';
import iphone from './Images/profile.jpeg';
import {useState} from 'react';

export default function Message() {
  const [data, setData] = useState<any>('');
  const [data2, setData2] = useState<any>('');

  const [submitdata, setSubmitdata] = useState<any[]>([]);

  const handleinput = (e: any) => {
    setData(e);
  };

  const handleinput2 = (e: any) => {
    setData2(e);
  };

  const handlesubmit = (id: number) => {
    // setSubmitdata([...submitdata, data,id]);
    setSubmitdata([...submitdata, {data: data, id: id}]);

    setData('');
  };

  const handlesubmit2 = (id2: number) => {
    setSubmitdata([...submitdata, {data: data2, id: id2}]);
    setData2('');
  };

  const finaldata = (value: any) => {
    if (value.item.id === 1) {
      return (
        <View style={{backgroundColor:"yellow", alignItems: 'flex-end'}}>
          <Text style={{color: 'red'}}>{value.item.data}</Text>
        </View>
      );
    } else {
      return (
        <View style={{ backgroundColor:"orange", justifyContent: 'center', alignItems: 'flex-start'}}>
          <Text style={{color: 'blue'}}>{value.item.data}</Text>
        </View>
      );
    }
  };
  return (
    <SafeAreaView style={{backgroundColor:""}}>

   
    <View >
      <Text>Messages</Text>
      <View>
        <View>
          <FlatList data={submitdata} renderItem={finaldata} />
        </View>

        <View>
          <TextInput
            onChangeText={handleinput}
            value={data}
            placeholder="user1"
          />
          <Button onPress={() => handlesubmit(1)} title="send" />
          <TextInput
            placeholder="user2"
            value={data2}
            onChangeText={handleinput2}
          />
          <Button onPress={() => handlesubmit2(2)} title="send" />
        </View>
      </View>
    </View>
    </SafeAreaView>
  );
}
