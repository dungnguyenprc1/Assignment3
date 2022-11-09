import {View, Text, ScrollView} from 'react-native';
import React from 'react';
import ButtonCustomize from '../Button/ButtonCustomize';
import Fontisto from 'react-native-vector-icons/Fontisto';

import {
  FooterContainer,
  Header,
  TextCreate,
  TextHeader,
  TextResult,
} from './SettingButtonScreen.styled';
import FormInput from '../components/FormInput/FormInput';

export default function SettingButtonScreen() {
  return (
    <View style={{flex: 1}}>
      <View style={{flex: 0.75, paddingHorizontal: 30}}>
        <ScrollView>
          <Header>
            <TextHeader>Button Setting</TextHeader>
            <TextCreate>Create</TextCreate>
          </Header>
          <View style={{marginTop: 49}}>
            <FormInput
              name="Button text"
              type="primary"
              icon={<Fontisto name="rectangle" size={18} color="red" />}
            />
            <FormInput name="Button text color" type="primary" />
            <FormInput name="123444" type="primary" />
            <FormInput name="123444" type="primary" />
            <FormInput name="123444" type="primary" />
            <FormInput name="123444" type="primary" />
            <FormInput name="123444" type="primary" />
            <FormInput name="123444" type="primary" />
            <FormInput name="123444" type="primary" />
          </View>
        </ScrollView>
      </View>

      <FooterContainer>
        <TextResult>Result</TextResult>

        <View style={{justifyContent: 'center'}}>
          <ButtonCustomize />
        </View>
      </FooterContainer>
    </View>
  );
}
