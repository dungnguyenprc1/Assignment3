import {View, Text, ScrollView} from 'react-native';
import React, {useEffect, useState} from 'react';
import ButtonCustomize from '../Button/ButtonCustomize';
import {lowerLetter} from '../helper';
import Fontisto from 'react-native-vector-icons/Fontisto';
import AsyncStorage from '@react-native-async-storage/async-storage';

import {
  FooterContainer,
  Header,
  TextCreate,
  TextHeader,
  TextResult,
} from './SettingButtonScreen.styled';
import FormInput from '../components/FormInput/FormInput';

export default function SettingButtonScreen() {
  const [propertyButton, setPropertyButton] = useState({
    text: '',
    textColor: '',
    backGroundColor: '',
    buttonWidth: 0,
    buttonHeight: 0,
    isBorder: '',
    borderType: '',
    borderWidth: 0,
    borderRadius: 0,
    borderColor: '',
  });

  useEffect(() => {
    getMyStringValue();
  }, [propertyButton.isBorder]);

  async function getMyStringValue() {
    const value = await AsyncStorage.getItem('isBorder1');

    console.log('value', value);
    setPropertyButton(prev => ({...prev, isBorder: value}));
  }

  // const getMyStringValue = async () => {
  //   try {
  //     return await AsyncStorage.getItem('isBorder1');
  //   } catch (e) {
  //     // read error
  //   }

  // };

  console.log('propertyButton.isBorder', propertyButton.isBorder);

  const [itemsWidthHeight] = useState([
    {label: 'Dynamic', value: 'dynamic'},
    {label: 'Fixed', value: 'fixed'},
  ]);

  return (
    <View style={{flex: 1}}>
      <View style={{flex: 0.75, paddingHorizontal: 30}}>
        <ScrollView style={{paddingBottom: 141}}>
          <Header>
            <TextHeader>Button Setting</TextHeader>
            <TextCreate>Create</TextCreate>
          </Header>
          <View style={{marginTop: 49}}>
            <FormInput
              name="Button text"
              type="primary"
              placeholder="Title Button"
              value={propertyButton.text}
              onChangeText={value =>
                setPropertyButton({
                  ...propertyButton,
                  text: value,
                })
              }
            />
            <FormInput
              value={propertyButton.textColor}
              onChangeText={value =>
                setPropertyButton(prev => ({
                  ...prev,
                  textColor: value,
                }))
              }
              placeholder="#CB2E2E"
              name="Button text color"
              type="primary"
              icon={
                <Fontisto
                  name="rectangle"
                  size={18}
                  color={lowerLetter(propertyButton.textColor) || '#CB2E2E'}
                />
              }
            />
            <FormInput
              value={propertyButton.backGroundColor}
              onChangeText={value =>
                setPropertyButton(prev => ({
                  ...prev,
                  backGroundColor: value,
                }))
              }
              placeholder="#CB2E2E"
              name="Background color"
              type="primary"
              icon={
                <Fontisto
                  name="rectangle"
                  size={18}
                  color={
                    lowerLetter(propertyButton.backGroundColor) || '#CB2E2E'
                  }
                />
              }
            />
            <FormInput
              name="Button Width"
              type="multi"
              value={propertyButton.buttonWidth}
              onChangeText={value =>
                setPropertyButton(prev => ({
                  ...prev,
                  buttonWidth: value,
                }))
              }
              itemsWidthHeight={itemsWidthHeight}
            />
            <FormInput
              name="Button Height"
              type="multi"
              value={propertyButton.buttonHeight}
              onChangeText={value =>
                setPropertyButton(prev => ({
                  ...prev,
                  buttonHeight: value,
                }))
              }
              itemsWidthHeight={itemsWidthHeight}
            />
            <FormInput name="Border" type="border" />
            <FormInput
              value={propertyButton.borderRadius}
              onChangeText={value =>
                setPropertyButton(prev => ({
                  ...prev,
                  borderRadius: value,
                }))
              }
              placeholder="#CB2E2E"
              name="Border Radius"
              type="primary"
            />
            <FormInput
              value={propertyButton.borderColor}
              onChangeText={value =>
                setPropertyButton(prev => ({
                  ...prev,
                  borderColor: value,
                }))
              }
              placeholder="#CB2E2E"
              name="Border Color"
              type="primary"
              icon={
                <Fontisto
                  name="rectangle"
                  size={18}
                  color={lowerLetter(propertyButton.borderColor)}
                />
              }
            />
          </View>
        </ScrollView>
      </View>

      <FooterContainer>
        <TextResult>Result</TextResult>

        <View style={{flex: 1}}>
          <ButtonCustomize
            title={propertyButton.text}
            textColor={propertyButton.textColor}
            backGroundColor={propertyButton.backGroundColor}
            width={propertyButton.buttonWidth}
            height={propertyButton.buttonHeight}
            borderRadius={propertyButton.borderRadius}
            borderColor={propertyButton.borderColor}
          />
        </View>
      </FooterContainer>
    </View>
  );
}
