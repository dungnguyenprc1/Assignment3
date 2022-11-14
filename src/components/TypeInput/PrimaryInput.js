import React from 'react';
import {Text} from 'react-native';
import {ContainerInput, TextInputPrimary} from './PrimaryInput.styled';

export default function PrimaryInput({
  children,
  placeholder,
  value,
  onChangeText,
  ...props
}) {
  console.log('props', props);
  return (
    <ContainerInput>
      <TextInputPrimary
        paddingLeft={props.paddingLeft}
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
        // autoFocus={true}
        // keyboard={'numeric'}
      />
      <Text> {children}</Text>
    </ContainerInput>
  );
}
