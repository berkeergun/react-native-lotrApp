import {StyleSheet, Dimensions} from 'react-native';

export default StyleSheet.create({
  container: {flex: 1},
  image: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height / 1.6,
    resizeMode: 'cover',
    borderWidth: 0,
    borderRadius: 0,
    marginTop: 0,
  },
  movie_desc_container: {
    borderWidth: 0,
    borderColor: 'red',
    flex: 1,
    flexDirection: 'column',
    margin: 5,
  },
  title: {
    fontFamily: 'albertus_mt1',
    textAlign: 'center',
    fontSize: 20,
    color: 'black',
  },
  bold: {fontWeight: 'bold'},
  movie_text: {
    fontFamily: 'albertus_mt1',
    color: 'black',
    fontSize: 16,
  },
  shadow: {
    marginBottom: 5,
    shadowColor: '#444',
    shadowOffset: {
      width: 5,
      height: 5,
    },
    shadowOpacity: 0.9,
    shadowRadius: 1,
  },
});
