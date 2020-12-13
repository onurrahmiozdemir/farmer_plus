/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from './src/Screen/Home';
const Stack = createStackNavigator();
const App: () => React$Node = () => {
  return (
    <>
      <StatusBar backgroundColor="#4CAF50" barStyle="light-content" />
      <NavigationContainer>
        <Stack.Navigator headerMode="none" initialRouteName="Home">
          <Stack.Screen
            options={{headerStyle: {backgroundColor: '#4CAF50'}}}
            name="Home"
            component={HomeScreen}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};
export default App;
