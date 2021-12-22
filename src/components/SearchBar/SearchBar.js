import React from "react";
import { SafeAreaView, TextInput} from "react-native";
import styles from "./SearchBar.style";

const SearchBar = (props) => {
  
  

  return (
    <SafeAreaView>
      <TextInput
        style={styles.input}
        onChangeText={props.onSearch}
      />
    </SafeAreaView>
  );
};


export default SearchBar;