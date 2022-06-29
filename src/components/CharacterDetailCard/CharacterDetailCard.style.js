import {StyleSheet,Dimensions} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    margin: 5,
    borderWidth: 0,
  },
  image_container: {
    flex: 1,
    margin: 5,
    borderWidth: 0,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  image: {
    width: Dimensions.get('window').width / 1.5,
    height: Dimensions.get('window').height / 3,
    borderWidth: 0,
    resizeMode: 'cover',
    borderRadius: 20,
  },
  item_desc_container: {flex: 1, margin: 5},
  item: {
    fontFamily: 'albertus_mt1',
    color: 'black',
    fontSize: 20,
    margin: 3,
  },

  bold: {
    fontWeight: 'bold',
  },
  wikiText: {
    fontFamily: 'albertus_mt1',
    // color: '#8e5232',
    color: '#151515',
    fontSize: 20,
  },
  shadow: {
    marginBottom: 5,
    shadowColor: '#444',
    shadowOffset: {
      width: 3,
      height: 3,
    },
    shadowOpacity: 0.9,
    shadowRadius: 1,
  },
  link_button: {
    marginHorizontal: 30,
    marginVertical: 10,
    padding: 15,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#d3fa55',
    borderRadius: 10,
  },
});
