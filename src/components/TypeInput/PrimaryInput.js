import React from 'react';
import {Text} from 'react-native';
import {Color, ContainerInput, TextInputPrimary} from './PrimaryInput.styled';

export default function PrimaryInput({
  children,
  placeholder,
  value,
  onChangeText,
  editable,
  style,
  autoFocus,
  color,
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
        autoFocus={autoFocus}
      />
      {(color || children) && (
        <Color color={color}>
          <Text>{children}</Text>
        </Color>
      )}
    </ContainerInput>
  );
}
