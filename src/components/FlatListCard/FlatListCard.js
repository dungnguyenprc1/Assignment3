import {View, Text, FlatList} from 'react-native';
import React from 'react';
import {DATA} from './data';

export default function FlatListCard({data}) {
  const renderItem = ({item}) => {
    return (
      <View style={{paddingLeft: 10}}>
        <Text>{item.name}</Text>
      </View>
    );
  };

  return (
    <View>
      <FlatList horizontal data={DATA} renderItem={renderItem} />
    </View>
  );
}
