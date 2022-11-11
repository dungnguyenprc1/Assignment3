import styled from 'styled-components/native';

export const TextCustomize = styled.View`
  background-color: ${props => props.backGroundColor};
  width: ${props => props.width || null}px;
  height: ${props => props.height || null}px;
  line-height: ${props => props.height || null}px;
  border-width: ${props => props.borderWidth}px;
  border-radius: ${props => props.borderRadius}px;
  border-color: ${props => props.borderColor};
  border-style: ${props => props.borderType};
  /* border-style: dashed; */

  justify-content: center;
  align-items: center;
`;

export const TextProps = styled.Text`
  color: ${props => props.textColor}; ;
`;
