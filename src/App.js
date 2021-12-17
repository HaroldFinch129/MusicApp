import React from "react";
import {View,Text, StyleSheet, FlatList} from 'react-native';
import MusicAppCard from "./components/MusicAppCard/MusicAppCard";
import music_data from './music-data.json';
import SearchBar from "./components/MusicAppCard/SearchBar";

const App = () => { 
  const renderMusic = ({item}) => <MusicAppCard market={item}/>
  return(
    <View style={styles.container}>
      <Text style={styles.headline}>MusicApp</Text>
       <SearchBar/>
      <FlatList
      data={music_data}
      renderItem={renderMusic}
      />

    </View>
  )
}

export default App;

const styles = StyleSheet.create(
{
  container:{
    backgroundColor:'wheat',
    flex:1,
    // alignItems:'center',
    
  },
  headline:{
    color:'black',
    fontSize:30,
    fontWeight:'bold',

  },
},
);