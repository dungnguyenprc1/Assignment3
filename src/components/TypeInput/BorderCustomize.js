import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import {useDispatch, useSelector} from 'react-redux';
import PrimaryInput from './PrimaryInput';

import {SET_BUTTON} from '../../redux/slice/buttonSlice';
import {Border, Layout} from './PrimaryInput.styled';

DropDownPicker.setListMode('SCROLLVIEW');
export default function BorderCustomize({value, onChangeText}) {
  const dispatch = useDispatch();
  const [openFirst, setOpenFirst] = useState(false);
  const [isBorder, setIsBorder] = useState(
    useSelector(state => state.button.isBorder),
  );

  const [openSecond, setOpenSecond] = useState(false);

  const [borderType, setBoderType] = useState('solid');

  const handleData = (name, values) => {
    dispatch(SET_BUTTON({name, values}));
  };
  return (
    <View>
      <Layout flex={1} flexDirection="row">
        <Layout flex={0.4}>
          <DropDownPicker
            onChangeValue={() => handleData('isBorder', isBorder)}
            dropDownDirection="TOP"
            style={styles.dropdown}
            open={openFirst}
            value={isBorder}
            items={[
              {label: 'Yes', value: 'true'},
              {label: 'No', value: 'false'},
            ]}
            setOpen={setOpenFirst}
            setValue={setIsBorder}
            containerStyle={styles.dropDownContainerStyle}
            onOpen={() => setOpenSecond(false)}
          />
        </Layout>
        {isBorder === 'true' ? (
          <Border>
            <DropDownPicker
              onChangeValue={() => handleData('borderType', borderType)}
              dropDownDirection="TOP"
              style={styles.dropdown}
              open={openSecond}
              value={borderType}
              items={[
                {label: 'Solid', value: 'solid'},
                {label: 'Dash', value: 'dashed'},
              ]}
              setOpen={setOpenSecond}
              setValue={setBoderType}
              onOpen={() => setOpenFirst(false)}
              containerStyle={styles.dropDownContainerStyle}
            />
            <PrimaryInput
              children="px"
              value={value}
              onChangeText={onChangeText}
            />
          </Border>
        ) : null}
      </Layout>
    </View>
  );
}
const styles = StyleSheet.create({
  dropdown: {
    minHeight: 42,
    marginBottom: 18,
    paddingLeft: 20,
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
