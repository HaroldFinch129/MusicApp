import React, {useState} from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';
import MusicAppCard from './components/MusicAppCard/MusicAppCard';
import music_data from './music-data.json';
import SearchBar from './components/SearchBar/SearchBar';

const App = () => {
  const [list, setList] = useState(music_data);

  const renderMusic = ({item}) => <MusicAppCard market={item} />;
  const renderSeperator = () => <View style={styles.seperator}></View>;
  const handleSearch = text => {
    const filteredList = music_data.filter(market => {
      const searchedText = text.toLowerCase();
      const currentTitle = market.title.toLowerCase();
      return currentTitle.indexOf(searchedText) > -1;
    });
    setList(filteredList);
    console.log(filteredList);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.headline}>MusicApp</Text>
      <SearchBar onSearch={handleSearch} />
      <FlatList
        keyExtractor={item => item.id}
        data={list}
        renderItem={renderMusic}
        ItemSeparatorComponent={renderSeperator}
      />
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    // backgroundColor:'wheat',
    flex: 1,
  },
  headline: {
    color: '#151D52',
    fontSize: 30,
    fontWeight: 'bold',
  },
  seperator: {
    borderWidth: 1,
    borderColor: '#efefef',
  },
});
