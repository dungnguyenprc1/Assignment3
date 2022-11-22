import {View, Text, FlatList, TextInput, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import {DATA} from './data';
import {MultiSelect, PrimaryInput} from '../TypeInput';
import {useDispatch, useSelector} from 'react-redux';
import {getInitialButton, SET_BUTTON} from '../../redux/slice/buttonSlice';
import FormInput from '../FormInput/FormInput';

export default function FlatListCard({data}) {
  const [title, setTitle] = useState(DATA);
  const [refFlatList, setRefFlatList] = useState();
  const [name, setName] = useState();

  const dispatch = useDispatch();
  const propertyButton = useSelector(getInitialButton);

  const itemsWidthHeight = [
    {label: 'Dynamic', value: 'dynamic'},
    {label: 'Fixed', value: 'fixed'},
  ];

  const renderInput = item => {
    console.log('123', name === 'text');
    return (
      <View style={{marginTop: 45}}>
        {name === 'buttonWidth' || name === 'buttonHeight' ? (
          <MultiSelect itemsWidthHeight={itemsWidthHeight} />
        ) : (
          <PrimaryInput
            color={propertyButton[name]}
            placeholder="ABC"
            autoFocus={true}
            value={propertyButton[name]}
            onChangeText={values => dispatch(SET_BUTTON({name, values}))}
          />
        )}
      </View>
    );
  };

  const onClickItem = (item, index) => {
    // console.log(item.name);
    setName(item.value);
    const newArrData = title.map((e, index) => {
      if (item.id === e.id) {
        return {
          ...e,
          selected: true,
        };
      }
      return {
        ...e,
        selected: false,
      };
    });
    setTitle(newArrData);
  };

  const renderItem = ({item, index}) => {
    return (
      <TouchableOpacity
        style={{
          borderWidth: 1,
          marginRight: 10,
          marginTop: 10,
          height: 20,
          backgroundColor: item.selected ? 'orange' : 'white',
        }}
        onPress={() => onClickItem(item, index)}>
        <Text>{item.name}</Text>
        {/* <PrimaryInput /> */}
      </TouchableOpacity>
    );
  };
  return (
    <View>
      <FlatList
        contentContainerStyle={{height: 150}}
        horizontal
        data={title}
        ref={ref => setRefFlatList(ref)}
        renderItem={renderItem}
        ListFooterComponent={renderInput}
        ListFooterComponentStyle={{
          position: 'absolute',
          top: 20,
          left: 0,
          right: 0,
        }}
      />
    </View>
  );
}
