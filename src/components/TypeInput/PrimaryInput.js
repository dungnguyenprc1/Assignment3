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
  // console.log('props', style);
  return (
    <ContainerInput>
      <TextInputPrimary
        paddingLeft={props.paddingLeft}
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
        autoFocus={true}
        style={{...style}}
        editable={editable}
        // keyboard={'numeric'}
      />
      <Text> {children}</Text>
    </ContainerInput>
  );
}
