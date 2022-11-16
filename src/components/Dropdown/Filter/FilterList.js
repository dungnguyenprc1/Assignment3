import React, {useState} from 'react';
import DropDownPicker from 'react-native-dropdown-picker';
import {View, Text, FlatList, TouchableOpacity} from 'react-native';
import {Container} from './FilterList.styled';
import _ from 'lodash';

export default function FilterList({dataSource}) {
  const [open, setOpen] = useState(true);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    {label: 'Apple', value: 'apple'},
    {label: 'Banana', value: 'banana'},
  ]);

  const unique = [
    ...new Set(
      dataSource.map(arr => {
        return Object.keys(arr);
      }),
    ),
  ];
  let filter = _.union(...unique);

  const renderItem = ({item}) => {
    return (
      <TouchableOpacity onPress={() => alert('123')}>
        <View>
          <Text style={{marginBottom: 12, paddingLeft: 8}}>{item}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <Container>
      <View style={{alignItems: 'center', borderBottomWidth: 1}}>
        <Text>Filter</Text>
      </View>
      <View>
        <DropDownPicker
          open={open}
          value={true}
          items={items}
          setValue={setValue}
          setItems={setItems}
        />
        <FlatList
          data={filter}
          renderItem={renderItem}
          keyExtractor={item => item.id}
        />
      </View>
    </Container>
  );
}
