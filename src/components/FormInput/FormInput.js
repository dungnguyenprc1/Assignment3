import {View, Text} from 'react-native';
import React from 'react';
import {Container, Title} from './FormInput.styled';
import PrimaryInput from '../TypeInput/PrimaryInput';
import Fontisto from 'react-native-vector-icons/Fontisto';

export default function FormInput({type, name, icon}) {
  // function inputSwitch(type1) {
  //   console.log('123123123123');
  //   if (!type1) {
  //     console.log('kcogi');
  //     return;
  //   }
  //   if (type1) {
  //     switch (true) {
  //       case 'primary':
  //         console('123123');
  //         return (type1 = <PrimaryInput />);
  //     }
  //   }
  // }
  console.log('icon,', icon);

  return (
    <Container>
      <Title>
        <Text>{name}</Text>
      </Title>
      {/* {inputSwitch(type)} */}
      {type === 'primary' ? (
        <PrimaryInput>
          {icon}
          {/* <Fontisto name="rectangle" size={18} color="red" /> */}
        </PrimaryInput>
      ) : null}
    </Container>
  );
}
