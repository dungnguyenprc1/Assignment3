import styled from 'styled-components/native';

export const TextCustomize = styled.View`
  background-color: ${({backgroundColor}) => backgroundColor};
  width: auto;
  height: auto;
  width: ${({width}) => (width ? `${width}px` : 'auto')};
  height: ${({height}) => (height ? `${height}px` : 'auto')};
  border-width: ${({borderWidth}) => borderWidth || 0}px;
  border-radius: ${({borderRadius}) => borderRadius || 0}px;
  border-color: ${({borderColor}) => borderColor};
  border-style: ${({borderType}) => borderType};

  justify-content: center;
  align-items: center;
  stroke-dasharray: 100px;
`;

export const TextProps = styled.Text`
  color: ${({textColor}) => textColor};
`;
