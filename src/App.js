import React from "react";
import {View,Text, StyleSheet} from 'react-native';

const App = () => {
  return(
    <View style={styles.container}>
      <Text style={styles.headline}>MusicApp</Text>
    </View>
  )
}

export default App;

const styles = StyleSheet.create(
{
  container:{
    backgroundColor:'wheat',
    flex:1,
    alignItems:'center',
    
  },
  headline:{
    color:'black',
    fontSize:30,
    fontWeight:'bold',

  },
},
);