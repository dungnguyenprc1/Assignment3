import styled from 'styled-components/native';

export const TextCustomize = styled.View`
  background-color: ${props => props.backGroundColor};
  width: ${({width}) => width || 0}px;
  height: ${({height}) => height || 0}px;
  border-width: ${({borderWidth}) => borderWidth || 0}px;
  border-radius: ${({borderRadius}) => borderRadius || 0}px;
  border-color: ${({borderColor}) => borderColor};
  border-style: ${({borderType}) => borderType};

  justify-content: center;
  align-items: center;
`;

export const TextProps = styled.Text`
  color: ${({textColor}) => textColor};
`;
