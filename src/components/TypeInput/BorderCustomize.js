import {View, Text, StyleSheet} from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import React, {useState} from 'react';
import PrimaryInput from './PrimaryInput';
import {useDispatch, useSelector} from 'react-redux';

import {SET_BUTTON} from '../../redux/slice/buttonSlice';

DropDownPicker.setListMode('SCROLLVIEW');
export default function BorderCustomize({value, onChangeText}) {
  const dispatch = useDispatch();
  const [openFirst, setOpenFirst] = useState(false);
  const [isBorder, setIsBorder] = useState(
    useSelector(state => state.button.isBorder),
  );
  const [itemsBorder] = useState([
    {label: 'Yes', value: 'true'},
    {label: 'No', value: 'false'},
  ]);

  const [openSecond, setOpenSecond] = useState(false);

  const [borderType, setBoderType] = useState('solid');
  const [itemsTypeBorder] = useState([
    {label: 'Solid', value: 'solid'},
    {label: 'Dash', value: 'dashed'},
  ]);

  const handleData = (name, values) => {
    dispatch(SET_BUTTON({name, values}));
  };
  return (
    <View>
      <View style={{flex: 1, flexDirection: 'row'}}>
        <View style={{flex: 0.4}}>
          <DropDownPicker
            onChangeValue={() => handleData('isBorder', isBorder)}
            dropDownDirection="TOP"
            style={styles.dropdown}
            open={openFirst}
            value={isBorder}
            items={itemsBorder}
            setOpen={setOpenFirst}
            setValue={setIsBorder}
            containerStyle={styles.dropDownContainerStyle}
          />
        </View>
        {isBorder === 'true' ? (
          <View style={{flex: 0.85, flexDirection: 'row'}}>
            <DropDownPicker
              onChangeValue={() => handleData('borderType', borderType)}
              dropDownDirection="TOP"
              style={styles.dropdown}
              open={openSecond}
              value={borderType}
              items={itemsTypeBorder}
              setOpen={setOpenSecond}
              setValue={setBoderType}
              containerStyle={styles.dropDownContainerStyle}
            />
            <PrimaryInput
              children="px"
              value={value}
              onChangeText={onChangeText}
            />
          </View>
        ) : null}
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  dropdown: {
    minHeight: 42,
    marginBottom: 18,
    paddingLeft: 17,
    borderRadius: 0,
    borderColor: '#D9D9D9',
    // padding: 20,
  },
  dropDownContainerStyle: {
    borderColor: '#D9D9D9',

    flex: 1.8,
    // padding: 10,
  },
});
