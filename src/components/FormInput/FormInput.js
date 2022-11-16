import React from 'react';
import PrimaryInput from '../TypeInput/PrimaryInput';
import {Container, TextBold} from './FormInput.styled';

import BorderCustomize from '../TypeInput/BorderCustomize';
import MultiSelect from '../TypeInput/MultiSelect';

export default function FormInput({
  itemsWidthHeight,
  type,
  name,
  icon,
  placeholder,
  value,
  onChangeText,
  style,
  ...passProps
}) {
  return (
    <Container>
      <TextBold>{name}</TextBold>

      {/* {inputSwitch(type)} */}
      {type === 'primary' && (
        <PrimaryInput
          // paddingLeft
          placeholder={placeholder}
          value={value}
          onChangeText={onChangeText}
          style={style}>
          {icon}
        </PrimaryInput>
      )}
      {type === 'multi' && (
        <MultiSelect
          value={value}
          onChangeText={onChangeText}
          children="px"
          itemsWidthHeight={itemsWidthHeight}
        />
      )}
      {type === 'border' && (
        <BorderCustomize value={value} onChangeText={onChangeText} />
      )}
    </Container>
  );
}
