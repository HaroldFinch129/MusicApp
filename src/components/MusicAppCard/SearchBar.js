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
    height:40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});

export default SearchBar;