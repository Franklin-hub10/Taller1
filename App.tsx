import { NavigationContainer } from '@react-navigation/native';
import 'react-native-gesture-handler';
import React from 'react'
import { Text, View } from 'react-native';
import { StackNavigator } from './.expo/src/navigator/StackNavigator';



const App = () => {
  return (
    <NavigationContainer>
  <StackNavigator/>
      </NavigationContainer>
  )
}

export default App;
