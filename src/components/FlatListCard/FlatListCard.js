import {View, Text, FlatList} from 'react-native';
import React from 'react';

export default function FlatListCard({data}) {
  return (
    <>
      <FlatList data={data} />
    </>
  );
}
