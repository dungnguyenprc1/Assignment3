import React from 'react';
import {Container, TextBold} from './FormInput.styled';
import {BorderCustomize, MultiSelect, PrimaryInput} from '../TypeInput';

export default function FormInput({
  itemsWidthHeight,
  type,
  name,
  icon,
  placeholder,
  value,
  onChangeText,
  autoFocus,
  style,
}) {
  return (
    <Container>
      <TextBold>{name}</TextBold>
      {type === 'primary' && (
        <PrimaryInput
          autoFocus={autoFocus}
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
