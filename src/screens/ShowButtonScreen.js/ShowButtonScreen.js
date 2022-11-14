import React from 'react';
import {View, Text, FlatList} from 'react-native';
import {useSelector} from 'react-redux';
import ButtonCustomize from '../../Button/ButtonCustomize';
import {selectAllButton} from '../../redux/slice/listsSlice';

export default function ShowButtonScreen() {
  const showDemoButton = useSelector(selectAllButton);

  console.log('showDemiButton', showDemoButton);

  const renderItem = ({item}) => {
    return (
      <View style={{paddingBottom: 20, alignItems: 'center'}}>
        <ButtonCustomize
          title={item.text}
          item
          backGroundColor={item.backGroundColor}
          width={item.buttonWidth}
          height={item.buttonHeight}
          borderWidth={item.borderWidth}
          borderRadius={item.borderRadius}
          borderColor={item.borderColor}
          borderType={item.borderType}
        />
      </View>
    );
  };
  return (
    <View>
      <FlatList
        data={showDemoButton}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </View>
  );
}
