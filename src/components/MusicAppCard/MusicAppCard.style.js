import { StyleSheet,Dimensions } from "react-native";

export default StyleSheet.create({
    image:{
        height: Dimensions.get('window').height/8,
        width:Dimensions.get('window').width/4, 
        margin:10,
        backgroundColor:'yellow',       
    },
    container:{
        backgroundColor:'white',
        height: Dimensions.get('window').height/5,
        maxWidth: Dimensions.get('window').width/1,
        margin:10,
        flex:1,
        flexWrap:'nowrap',
        flexDirection:'row',
    },
    image_container:{
        margin:10,
    },
    

});