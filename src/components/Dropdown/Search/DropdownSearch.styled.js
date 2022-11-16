import styled from 'styled-components/native';
import {Dimensions} from 'react-native';

const screenWidth = Dimensions.get('screen').width;

export const Container = styled.View`
  /* z-index: 100; */
  position: absolute;
  border: solid 1px #d9d9d9;
  top: 41px;
  left: 30px;
  width: ${screenWidth - 68}px;
  background-color: #ccc;
`;

export const Popper = styled.View`
  padding-left: 28px;
`;
