import React from 'react';
import PrimaryInput from '../TypeInput/PrimaryInput';
import {Container, TextBold} from './FormInput.styled';

import BorderCustomize from '../TypeInput/BorderCustomize';
import MultiSelect from '../TypeInput/MultiSelect';

export default function FormInput({
  itemsWidthHeight,
  itemsBorder,
  type,
  name,
  icon,
  placeholder,
  value,
  onChangeText,
  ...passProps
}) {
  const props = {...passProps};
  console.log('123123111', {props});
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
          // paddingLeft
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
      {type === 'border' ? (
        <BorderCustomize value={value} onChangeText={onChangeText} />
      ) : null}
    </Container>
  );
}
