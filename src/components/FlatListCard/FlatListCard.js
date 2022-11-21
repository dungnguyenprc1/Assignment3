import {View, Text, FlatList, TextInput, TouchableOpacity} from 'react-native';
import React from 'react';
import {DATA} from './data';

export default function FlatListCard({data}) {
  const renderInput = () => {
    return (
      <View style={{borderWidth: 1}}>
        <TextInput placeholder="ABC" />
      </View>
    );
  };

  const renderItem = ({item}) => {
    return (
      <TouchableOpacity style={{borderWidth: 1, marginRight: 10}}>
        <Text>{item.name}</Text>
      </TouchableOpacity>
    );
  };
  const getItemLayout = (DATA, index) => ({
    length: 1,
    offset: 1 * index,
    index,
  });

  return (
    <View>
      <FlatList
        horizontal
        data={DATA}
        renderItem={renderItem}
        getItemLayout={getItemLayout}
        // maxToRenderPerBatch={1}
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
