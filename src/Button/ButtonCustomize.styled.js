import styled from 'styled-components/native';

export const TextCustomize = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  align-content: center;
  justify-content: space-evenly;
  background-color: ${({backgroundColor}) => backgroundColor || 'inherit'};
  width: ${({width}) => (width ? `${width}px` : '305px')};
  height: ${({height}) => (height ? `${height}px` : '56px')};
  border-radius: ${({isBorder, borderRadius}) =>
    isBorder === 'true' ? `${borderRadius || '0'}` : '0'}px;
  border-width: ${({isBorder, borderWidth}) =>
    isBorder === 'true' ? `${borderWidth || 0}` : '0'}px;
  border-color: ${({borderColor, backgroundColor}) =>
    borderColor || backgroundColor};
  border-style: ${({borderType}) => borderType};
`;

export const TextProps = styled.Text`
  color: ${({textColor}) => textColor || '#fff'};
`;
