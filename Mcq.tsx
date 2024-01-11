/* eslint-disable prettier/prettier */
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  // Button,
  // Pressable,
  TouchableOpacity,
  // ScrollView,
} from 'react-native';
import React, { useEffect, useState } from 'react';
import Status from './Status';

const styles = StyleSheet.create({
  flexx: {
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: 'red',
  },
  center: {
    textAlign: 'center',
  },
  container: {
    // flex: 1,
    // backgroundColor:"red",
    flexDirection: 'column',

    // position:'absolute',
    // left:"50%",
    // top:"50%"
  },

  button: {
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 10,
    flexDirection: 'row',
    flexWrap: 'wrap',
    backgroundColor: '#DDDDDD',
    padding: 5,
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
  },
});

export default function Mcq() {
  interface dataofkbc {
    key: number;
    quetion: string;
    option: {};
    prize: any;
  }

  const mcqdata: dataofkbc[] = [
    {
      key: 1,
      prize: 5000,
      quetion:
        " Which of these React native components will be used to display the name='React Native Tutorial'",

      option: [
        { answer: 'view', check: false, correctanswer: false },
        { answer: 'text', check: false, correctanswer: true },
        { answer: 'view', check: false, correctanswer: false },
        { answer: 'view', check: false, correctanswer: false },
      ],
    },

    {
      key: 2,
      prize: 10000,
      quetion:
        " of these React native components will be used to display the name='React Native Tutorial'",
      option: [
        { answer: 'v ', check: false, correctanswer: false },
        { answer: 'text', check: false, correctanswer: true },
        { answer: 'view', check: false, correctanswer: false },
        { answer: 'view', check: false, correctanswer: false },
      ],
    },
    {
      key: 3,
      prize: 50000,
      quetion:
        " Which of these React native components will be used to display the name='React Native Tutorial'",
      option: [
        { answer: 'view', check: false, correctanswer: false },
        { answer: 'text', check: false, correctanswer: true },
        { answer: 'view', check: false, correctanswer: false },
        { answer: 'view', check: false, correctanswer: false },
      ],
    },
    {
      key: 4,
      prize: 100000,
      quetion:
        " Which of these React native components will be used to display the name='React Native Tutorial'",
      option: [
        { answer: 'view', check: false, correctanswer: false },
        { answer: 'text', check: false, correctanswer: true },
        { answer: 'view', check: false, correctanswer: false },
        { answer: 'view', check: false, correctanswer: false },
      ],
    },
    {
      key: 5,
      prize: 1000000,
      quetion:
        " Which of these React native components will be used to display the name='React Native Tutorial'",
      option: [
        { answer: 'view', check: false, correctanswer: false },
        { answer: 'text', check: false, correctanswer: true },
        { answer: 'view', check: false, correctanswer: false },
        { answer: 'view', check: false, correctanswer: false },
      ],
    },
    {
      key: 6,
      prize: 5000000,
      quetion:
        " Which of these React native components will be used to display the name='React Native Tutorial'",
      option: [
        { answer: 'view', check: false, correctanswer: false },
        { answer: 'text', check: false, correctanswer: true },
        { answer: 'view', check: false, correctanswer: false },
        { answer: 'view', check: false, correctanswer: false },
      ],
    },
    {
      key: 7,
      prize: 10000000,
      quetion:
        " Which of these React native components will be used to display the name='React Native Tutorial'",
      option: [
        { answer: 'view', check: false, correctanswer: false },
        { answer: 'text', check: false, correctanswer: true },
        { answer: 'view', check: false, correctanswer: false },
        { answer: 'view', check: false, correctanswer: false },
      ],
    },
  ];

  const [state, setState] = useState(0);
  const [mcqState, setMcqState] = useState(mcqdata);
  const [qnaState, qnasetState] = useState<any>([]);
  const [idKeeper, setIdKeeper] = useState(1);
  const [ischeck, setIsCheck] = useState<any>();
  const [prize, setPrize] = useState(0);

  useEffect(() => {
    const filteredstate = mcqState.filter((val, ind) => {
      return val.key == idKeeper;
    });
    qnasetState(filteredstate);
  }, [idKeeper]);

  const nextpage = () => {
    if (idKeeper < 7) {
      setIsCheck(false);
      setIdKeeper(idKeeper + 1);
    }
  };

  const previospage = () => {
    if (idKeeper > 1) {
      setIdKeeper(idKeeper - 1);
    }
  };

  const answers = (ind: any, correctanswer: any) => {
    setIsCheck(true);
    if (correctanswer === true) {
      setPrize(prize + qnaState[0].prize);
    }
  };

  const optionsfunc = (value: any) => {
    return (
      <TouchableOpacity
        onPress={() => answers(value.index, value.item.correctanswer)}>
        <Text
          style={{
            borderWidth: 1,
            padding: 5,
            borderRadius: 10,
            textAlign: 'center',
            marginHorizontal: 100,
            backgroundColor: '#111D64',
            color: 'white',
          }}>

        <Text
          style={
            ischeck === true &&
            (value.item.correctanswer ? { color: 'green' } : { color: 'red' })
          }>
          {value.item.answer}
          </Text>
        </Text>
      </TouchableOpacity>
    );
  };

  return (
    
    <View style={styles.container}>
      <Status/>
      <View style={{height:500}}>
        <View style={{flex:4}}>
          <Text style={{ textAlign: 'center', color: 'green', fontSize: 30 }}>
            Welcome To KBC Quiz
          </Text>
        </View>

        <View style={{}}>
          <Text style={{ color: 'red', fontSize: 15, textAlign: 'center' }}>
            Reward:-{qnaState[0]?.prize}
          </Text>
        </View>

        <View
          style={{
            flexDirection: 'row',
            borderColor: 'black',
            borderWidth: 1,
            backgroundColor: '#090126',
            borderRadius: 10,
            paddingHorizontal: 10,
            margin: 5,
          }}>
          <Text style={{ textAlign: 'center', color: 'white', fontSize: 15 }}>
            {qnaState[0]?.key}.
          </Text>
          <Text style={{ textAlign: 'center', color: 'white', fontSize: 15 }}>
            {qnaState[0]?.quetion}
          </Text>
        </View>
        <FlatList data={qnaState[0]?.option} renderItem={optionsfunc} />
       
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <TouchableOpacity
            style={{
              borderWidth: 1,
              padding: 5,
              paddingHorizontal: 20,
              borderRadius: 10,
              backgroundColor: 'blue',
            }}
            onPress={previospage}>
            <Text style={{ color: 'white' }}>Prev</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={{
              borderWidth: 1,
              padding: 5,
              paddingHorizontal: 20,
              borderRadius: 10,
              backgroundColor: 'blue',
            }}
            onPress={nextpage}>
            <Text style={{ color: 'white' }}>Next</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={{ flex: 3,backgroundColor:"green" }}></View>
    </View>
  );
}
