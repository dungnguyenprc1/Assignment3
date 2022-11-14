import {View, Text, SafeAreaView} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import React from 'react';
import SettingButtonScreen from './src/screens/SettingButtonScreen';

import {Provider} from 'react-redux';
import store from './src/redux/store';
import {NavigationContainer} from '@react-navigation/native';

import ShowButtonScreen from './src/screens/ShowButtonScreen.js/ShowButtonScreen';

const Tab = createBottomTabNavigator();
export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen name="Home" component={SettingButtonScreen} />
          <Tab.Screen name="Settings" component={ShowButtonScreen} />
        </Tab.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
