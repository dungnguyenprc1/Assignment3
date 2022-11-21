import React from 'react';
import {ScrollView, TouchableOpacity, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import ButtonCustomize from '../Button/ButtonCustomize';
import FlatListCard from '../components/FlatListCard/FlatListCard';
import FormInput from '../components/FormInput/FormInput';
import useOrientation from '../hooks/useOrientation';
import {getInitialButton, SET_BUTTON} from '../redux/slice/buttonSlice';
import {ADD_LISTS} from '../redux/slice/listsSlice';
import {
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
  const propertyButton = useSelector(getInitialButton);

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
    isBorder,
    dashedGap,
  } = propertyButton;
  const orientation = useOrientation();
  const {isPortrait} = orientation;
  const handleValue = (name, values) => {
    dispatch(SET_BUTTON({name, values}));
  };

  const handleAddList = () => {
    dispatch(ADD_LISTS(propertyButton));
    // dispatch(handleReset());
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
        <View>
          <Header isPortrait={isPortrait}>
            <TextHeader>Button Settings</TextHeader>
            <TouchableOpacity onPress={handleAddList}>
              <TextCreate>Create</TextCreate>
            </TouchableOpacity>
          </Header>
        </View>
        {orientation.isPortrait ? (
          <ScrollView showsVerticalScrollIndicator={false}>
            <View>
              <FormInput
                name="Button text"
                type="primary"
                placeholder="Title Button"
                autoFocus={true}
                value={text}
                onChangeText={value => handleValue('text', value)}
              />
              <FormInput
                value={textColor}
                color={textColor}
                onChangeText={value => handleValue('textColor', value)}
                placeholder="#FFF"
                name="Button text color"
                type="primary"
              />
              <FormInput
                value={backgroundColor}
                onChangeText={value => handleValue('backgroundColor', value)}
                placeholder="#CB2E2E"
                color={backgroundColor}
                name="Background color"
                type="primary"
              />
              <FormInput
                name="Button Width"
                type="multi"
                autoFocus={true}
                value={buttonWidth}
                onChangeText={value => handleValue('buttonWidth', value)}
                itemsWidthHeight={itemsWidthHeight}
              />
              <FormInput
                name="Button Height"
                isDynamic="fixed"
                type="multi"
                autoFocus={true}
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
                  value={dashedGap}
                  onChangeText={value => handleValue('dashedGap', value)}
                  autoFocus={true}
                  name="Border Dash pattern"
                  type="primary"
                />
              )}
              <FormInput
                value={borderRadius}
                onChangeText={value => handleValue('borderRadius', value)}
                placeholder="Radius"
                name="Border Radius"
                type="primary"
                icon="px"
              />
              <FormInput
                value={borderColor}
                color={borderColor}
                onChangeText={value => handleValue('borderColor', value)}
                placeholder="#000000"
                name="Border Color"
                type="primary"
              />
            </View>
          </ScrollView>
        ) : (
          <FlatListCard />
        )}
      </Layout>

      <FooterContainer isPortrait={orientation.isPortrait}>
        <TextResult>Result</TextResult>
        <ScrollView>
          <ButtonCustomize
            title={text}
            textColor={textColor}
            buttonHeight={buttonHeight}
            backgroundColor={backgroundColor}
            buttonWidth={buttonWidth}
            borderColor={borderColor}
            borderWidth={borderWidth}
            borderRadius={borderRadius}
            borderType={borderType}
            isBorder={isBorder}
          />
        </ScrollView>
      </FooterContainer>
    </Container>
  );
}
