import React from 'react';
import ButtonCustomize from '../../Button/ButtonCustomize';
import {
  ButtonView,
  Container,
  ContentView,
  TextPadding,
} from './CardStyle.styled';

export default function CardStyle({
  id,
  title,
  textColor,
  backgroundColor,
  width,
  height,
  borderWidth,
  borderRadius,
  borderColor,
  borderType,
  isBorder,
}) {
  return (
    <Container>
      <ButtonView>
        <ButtonCustomize
          isBorder={isBorder}
          title={title}
          textColor={textColor}
          buttonHeight={height}
          backgroundColor={backgroundColor}
          buttonWidth={width}
          borderColor={borderColor}
          borderWidth={borderWidth}
          borderRadius={borderRadius}
          borderType={borderType}
        />
      </ButtonView>
      <ContentView>
        <TextPadding>ID: {id}</TextPadding>
        <TextPadding>Name: {title}</TextPadding>
      </ContentView>
    </Container>
  );
}
