import {View, Text} from 'react-native';
import React from 'react';
import {Container, TextBold, Title} from './FormInput.styled';
import PrimaryInput from '../TypeInput/PrimaryInput';
import Fontisto from 'react-native-vector-icons/Fontisto';
import MultiSelect from '../TypeInput/MultiSelect';
import BorderCustomize from '../TypeInput/BorderCustomize';

export default function FormInput({
  itemsWidthHeight,
  itemsBorder,
  type,
  name,
  icon,
  placeholder,
  value,
  onChangeText,
}) {
  // function inputSwitch(type1) {
  //   console.log('123123123123');
  //   if (!type1) {
  //     console.log('kcogi');
  //     return;
  //   }
  //   if (type1) {
  //     switch (true) {
  //       case 'primary':
  //         console('123123');
  //         return (type1 = <PrimaryInput />);
  //     }
  //   }
  // }

  return (
    <Container>
      <TextBold>{name}</TextBold>

      {/* {inputSwitch(type)} */}
      {type === 'primary' ? (
        <PrimaryInput
          placeholder={placeholder}
          value={value}
          onChangeText={onChangeText}>
          {icon}
        </PrimaryInput>
      ) : null}
      {type === 'multi' ? (
        <MultiSelect
          value={value}
          onChangeText={onChangeText}
          children="px"
          itemsWidthHeight={itemsWidthHeight}
          itemsBorder={itemsBorder}
        />
      ) : null}
      {type === 'border' ? <BorderCustomize /> : null}
    </Container>
  );
}
