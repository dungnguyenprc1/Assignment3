import React, {useState} from 'react';
import {View} from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import {Container} from './FilterList.styled';
import {useDispatch, useSelector} from 'react-redux';
import {ADD_FILTERED} from '../../../redux/slice/listsSlice';

export default function FilterList({}) {
  const dispatch = useDispatch();

  const [value, setValue] = useState(
    useSelector(state => state.lists.filtered),
  );

  return (
    <Container>
      <View>
        <DropDownPicker
          placeholder="Filter By Properties"
          open={true}
          value={value}
          items={[
            {label: 'Text', value: 'text'},
            {label: 'Text Color', value: 'textColor'},
            {label: 'Background Color', value: 'backgroundColor'},
            {label: 'Width', value: 'buttonWidth'},
            {label: 'Height', value: 'buttonHeight'},
            {label: 'Border Width', value: 'borderWidth'},
            {label: 'Border Radius', value: 'borderRadius'},
            {label: 'Border Color', value: 'borderColor'},
          ]}
          setValue={setValue}
          theme="DARK"
          multiple={true}
          mode="BADGE"
          maxHeight={500}
          badgeDotColors={[
            '#e76f51',
            '#00b4d8',
            '#e9c46a',
            '#e76f51',
            '#8ac926',
            '#00b4d8',
            '#e9c46a',
          ]}
          onChangeValue={e => dispatch(ADD_FILTERED(e))}
        />
      </View>
    </Container>
  );
}
