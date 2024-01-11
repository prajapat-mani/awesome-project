import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Button,
  Alert,
  FlatList,
  ScrollView,
} from 'react-native';
import React, {useState} from 'react';
import Status from './Status';
import Newtask from './Newtask';
import Boxes from './Boxes';

const styles = StyleSheet.create({
  input: {
    borderColor: 'red',
    borderWidth: 1,
  },

  box: {
    borderColor: 'black',
    borderWidth: 1,
  },
});

const App = () => {
  var skills = [
    'html',
    'css',
    'dbms',
    'android',
    'javascript',
    'react js',
    'react nativ',
  ];

  const [data, setData] = useState<any>('');
  const [submitdata, setSubmitdata] = useState<any[]>([]);
  const [skillsdata, setSkillsdata] = useState<any[]>(skills);

  const [selecteddata, setSelecteddata] = useState<any[]>([]);
  const [added, setAdded] = useState<any[]>([]);
  
  const handleinput = (e: any) => {
    setData(e);
  };

  const handlesubmit = () => {
    setSubmitdata([...submitdata, data]);
    // console.log(data,"kok")
    setData('')
  };

  const deleteitems = (index: number) => {
    const del = submitdata.filter((val, ind) => {
      return index !== ind;
    });

    setSubmitdata(del);
  };

  const selectitems = (ind: any) => {
    const deletedValue = skillsdata[ind];
    setSelecteddata([...selecteddata, deletedValue]);
    const sky = skillsdata.filter((val, index) => {
      return index !== ind;
    });

    setSkillsdata(sky);
  };

  const skillsfunction = (value: any) => {
    return (
      <Text>
        {value.item}
        <Button title="add" onPress={() => selectitems(value.index)} />
      </Text>
    );
  };

  const returnvalue = (index: any) => {
    const lastvalue = selecteddata[index];
    setSkillsdata([...skillsdata, lastvalue]);
    const last = selecteddata.filter((val, ind) => {
      return index !== ind;
    });
    setSelecteddata(last);
  };

  const addedskills = (value: any) => {
    return (
      <Text>
        {value.item}
        <Button title="x" onPress={() => returnvalue(value.index)} />
      </Text>
    );
  };

  const func = (value: any) => {
    // console.log(value, "kkk");

    return (
      
      <Text>
        {' '}
        {value.item}
        <Button
          title="Delete"
          onPress={() => deleteitems(value.index)}></Button>
      </Text>
    );
  };

  return (
    <ScrollView>
    
      {/* <Status /> */}

      <Text>application</Text>

      <TextInput onChangeText={handleinput} value={data} style={styles.input}></TextInput>

      <Button title="submit" onPress={handlesubmit} />

      {/* <Text>{submitdata}<Button title="delete"/> </Text> */}

      <FlatList data={submitdata} renderItem={func} />

      <View style={styles.box}>
        <Text>skills added</Text>

        <FlatList data={selecteddata} renderItem={addedskills} />
      </View>

      <View style={{borderWidth:1}} >
        <Text >select your skills</Text>
        <FlatList data={skillsdata} renderItem={skillsfunction} />
      </View>
      <Newtask/>
      <Boxes/>
    

    </ScrollView>
  );
};

export default App;
