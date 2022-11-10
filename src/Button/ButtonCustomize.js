import {View, Text, Button, TouchableOpacity} from 'react-native';
import React from 'react';
import {lowerLetter} from '../helper';
import {TextCustomize} from './ButtonCustomize.styled';

export default function ButtonCustomize({
  title,
  textColor,
  backGroundColor,
  width,
  height,
  borderRadius,
  borderColor,
}) {
  console.log('textColor', backGroundColor);
  return (
    // <View style={{flex: 1, backgroundColor: 'red'}}>
    // <View
    //   style={{
    //     borderRadius: 10,
    //     justifyContent: 'center',
    //     // overflow: 'hidden',
    //     // backgroundColor: 'yellow',
    //   }}>
    <>
      <TextCustomize
        color={lowerLetter(textColor)}
        backGroundColor={lowerLetter(backGroundColor)}
        width={width}
        height={height}
        borderRadius={borderRadius}
        borderColor={borderColor}>
        {title}
      </TextCustomize>
    </>
    // </View>
    // </View>
  );
}
