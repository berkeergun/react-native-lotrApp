import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import DropShadow from 'react-native-drop-shadow';
import styles from './MovieCard.style';

const MovieCard = ({movieItem, onSelect}) => {
  if (
    movieItem._id === '5cd95395de30eff6ebccde56' ||
    movieItem._id === '5cd95395de30eff6ebccde57'
  ) {
    return null;
  }

  return (
    <>
      <DropShadow style={styles.shadow}>
        <TouchableOpacity onPress={onSelect} style={styles.container}>
          {/* <DropShadow style={styles.shadow}> */}
          <Text style={styles.name}>{movieItem.name}</Text>
          {/* </DropShadow> */}
          {/* <Text style={{fontSize:20,}}>{movieItem._id}</Text> */}
        </TouchableOpacity>
      </DropShadow>
    </>
  );
};

export default MovieCard;
