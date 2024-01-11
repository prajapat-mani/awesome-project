import React from 'react';
import {StyleSheet, View, Text, SafeAreaView} from 'react-native';
import Status from './Status';

const Dummyfile = () => {
  return (
    <SafeAreaView>
  
      <Status />

      <View style={{display: 'flex', backgroundColor:"black",flexDirection: 'column' ,flex:1}}>
        {/* <View style={{flex: 1, backgroundColor: 'blue '}}>
       
          <Text>hy</Text>
        </View>
        <View style={{flex: 4, backgroundColor: 'darkorange'}}>
          <Text>hy</Text>
        </View>
        <View style={{flex: 1, backgroundColor: 'green'}}>
          <Text>hy</Text>
        </View> */}
         <Text></Text>
        </View>
      </SafeAreaView>
      // {/* <Text>hy</Text> */}
  
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
});

export default Dummyfile;
