import {View, Text, TextInput} from 'react-native';
import React from 'react';
import {ContainerIcon, ContainerInput} from './PrimaryInput.styled';

export default function PrimaryInput({children}) {
  return (
    <ContainerInput>
      <TextInput style={{height: 40, flex: 1}} placeholder="123" />
      {children}
    </ContainerInput>
  );
}
