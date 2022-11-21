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
  isDynamic,
  style,

  color,
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
          style={style}
          color={color}>
          {icon}
        </PrimaryInput>
      )}
      {type === 'multi' && (
        <MultiSelect
          isDynamic={isDynamic}
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
