import React from 'react';
import {View} from 'react-native';
import {lowerLetter} from '../helper';
import {TextCustomize, TextProps} from './ButtonCustomize.styled';

export default function ButtonCustomize({
  title,
  textColor,
  backgroundColor,
  width,
  height,
  borderRadius,
  borderColor,
  borderWidth,
  borderType,
}) {
  return (
    <View>
      <TextCustomize
        backgroundColor={lowerLetter(backgroundColor)}
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
