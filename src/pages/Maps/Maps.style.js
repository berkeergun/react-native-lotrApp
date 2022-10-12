import {StyleSheet, Dimensions} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:"#8e5232",
  },
  image: {
    flex:1,
    // width: Dimensions.get('window').height / 1,
    // height: Dimensions.get('window').width /1,

    width: Dimensions.get('window').width / 1,
    height: Dimensions.get('window').height /1,

    // borderWidth:1,
    // borderColor:"red",
    
    
    resizeMode: 'contain',
    // resizeMode: 'cover',
    // transform: [{ rotate: '90deg'}]
  },
});
