import React from 'react';
import {SafeAreaView, ScrollView, TouchableOpacity, View} from 'react-native';
import Fontisto from 'react-native-vector-icons/Fontisto';
import {useDispatch, useSelector} from 'react-redux';
import ButtonCustomize from '../Button/ButtonCustomize';
import FormInput from '../components/FormInput/FormInput';
import {lowerLetter} from '../helper';
import {SET_BUTTON} from '../redux/slice/buttonSlice';
import {ADD_LISTS} from '../redux/slice/listsSlice';
import {
  Container,
  FooterContainer,
  Header,
  TextCreate,
  TextHeader,
  TextResult,
} from './SettingButtonScreen.styled';

export default function SettingButtonScreen() {
  const dispatch = useDispatch();

  const propertyButton = useSelector(state => state.button);

  const handleValue = (name, values) => {
    dispatch(SET_BUTTON({name, values}));
  };

  const handleAddList = () => {
    dispatch(ADD_LISTS(propertyButton));
  };

  const itemsWidthHeight = [
    {label: 'Dynamic', value: 'dynamic'},
    {label: 'Fixed', value: 'fixed'},
  ];

  return (
    <Container>
      <View style={{flex: 0.75, paddingHorizontal: 30}}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View>
            <Header>
              <TextHeader>Button Settings</TextHeader>
              <TouchableOpacity onPress={handleAddList}>
                <TextCreate>Create</TextCreate>
              </TouchableOpacity>
            </Header>
          </View>
          <View>
            <FormInput
              name="Button text"
              type="primary"
              placeholder="Title Button"
              value={propertyButton.text}
              onChangeText={value => handleValue('text', value)}
            />
            <FormInput
              value={propertyButton.textColor}
              onChangeText={value => handleValue('textColor', value)}
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
              onChangeText={value => handleValue('backGroundColor', value)}
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
              onChangeText={value => handleValue('buttonWidth', value)}
              itemsWidthHeight={itemsWidthHeight}
            />
            <FormInput
              name="Button Height"
              type="multi"
              value={propertyButton.buttonHeight}
              onChangeText={value => handleValue('buttonHeight', value)}
              itemsWidthHeight={itemsWidthHeight}
            />
            <FormInput
              name="Border"
              type="border"
              value={propertyButton.borderWidth}
              onChangeText={value => handleValue('borderWidth', value)}
            />
            {propertyButton.borderType === 'dashed' && (
              <FormInput
                // value={propertyButton.borderRadius}
                // onChangeText={value => handleValue('borderRadius', value)}
                name="Border Dash pattern"
                type="primary"
              />
            )}

            <FormInput
              value={propertyButton.borderRadius}
              onChangeText={value => handleValue('borderRadius', value)}
              placeholder="#CB2E2E"
              name="Border Radius"
              type="primary"
            />

            <FormInput
              value={propertyButton.borderColor}
              onChangeText={value => handleValue('borderColor', value)}
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
        <ScrollView>
          <ButtonCustomize
            title={propertyButton.text}
            textColor={propertyButton.textColor}
            backGroundColor={propertyButton.backGroundColor}
            width={propertyButton.buttonWidth}
            height={propertyButton.buttonHeight}
            borderWidth={propertyButton.borderWidth}
            borderRadius={propertyButton.borderRadius}
            borderColor={propertyButton.borderColor}
            borderType={propertyButton.borderType}
          />
        </ScrollView>
      </FooterContainer>
    </Container>
  );
}
