/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import 'react-native-gesture-handler';
import React from 'react';
import { Intro, Capture, Details, LocationList } from './components'

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();
const options = {
  title: '',
  headerStyle: {
    backgroundColor: '#f95800',
  },
  headerTintColor: '#fff',
  headerTitleStyle: {
    fontWeight: 'bold',
  },
}

const App: () => React$Node = () => {
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Intro"
            component={Intro}
            options={{...options}}
          />
          <Stack.Screen
            name="Capture"
            component={Capture}
            options={{...options, title: 'Capture Location'}}
          />
          <Stack.Screen
            name="Details"
            component={Details}
            options={{...options, title: 'Location Details'}}
          />
          <Stack.Screen
            name="LocationList"
            component={LocationList}
            options={{...options, title: 'Location List'}}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};

export default App;
