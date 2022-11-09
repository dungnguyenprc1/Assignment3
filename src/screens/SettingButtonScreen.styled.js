import styled from 'styled-components/native';

export const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
  background-color: red;
  /* margin-bottom: 49px; */
`;

export const TextHeader = styled.Text`
  width: 240px;
  height: 41px;
  font-size: 35px;
  line-height: 41px;
  font-family: 'Roboto-Regular';
`;

export const TextCreate = styled.Text`
  padding-top: 15px;
  font-size: 18px;
  font-weight: 400;
  font-family: 'Roboto-Regular';
`;
export const TextResult = styled.Text`
  font-size: 16px;
  padding-top: 17px;
  margin-bottom: 10px;
  font-family: 'Roboto-Thin';
`;
export const FooterContainer = styled.View`
  flex: 0.25;
  background-color: '#F1f1f1';
  align-items: center;
`;