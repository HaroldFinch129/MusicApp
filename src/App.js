import React from "react";
import {View,Text, StyleSheet, FlatList} from 'react-native';
import MusicAppCard from "./components/MusicAppCard/MusicAppCard";
import music_data from './music-data.json';
import SearchBar from "./components/MusicAppCard/SearchBar";

const App = () => { 
  const renderMusic = ({item}) => <MusicAppCard market={item}/>
  const renderSeperator = () => <View style={styles.seperator}></View>
  return(
    <View style={styles.container}>
      <Text style={styles.headline}>MusicApp</Text>
       <SearchBar/>
      <FlatList
      keyExtractor={item => item.id} 
      data={music_data}
      renderItem={renderMusic}
      ItemSeparatorComponent={renderSeperator}
      />

    </View>
  )
}

export default App;

const styles = StyleSheet.create(
{
  container:{
    // backgroundColor:'wheat',
    flex:1,
    // alignItems:'center',

    
  },
  headline:{
    // color:'#151D52',
    // fontSize:30,
    // fontWeight:'bold',

  },
  seperator:{
    borderWidth:1,
    borderColor:'#efefef',
  },
  
},
);