import styled from 'styled-components/native';
import {lowerLetter} from '../../helper';

export const ContainerInput = styled.View`
  flex: 1;
  height: 42px;
  flex-direction: row;
  align-items: center;
  border-width: 1px;
  justify-content: space-between;
  padding: 12px 18px;
  border-color: #d9d9d9;
  margin-bottom: 18px;
`;

export const ContainerMulti = styled.View`
  flex-direction: row;
`;
export const TextAlign = styled.Text`
  line-height: 38px;
`;
export const TextInputPrimary = styled.TextInput`
  padding-left: ${props => props.paddingLeft || 0}px;

  height: 40px;
  flex: 1;
`;

export const CoverInputMulti = styled.View`
  height: 42px;
  flex: 1;
  border-width: 1px;
  border-color: #d9d9d9;
  flex-direction: row;
  padding: 0 15px;
`;

export const Border = styled.View`
  flex: 0.85;
  flex-direction: row;
`;

export const Layout = styled.View`
  flex: ${props => props.flex};
  flex-direction: ${props => props.flexDirection || 'column'}; ;
`;

export const Color = styled.View`
  width: 18px;
  height: 18px;
  background-color: ${({color}) => color || '#fff'};
  border-width: ${({color}) =>
    lowerLetter(color) === '#fff' ? '2px' : '0px'}; ;
`;
