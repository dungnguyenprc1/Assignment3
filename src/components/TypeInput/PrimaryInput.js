import React from 'react';
import {Text} from 'react-native';
import {ContainerInput, TextInputPrimary} from './PrimaryInput.styled';

export default function PrimaryInput({
  children,
  placeholder,
  value,
  onChangeText,
}) {
  return (
    <ContainerInput>
      <TextInputPrimary
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
      />
      <Text> {children}</Text>
    </ContainerInput>
  );
}
