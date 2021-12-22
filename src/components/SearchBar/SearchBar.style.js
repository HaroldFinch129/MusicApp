import { StyleSheet,Dimensions } from "react-native";

export default StyleSheet.create({
    
        input: {
          maxWidth:Dimensions.get('window').width, 
          minWidth:Dimensions.get('window').width/1.5, 
          borderRadius:10,
          height:40,
          margin: 5,
          borderWidth: 1,
          padding: 8,
          backgroundColor:'white',
          borderColor:'grey',
          
        },
      });
      
