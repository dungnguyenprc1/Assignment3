import {View, Text, TextInput, StyleSheet} from 'react-native';
import React, {useState} from 'react';
import {
  ContainerIcon,
  ContainerInput,
  ContainerMulti,
  CoverInputMulti,
  TextAlign,
} from './PrimaryInput.styled';
import DropDownPicker from 'react-native-dropdown-picker';
import styled from 'styled-components';
import PrimaryInput from './PrimaryInput';

DropDownPicker.setListMode('SCROLLVIEW');

export default function MultiSelect({value, itemsWidthHeight, onChangeText}) {
  const [open, setOpen] = useState(false);
  const [valueWidthHeight, setValueWidthHeight] = useState('dynamic');

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
      {valueWidthHeight === 'fixed' ? (
        <PrimaryInput children="px" value={value} onChangeText={onChangeText} />
      ) : null}
    </ContainerMulti>
  );
}

const styles = StyleSheet.create({
  dropdown: {
    minHeight: 42,
    borderRadius: 0,
    borderColor: '#D9D9D9',
    marginBottom: 18,
  },
  dropDownContainerStyle: {
    borderColor: '#D9D9D9',
    width: '40%',
  },
});
