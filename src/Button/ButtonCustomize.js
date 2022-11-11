import React from 'react';
import {lowerLetter} from '../helper';
import {TextCustomize, TextProps} from './ButtonCustomize.styled';

export default function ButtonCustomize({
  title,
  textColor,
  backGroundColor,
  width,
  height,
  borderRadius,
  borderColor,
  borderWidth,
  borderType,
}) {
  return (
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
  );
}
