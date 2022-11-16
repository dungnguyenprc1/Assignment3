import React from 'react';
import {Text} from 'react-native';
import ButtonCustomize from '../../Button/ButtonCustomize';
import {ButtonView, Container, ContentView} from './CardStyle.styled';

export default function CardStyle({
  id,
  title,
  textColor,
  backGroundColor,
  width,
  height,
  borderWidth,
  borderRadius,
  borderColor,
  borderType,
}) {
  return (
    <Container>
      <ButtonView>
        <ButtonCustomize
          title={title}
          textColor={textColor}
          height={height}
          backGroundColor={backGroundColor}
          width={width}
          borderColor={borderColor}
          borderWidth={borderWidth}
          borderRadius={borderRadius}
          borderType={borderType}
        />
      </ButtonView>
      <ContentView>
        <Text>ID: {id}</Text>
        <Text>Name: {title}</Text>
      </ContentView>
    </Container>
  );
}
