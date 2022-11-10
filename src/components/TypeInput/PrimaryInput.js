import {View, Text, TextInput} from 'react-native';
import React from 'react';
import {ContainerIcon, ContainerInput} from './PrimaryInput.styled';

export default function PrimaryInput({
  children,
  placeholder,
  value,
  onChangeText,
}) {
  return (
    <ContainerInput>
      <TextInput
        style={{height: 40, flex: 1}}
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
      />
      <Text> {children}</Text>
    </ContainerInput>
  );
}
