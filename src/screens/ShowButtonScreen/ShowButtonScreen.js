import React, {useState} from 'react';
import {FlatList, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {useSelector} from 'react-redux';
import CardStyle from '../../components/CardStyle/CardStyle';
import FilterList from '../../components/Dropdown/Filter/FilterList';
import DropdownSearch from '../../components/Dropdown/Search/DropdownSearch';
import PrimaryInput from '../../components/TypeInput/PrimaryInput';
import {
  Container,
  DisplayCard,
  SearchContainer,
} from '../SettingButtonScreen.styled';

export default function ShowButtonScreen() {
  const [searchData, setSearchData] = useState('');
  const [isFilter, setIsFilter] = useState(true);
  const showDemoButton = useSelector(state => {
    if (!searchData) {
      return state.lists.listItems;
    }
    return state.lists.listItems.filter(item => {
      return Object.keys(item).some(key => {
        return item[key]
          .toString()
          .toLowerCase()
          .includes(searchData.toLowerCase().trim());
      });
    });
  });

  console.log('showDemiButton', showDemoButton);
  const handleChangeSearch = e => {
    setSearchData(e);
  };

  const renderItem = ({item}) => {
    return (
      <CardStyle
        title={item.text}
        textColor={item.textColor}
        backGroundColor={item.backGroundColor}
        width={item.buttonWidth}
        height={item.buttonHeight}
        borderWidth={item.borderWidth}
        borderRadius={item.borderRadius}
        borderColor={item.borderColor}
        borderType={item.borderType}
        id={item.id}
      />
    );
  };
  return (
    <Container>
      <View style={{paddingLeft: 30}}>
        <SearchContainer>
          <AntDesign
            name="search1"
            size={18}
            color="orange"
            style={styles.searchIcon}
          />
          <PrimaryInput
            style={styles.customInput}
            placeholder="Search Here"
            value={searchData}
            onChangeText={e => handleChangeSearch(e)}
          />

          <TouchableOpacity onPress={() => setIsFilter(!isFilter)}>
            <AntDesign name="filter" size={22} style={styles.filterIcon} />
          </TouchableOpacity>
        </SearchContainer>
        {searchData && (
          <DropdownSearch dataSource={showDemoButton} searched={searchData} />
        )}
        {isFilter && <FilterList dataSource={showDemoButton} />}
      </View>

      <DisplayCard>
        <FlatList
          data={showDemoButton}
          renderItem={renderItem}
          keyExtractor={item => item.id}
        />
      </DisplayCard>
      {showDemoButton.length === 0 && (
        <Text style={styles.textError}> No Button To Show</Text>
      )}
    </Container>
  );
}

const styles = StyleSheet.create({
  searchIcon: {position: 'absolute', left: 8, top: 12},
  filterIcon: {paddingHorizontal: 8, paddingBottom: 20},
  customInput: {paddingLeft: 12},
  textError: {marginLeft: 26},
});
