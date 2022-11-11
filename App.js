import {View, Text, SafeAreaView} from 'react-native';
import React from 'react';
import SettingButtonScreen from './src/screens/SettingButtonScreen';
import PrimaryInput from './src/components/TypeInput/PrimaryInput';

import {Provider} from 'react-redux';
import store from './src/redux/store';

export default function App() {
  return (
    <SafeAreaView style={{flex: 1}}>
      <View
        style={{
          flex: 1,
          paddingTop: 41,
        }}>
        <Provider store={store}>
          <SettingButtonScreen />
        </Provider>
      </View>
    </SafeAreaView>
  );
}
