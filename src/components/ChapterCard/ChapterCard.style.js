import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    margin: 5,
    borderWidth: 0,
    backgroundColor: '#fefefe',
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomRightRadius: 20,
    borderBottomLeftRadius: 20,
  },
  shadow: {
    shadowColor: '#444',
    shadowOffset: {
      width: 3,
      height: 3,
    },
    shadowOpacity: 0.9,
    shadowRadius: 1,
  },
  name: {
    fontSize: 16,
    margin: 10,
    color: 'black',
    fontFamily: 'albertus_mt1',
  },
});
