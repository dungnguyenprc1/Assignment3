import React, {useState} from 'react';
import {FlatList, StyleSheet, Text, TouchableOpacity} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useSelector} from 'react-redux';
import CardStyle from '../../components/CardStyle/CardStyle';
import {Filter, Search} from '../../components/Dropdown';
import {PrimaryInput} from '../../components/TypeInput';
import {selectAllButton, selectAllFiltered} from '../../redux/slice/listsSlice';
import {
  BodyPadding,
  Container,
  DisplayCard,
  SearchContainer,
} from '../SettingButtonScreen.styled';

export default function ShowButtonScreen() {
  const [searchData, setSearchData] = useState('');
  const [isShowFilter, setIsShowFilter] = useState(false);

  const filteredList = useSelector(selectAllFiltered);
  const dataButton = useSelector(selectAllButton);
  const arrayButtonData = useSelector(state => {
    const dataFiltered = dataButton.filter(item => {
      return Object.keys(item).some(key => {
        return filteredList.some(key1 => {
          return key.includes(key1);
        });
      });
    });
    if (filteredList.length === 0) {
      if (!searchData) {
        return dataButton;
      }
      return dataButton.filter(item => {
        return Object.keys(item).some(key => {
          return item[key]
            .toString()
            .toLowerCase()
            .includes(searchData.toLowerCase().trim());
        });
      });
    } else {
      if (!searchData) {
        return dataFiltered;
      }
      return dataFiltered.filter(item => {
        return Object.keys(item).some(key => {
          return item[key]
            .toString()
            .toLowerCase()
            .includes(searchData.toLowerCase().trim());
        });
      });
    }
  });

  const handleChangeSearch = e => {
    setSearchData(e);
  };

  const EmptyListComponent = () => {
    return (
      <DisplayCard>
        <Text>There's No Button To Show</Text>
      </DisplayCard>
    );
  };

  const renderItem = ({item}) => {
    const {
      text,
      textColor,
      backgroundColor,
      buttonWidth,
      buttonHeight,
      borderWidth,
      borderRadius,
      borderColor,
      borderType,
      id,
    } = item;
    return (
      <CardStyle
        title={text}
        textColor={textColor}
        backgroundColor={backgroundColor}
        width={buttonWidth}
        height={buttonHeight}
        borderWidth={borderWidth}
        borderRadius={borderRadius}
        borderColor={borderColor}
        borderType={borderType}
        id={id}
      />
    );
  };
  return (
    <Container>
      <BodyPadding>
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

          <TouchableOpacity onPress={() => setIsShowFilter(!isShowFilter)}>
            <Ionicons name="options" size={22} style={styles.filterIcon} />
          </TouchableOpacity>
        </SearchContainer>
      </BodyPadding>
      {searchData && (
        <Search dataSource={arrayButtonData} searched={searchData} />
      )}
      {isShowFilter && <Filter dataSource={arrayButtonData} />}
      <DisplayCard>
        <FlatList
          data={arrayButtonData}
          renderItem={renderItem}
          keyExtractor={item => item.id}
          ListEmptyComponent={EmptyListComponent}
        />
      </DisplayCard>
    </Container>
  );
}

const styles = StyleSheet.create({
  searchIcon: {position: 'absolute', left: 8, top: 12},
  filterIcon: {paddingHorizontal: 8, paddingBottom: 20},
  customInput: {paddingLeft: 12},
  textError: {marginLeft: 26},
});
