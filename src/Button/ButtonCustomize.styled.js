import styled from 'styled-components/native';

export const TextCustomize = styled.Text`
  color: ${props => props.color};
  background-color: ${props => props.backGroundColor};
  width: ${props => props.width || null}px;
  height: ${props => props.height || null}px;

  /* border-radius: 50px;
  justify-content: center; */
  border-color: red;
  /* border-width: 5px; */
  overflow: hidden;
  text-align: center;
`;
