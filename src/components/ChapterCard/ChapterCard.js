import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import * as Animatable from 'react-native-animatable';
import DropShadow from "react-native-drop-shadow";
import styles from "./ChapterCard.style"


const ChapterCard = ({chapterItem}) => {
  return (
    <View style={styles.container}>
      
        <Animatable.View animation="fadeIn" iterationCount={1} direction="alternate">
          <DropShadow style={styles.shadow}>
            <Text style={styles.name}>{chapterItem.chapterName}</Text>
          </DropShadow>
        </Animatable.View>

    </View>
  )
}

export default ChapterCard