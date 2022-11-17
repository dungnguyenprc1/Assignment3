import React from 'react';
import {Text} from 'react-native';
import {ContainerInput, TextInputPrimary} from './PrimaryInput.styled';

export default function PrimaryInput({
  children,
  placeholder,
  value,
  onChangeText,
  editable,
  style,
  ...props
}) {
  return (
    <ContainerInput>
      <TextInputPrimary
        paddingLeft={props.paddingLeft}
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
        style={{...style}}
        editable={editable}
      />
      <Text> {children}</Text>
    </ContainerInput>
  );
}
