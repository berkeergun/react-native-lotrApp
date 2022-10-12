import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import * as Animatable from 'react-native-animatable';
import styles from './CharacterCard.style';
import DropShadow from 'react-native-drop-shadow';

const CharacterCard = ({characterItem, onSelect}) => {
  return (
    <TouchableOpacity onPress={onSelect} style={styles.container}>
      <Animatable.View animation="fadeIn" iterationCount={1} direction="alternate">
      {/* <DropShadow style={styles.shadow}> */}
      <Text style={styles.name}>{characterItem.name}</Text>
      {/* </DropShadow> */}
      </Animatable.View>
    </TouchableOpacity>
  );
};

export default CharacterCard;
