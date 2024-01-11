// import {View, Text, StyleSheet, FlatList} from 'react-native';
// import React, { useState } from 'react';
// import Styles from './Styles';

// const styles = StyleSheet.create({
//   input: {
//     borderColor: 'red',
//     borderWidth: 1,
//   },

//   box: {
//     borderColor: 'black',
//     borderWidth: 1,
//   },
// });

// interface ofboxes {
//   check: boolean;
//   color: string;
// }

// const Boxdata: ofboxes[] = [
//   {color: 'pink', check: false},
//   {color: 'orange', check: false},
//   {color: 'black', check: false},
//   {color: 'blue', check: false},
//   {color: 'yellow', check: false},
//   {color: 'purple', check: false},
//   {color: 'green', check: false},
// ];


// export default function Boxes() {



// const[boxesdata,setBoxesdata]=useState<any[]>(Boxdata)


// function boxhandler(index: any) {
  
//   const data=boxesdata.map((val,ind)=>{
  
//     if(ind===index){
//       if(val.check===false){
//          val.color="red"
//       }
  
//       return {...val,check:!val.check}
//     }
//     else{
//       return val
//     }
 
//   })



//   setBoxesdata(data)
//   }
//   console.log('====================================');
//   console.log(boxesdata);
//   console.log('====================================');

//   function func1(val: any) {
//     return (
//       <View
//      style={styles.box} >
//         <Text onPress={() => boxhandler(val.index)}>{val.item.color} </Text>
//       </View>
//     );
//   }
  
  

//   return (
//     <View>
//       <Text>Boxes</Text>
//       <FlatList data={boxesdata} renderItem={func1} />
//     </View>
//   );
// }
