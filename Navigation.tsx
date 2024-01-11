import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Newtask from './Newtask';
import Boxes from './Boxes';

const stack= createNativeStackNavigator();

export default function NavigationTask() {
  return (
    <NavigationContainer>

        <stack.Navigator>
            <stack.Screen name='newtask' component={Newtask}/>
            <stack.Screen name='Boxes' component={Boxes} />
        </stack.Navigator>
    </NavigationContainer>
  )
}