import {StyleSheet, Dimensions} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    margin: 3,
    borderWidth: 0,
    borderColor:"green",
    // backgroundColor: '#ffffff33',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
  },
  shadow: {
    shadowColor: '#444',
    shadowOffset: {
      width: 5,
      height: 5,
    },
    shadowOpacity: 0.9,
    shadowRadius: 1,
  },
  image: {
    // width: Dimensions.get('window').width / 1.75,
    // height: Dimensions.get('window').height / 5.1,
    borderWidth: 0,
    resizeMode: 'contain',
    borderRadius: 10,
    marginTop: 5,
  },
  name: {
    fontSize: 20,
    margin: 10,
    color: 'black',
    fontFamily: 'albertus_mt1',
  },
});
