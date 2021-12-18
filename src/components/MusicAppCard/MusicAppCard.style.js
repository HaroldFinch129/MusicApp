import { StyleSheet,Dimensions } from "react-native";

export default StyleSheet.create({
    image:{
        height: Dimensions.get('window').height/8,
        width:Dimensions.get('window').width/4, 
        margin:5,
        backgroundColor:'yellow',       
    },
    container:{
        backgroundColor:'white',
        height: Dimensions.get('window').height/5,
        maxWidth: Dimensions.get('window').width/1,
        marginTop:5,
        marginBottom:5,
        flex:1,
        flexWrap:'nowrap',
        flexDirection:'row',
        borderRadius:10,
    },
    image_container:{
        margin:5,
    },
    

});