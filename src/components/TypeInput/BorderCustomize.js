import {View, Text, StyleSheet} from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import React, {useState} from 'react';
import PrimaryInput from './PrimaryInput';
import AsyncStorage from '@react-native-async-storage/async-storage';
// import FormInput from '../FormInput/FormInput';

DropDownPicker.setListMode('SCROLLVIEW');
export default function BorderCustomize() {
  const [openFirst, setOpenFirst] = useState(false);
  const [isBorder, setIsBorder] = useState(true);
  const [itemsBorder, setItemsBorder] = useState([
    {label: 'Yes', value: true},
    {label: 'No', value: false},
  ]);

  const [openSecond, setOpenSecond] = useState(false);

  const [typeBorder, setTypeBorder] = useState('dash');
  const [itemsTypeBorder, setItemsTypeBorder] = useState([
    {label: 'Solid', value: 'solid'},
    {label: 'Dash', value: 'dash'},
  ]);

  const handleIsBorder = async () => {
    try {
      await AsyncStorage.setItem('isBorder1', isBorder.toString());
      console.log('123', await AsyncStorage.getItem('isBorder1'));
    } catch (err) {
      console.log(err);
    }
  };
  console.log(isBorder);
  return (
    <View>
      <View style={{flex: 1, flexDirection: 'row'}}>
        <View style={{flex: 0.4}}>
          <DropDownPicker
            dropDownDirection="TOP"
            onChangeValue={handleIsBorder}
            style={styles.dropdown}
            open={openFirst}
            value={isBorder}
            items={itemsBorder}
            setOpen={setOpenFirst}
            setValue={setIsBorder}
            setItems={setItemsBorder}
            containerStyle={styles.dropDownContainerStyle}
          />
        </View>
        {isBorder ? (
          <View style={{flex: 0.85, flexDirection: 'row'}}>
            <DropDownPicker
              dropDownDirection="TOP"
              style={styles.dropdown}
              open={openSecond}
              value={typeBorder}
              items={itemsTypeBorder}
              setOpen={setOpenSecond}
              setValue={setTypeBorder}
              setItems={setItemsTypeBorder}
              containerStyle={styles.dropDownContainerStyle}
            />
            <PrimaryInput children="px" />
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
