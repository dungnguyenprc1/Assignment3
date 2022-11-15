import React from 'react';
import {ScrollView, Text, View} from 'react-native';
import {lowerLetter} from '../helper';
import {TextCustomize, TextProps} from './ButtonCustomize.styled';

export default function ButtonCustomize({
  title = false,
  textColor = false,
  backGroundColor = false,
  width,
  height,
  borderRadius,
  borderColor,
  borderWidth,
  borderType,
}) {
  // console.log('width', width);
  return (
    <View>
      <TextCustomize
        backGroundColor={lowerLetter(backGroundColor)}
        width={width}
        height={height}
        borderRadius={borderRadius}
        borderColor={lowerLetter(borderColor)}
        borderWidth={borderWidth}
        borderType={borderType}>
        <TextProps textColor={lowerLetter(textColor)}>{title}</TextProps>
      </TextCustomize>
    </View>
  );
}
