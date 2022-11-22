import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: #fff;
  width: 100%;
`;

export const BodyPadding = styled.View`
  padding-left: 30px;
`;

export const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: ${({isPortrait}) => (isPortrait ? 49 : 0)}px;
  margin-top: 41px;
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
  font-weight: 300;
  font-family: 'Roboto-Thin';
`;
export const TextResult = styled.Text`
  font-size: 16px;
  padding-top: 17px;
  margin-bottom: 10px;
  font-family: 'Roboto-Thin';
`;
export const FooterContainer = styled.View`
  flex: ${({isPortrait}) => (isPortrait ? '0.25' : '0.45')};
  background-color: #f1f1f1;
  align-items: center;
`;

export const SearchContainer = styled.View`
  /* height: 40px; */
  /* margin: 24px 0px 16px 30px; */
  flex-direction: row;
  align-items: center;
  /* justify-content: center; */
`;

export const DisplayCard = styled.View`
  padding-bottom: 20px;
  margin-left: 16px;
  align-items: flex-start;
`;

export const BorderIcon = styled.View`
  border-width: 2px;
`;
export const Layout = styled.View`
  flex: ${({flex}) => flex};
  padding: 0 30px;
`;
