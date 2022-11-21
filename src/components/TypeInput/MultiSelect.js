import React, {useState} from 'react';
import {StyleSheet} from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import PrimaryInput from './PrimaryInput';
import {ContainerMulti} from './PrimaryInput.styled';

DropDownPicker.setListMode('SCROLLVIEW');

export default function MultiSelect({
  value,
  itemsWidthHeight,
  onChangeText,
  isDynamic,
}) {
  const [open, setOpen] = useState(false);
  const [valueWidthHeight, setValueWidthHeight] = useState(
    isDynamic || 'dynamic',
  );

  return (
    <ContainerMulti>
      <DropDownPicker
        dropDownDirection="TOP"
        style={styles.dropdown}
        open={open}
        value={valueWidthHeight}
        items={itemsWidthHeight}
        setOpen={setOpen}
        setValue={setValueWidthHeight}
        containerStyle={styles.dropDownContainerStyle}
      />
      {valueWidthHeight === 'fixed' && (
        <PrimaryInput
          children="px"
          value={value}
          onChangeText={onChangeText}
          // autoFocus={true}
        />
      )}
    </ContainerMulti>
  );
}

const styles = StyleSheet.create({
  dropdown: {
    minHeight: 42,
    borderRadius: 0,
    borderColor: '#D9D9D9',
    marginBottom: 18,
    paddingLeft: 20,
  },
  dropDownContainerStyle: {
    borderColor: '#D9D9D9',
    width: '40%',
  },
});
