import {
  View,
  ScrollView,
  TouchableOpacity,
  TextInput,
  SafeAreaView,
} from 'react-native';
import React, {useState} from 'react';
import Fontisto from 'react-native-vector-icons/Fontisto';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {useDispatch, useSelector} from 'react-redux';
import ButtonCustomize from '../Button/ButtonCustomize';
import {lowerLetter} from '../helper';
import {
  FooterContainer,
  Header,
  SearchContainer,
  TextCreate,
  TextHeader,
  TextResult,
} from './SettingButtonScreen.styled';
import FormInput from '../components/FormInput/FormInput';
import {SET_BUTTON} from '../redux/slice/buttonSlice';
import {ADD_LISTS} from '../redux/slice/listsSlice';

export default function SettingButtonScreen() {
  const dispatch = useDispatch();

  const propertyButton = useSelector(state => state.button);

  const handleValue = (name, values) => {
    dispatch(SET_BUTTON({name, values}));
  };

  const handleAddList = () => {
    dispatch(ADD_LISTS(propertyButton));
  };

  const [itemsWidthHeight] = useState([
    {label: 'Dynamic', value: 'dynamic'},
    {label: 'Fixed', value: 'fixed'},
  ]);

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#FFF'}}>
      <View style={{flex: 0.75, paddingHorizontal: 30}}>
        <ScrollView
          style={{paddingBottom: 141}}
          showsVerticalScrollIndicator={false}>
          <View>
            <Header>
              <TextHeader>Button Setting</TextHeader>
              <TouchableOpacity onPress={handleAddList}>
                <TextCreate>Create</TextCreate>
              </TouchableOpacity>
            </Header>
            <SearchContainer>
              <AntDesign
                name="search1"
                size={14}
                color="orange"
                style={{position: 'absolute', left: 4, top: 32}}
              />
              <FormInput
                type="primary"
                placeholder="Search Property Here"
                paddingLeft="4px"
              />

              <AntDesign
                name="filter"
                size={22}
                style={{paddingHorizontal: 8}}
              />
            </SearchContainer>
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
      </FooterContainer>
    </SafeAreaView>
  );
}
