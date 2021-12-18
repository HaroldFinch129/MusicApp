import React from "react";
import { SafeAreaView, StyleSheet, TextInput, Dimensions } from "react-native";

const SearchBar = () => {
  const [text, onChangeText] = React.useState("");
  

  return (
    <SafeAreaView>
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={text}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  input: {
    maxWidth:Dimensions.get('window').width, 
    minWidth:Dimensions.get('window').width/1.5, 
    borderRadius:10,
    height:40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    backgroundColor:'white',
    borderColor:'grey',
    
  },
});

export default SearchBar;