import React from 'react';
import {ScrollView, TouchableOpacity, View} from 'react-native';
import Fontisto from 'react-native-vector-icons/Fontisto';

import {useDispatch, useSelector} from 'react-redux';
import ButtonCustomize from '../Button/ButtonCustomize';
import FormInput from '../components/FormInput/FormInput';
import {lowerLetter} from '../helper';
import {SET_BUTTON} from '../redux/slice/buttonSlice';
import {ADD_LISTS} from '../redux/slice/listsSlice';
import {
  BorderIcon,
  Container,
  FooterContainer,
  Header,
  Layout,
  TextCreate,
  TextHeader,
  TextResult,
} from './SettingButtonScreen.styled';

export default function SettingButtonScreen() {
  const dispatch = useDispatch();
  const propertyButton = useSelector(state => state.button);

  const {
    text,
    textColor,
    backgroundColor,
    buttonWidth,
    buttonHeight,
    borderColor,
    borderRadius,
    borderType,
    borderWidth,
  } = propertyButton;

  const handleValue = (name, values) => {
    dispatch(SET_BUTTON({name, values}));
  };

  const handleAddList = () => {
    dispatch(ADD_LISTS(propertyButton));
    // eslint-disable-next-line no-alert
    alert('The button have been added to list');
  };

  const itemsWidthHeight = [
    {label: 'Dynamic', value: 'dynamic'},
    {label: 'Fixed', value: 'fixed'},
  ];

  return (
    <Container>
      <Layout flex={0.75}>
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
              value={text}
              onChangeText={value => handleValue('text', value)}
            />
            <FormInput
              value={textColor}
              onChangeText={value => handleValue('textColor', value)}
              placeholder="#CB2E2E"
              name="Button text color"
              type="primary"
              icon={
                lowerLetter(textColor) === '#fff' ? (
                  <BorderIcon>
                    <Fontisto name="rectangle" size={14} color="#fff" />
                  </BorderIcon>
                ) : (
                  <Fontisto
                    name="rectangle"
                    size={18}
                    color={lowerLetter(textColor) || '#CB2E2E'}
                  />
                )
              }
            />
            <FormInput
              value={backgroundColor}
              onChangeText={value => handleValue('backgroundColor', value)}
              placeholder="#CB2E2E"
              name="Background color"
              type="primary"
              icon={
                lowerLetter(backgroundColor) === '#fff' ? (
                  <BorderIcon>
                    <Fontisto name="rectangle" size={14} color="#fff" />
                  </BorderIcon>
                ) : (
                  <Fontisto
                    name="rectangle"
                    size={18}
                    color={lowerLetter(backgroundColor) || '#CB2E2E'}
                  />
                )
              }
            />
            <FormInput
              name="Button Width"
              type="multi"
              value={buttonWidth}
              onChangeText={value => handleValue('buttonWidth', value)}
              itemsWidthHeight={itemsWidthHeight}
            />
            <FormInput
              name="Button Height"
              type="multi"
              value={buttonHeight}
              onChangeText={value => handleValue('buttonHeight', value)}
              itemsWidthHeight={itemsWidthHeight}
            />
            <FormInput
              name="Border"
              type="border"
              value={borderWidth}
              onChangeText={value => handleValue('borderWidth', value)}
            />
            {borderType === 'dashed' && (
              <FormInput
                // value={borderWidth}
                // onChangeText={value => handleValue('borderWidth', value)}
                name="Border Dash pattern"
                type="primary"
              />
            )}

            <FormInput
              value={borderRadius}
              onChangeText={value => handleValue('borderRadius', value)}
              name="Border Radius"
              type="primary"
            />

            <FormInput
              value={borderColor}
              onChangeText={value => handleValue('borderColor', value)}
              placeholder="#000000"
              name="Border Color"
              type="primary"
              icon={
                lowerLetter(borderColor) === '#fff' ? (
                  <BorderIcon>
                    <Fontisto name="rectangle" size={14} color="#fff" />
                  </BorderIcon>
                ) : (
                  <Fontisto
                    name="rectangle"
                    size={18}
                    color={lowerLetter(borderColor) || '#000000'}
                  />
                )
              }
            />
          </View>
        </ScrollView>
      </Layout>

      <FooterContainer>
        <TextResult>Result</TextResult>
        <ScrollView>
          <ButtonCustomize
            title={text}
            textColor={textColor}
            backgroundColor={backgroundColor}
            width={buttonWidth}
            height={buttonHeight}
            borderWidth={borderWidth}
            borderRadius={borderRadius}
            borderColor={borderColor}
            borderType={borderType}
          />
        </ScrollView>
      </FooterContainer>
    </Container>
  );
}
