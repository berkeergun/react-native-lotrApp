import { View, Text,Image,Dimensions } from 'react-native'
import React from 'react'
import { Photo } from '../MovieDetailCard/Photo'
import DropShadow from "react-native-drop-shadow";
import styles from "./MovieDetailCard.style"

const MovieDetailCard = ({movieDetailItem}) => {

  // console.log(movieDetailItem)

  return (
    <View style={{flex:1}}>
      <Image source={Photo(movieDetailItem._id)} style={styles.image} />

      <View style={styles.movie_desc_container}>

          <DropShadow style={styles.shadow}>
            <Text style={styles.title}>{movieDetailItem.name}</Text>
          </DropShadow>

          <Text style={styles.movie_text}><Text style={styles.bold}>Duration:</Text> {movieDetailItem.runtimeInMinutes} mins</Text>
          <Text style={styles.movie_text}><Text style={styles.bold}>Budget In Millions:</Text> {movieDetailItem.budgetInMillions}</Text>

          {/* <Text style={{fontFamily:"albertus_mt1"}}>Box Office Revenue In Millions: {movieDetailItem.boxOfficeRevenueInMillions}</Text> */}

          <Text style={styles.movie_text}><Text style={styles.bold}>Academy Award Nominations:</Text> {movieDetailItem.academyAwardNominations}</Text>
          <Text style={styles.movie_text}><Text style={styles.bold}>Academy Award Wins:</Text> {movieDetailItem.academyAwardWins}</Text>

          {/* <Text style={{fontFamily:"albertus_mt1"}}>Rotten Tomatoes Score: {movieDetailItem.rottenTomatoesScore}</Text> */}

      </View>
      
      
    </View>
  )
}

export default MovieDetailCard