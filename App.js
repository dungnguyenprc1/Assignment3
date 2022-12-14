import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import React from 'react';
import SettingButtonScreen from './src/screens/SettingButtonScreen';

import {NavigationContainer} from '@react-navigation/native';
import {Provider} from 'react-redux';
import store from './src/redux/store';
import ShowButtonScreen from './src/screens/ShowButtonScreen/ShowButtonScreen';

const Tab = createBottomTabNavigator();
export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen name="Settings" component={SettingButtonScreen} />

          <Tab.Screen name="Lists" component={ShowButtonScreen} />
        </Tab.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
