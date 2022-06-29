import { View, Text,TouchableOpacity, Linking,Image,Dimensions } from 'react-native'
import React from 'react'
import {Photo} from "./Photo"
import styles from "./CharacterDetailCard.style"
import * as Animatable from 'react-native-animatable';
import DropShadow from "react-native-drop-shadow";


const CharacterDetailCard = ({characterDetailItem}) => {
  console.log(characterDetailItem.name , characterDetailItem._id )

    return (
    <View style={styles.container}>

      <View style={styles.image_container}>
        <DropShadow style={styles.shadow}>
          <Image source={Photo(characterDetailItem._id)} style={styles.image} />
        </DropShadow>
      </View>


        <View style={styles.item_desc_container}>

          <Text style={styles.item}><Text style={styles.bold}>Name:</Text> {!characterDetailItem.name ? "Unknown": characterDetailItem.name}</Text>
          <Text style={styles.item}><Text style={styles.bold}>Race:</Text> {!characterDetailItem.race ? "Unknown": characterDetailItem.race}</Text>
          <Text style={styles.item}><Text style={styles.bold}>Gender:</Text> {!characterDetailItem.gender ? "Unknown": characterDetailItem.gender}</Text>
          <Text style={styles.item}><Text style={styles.bold}>Realm:</Text> {!characterDetailItem.realm ? "Unknown": characterDetailItem.realm}</Text>
          <Text style={styles.item}><Text style={styles.bold}>Birth:</Text> {!characterDetailItem.birth ? "Unknown": characterDetailItem.birth}</Text>
          <Text style={styles.item}><Text style={styles.bold}>Spouse:</Text> {!characterDetailItem.spouse ? "Unknown": characterDetailItem.spouse}</Text>
          <Text style={styles.item}><Text style={styles.bold}>Death:</Text> {!characterDetailItem.death ? "Unknown": characterDetailItem.death}</Text>

          {characterDetailItem.wikiUrl && 
            <DropShadow style={styles.shadow}>

              <Animatable.View animation="pulse" iterationCount="infinite" direction="alternate">
                <TouchableOpacity onPress={() => Linking.openURL(characterDetailItem.wikiUrl)} style={styles.link_button}>
                  <DropShadow style={styles.shadow}>
                    <Text style={styles.wikiText}>Go To Lord Of The Rings Wiki</Text>
                  </DropShadow>

                </TouchableOpacity>
              </Animatable.View>
            </DropShadow>

          }
          
          {/* <Text>Link: {characterDetailItem.wikiUrl}</Text> */}

        </View>


    </View>
  )
}

export default CharacterDetailCard