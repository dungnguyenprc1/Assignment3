import React from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {lowerLetter} from '../helper';
import {TextCustomize, TextProps} from './ButtonCustomize.styled';

export default function ButtonCustomize({
  title,
  textColor,
  backgroundColor,
  buttonWidth,
  buttonHeight,
  borderWidth,
  borderRadius,
  borderColor,
  borderType,
  isBorder,
}) {
  return (
    <TouchableOpacity>
      <TextCustomize
        backgroundColor={lowerLetter(backgroundColor)}
        width={buttonWidth}
        height={buttonHeight}
        borderRadius={borderRadius}
        borderColor={lowerLetter(borderColor)}
        borderWidth={borderWidth}
        borderType={borderType}
        isBorder={isBorder}>
        {borderType === 'dashed' ? null : (
          <AntDesign
            name="caretdown"
            size={12}
            style={styles.downLeft}
            color={textColor?.length === 0 ? '#fff' : textColor}
          />
        )}
        <TextProps textColor={lowerLetter(textColor)}>{title}</TextProps>
        {borderType === 'dashed' ? null : (
          <AntDesign
            name="caretdown"
            size={12}
            style={styles.downRight}
            color={textColor?.length === 0 ? '#fff' : textColor}
          />
        )}
      </TextCustomize>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  downLeft: {position: 'absolute', left: 19},
  downRight: {position: 'absolute', right: 19},
});
