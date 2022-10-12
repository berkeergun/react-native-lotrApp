import { View, Text,TouchableOpacity,Image, } from 'react-native'
import React from 'react'
import styles from "./BookCard.style"
import DropShadow from "react-native-drop-shadow";
import * as Animatable from 'react-native-animatable';
import {Photo} from "./Photo.js"

const BookCard = ({bookItem,onSelect}) => {

  return (

      <TouchableOpacity onPress={onSelect} style={styles.container}>
        {/* <Text style={{fontSize:20,margin:10,color:"black"}}>{bookItem._id}</Text> */}
        <DropShadow style={styles.shadow}>
        { <Image source={Photo(bookItem._id)} style={styles.image} />}
        </DropShadow>
        
        {/* <DropShadow style={styles.shadow}> */}
          <Text style={styles.name}>{bookItem.name}</Text>
        {/* </DropShadow> */}

      </TouchableOpacity>
      
  )
}

export default BookCard