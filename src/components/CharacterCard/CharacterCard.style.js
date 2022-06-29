import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    margin: 5,
    borderWidth: 0,
    flex: 1,
    minHeight: 40,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fefefe',
    borderRadius: 10,
    padding: 3,
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
    textAlign: 'center',
    fontSize: 18,
    color: 'black',
    fontFamily: 'albertus_mt1',
    letterSpacing: 1,
  },
});
