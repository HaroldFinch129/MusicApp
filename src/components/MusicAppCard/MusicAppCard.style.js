import {StyleSheet, Dimensions} from 'react-native';

export default StyleSheet.create({
  image: {
    // height: Dimensions.get('window').height / 8,
    // width: Dimensions.get('window').width / 4,
    height:100,
    width:100,
    borderRadius:50,
    // margin: 5,
    // backgroundColor: 'yellow',
  },
  title:{
    fontSize:27,
    fontWeight:'bold',
  },
  container: {
//     backgroundColor: 'white',
//     height: Dimensions.get('window').height / 5,
//     maxWidth: Dimensions.get('window').width / 1,
    // marginTop: 5,
    // marginBottom: 5,
    // flex: 1,
    padding: 10,
    // flexWrap: 'nowrap',
    flexDirection: 'row',
    // borderRadius: 10,
  },
  image_container: {
    // margin: 5,
  },
  inner_container: {
      padding:10,
      flex:1,


  },
  info_container: {
      flexDirection:'row',
      flex:1,
      alignItems:'center',  
  },
  year: {
      marginLeft:10,
      color:'grey',
      fontWeight:'bold',
      fontSize:12,
  },
  soldout_container:{
    borderWidth:1,
    borderColor:'red',
    borderRadius:5,
    padding:5,

  },
  soldout_title:{
    color:'red',
    fontSize:12,

  },
  content_container:{
      flexDirection:'row',

  },
});
