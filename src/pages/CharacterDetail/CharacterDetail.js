import { View, Text, FlatList } from 'react-native'
import React from 'react'
import styles from "./CharacterDetail.style"
import useFetch from '../../hooks/useFetch'
import Config from 'react-native-config'
import CharacterDetailCard from "../../components/CharacterDetailCard/CharacterDetailCard"
import Loading from '../../components/Loading/Loading'
import Error from '../../components/Error/Error'
import LinearGradient from "react-native-linear-gradient"


const CharacterDetail = ({route}) => {
    const {id} = route.params
    const {data,loading,error}=useFetch(Config.API_URL+`/character/${id}`)

    const renderCharacterDetail= ({item}) => (
        <CharacterDetailCard characterDetailItem={item} />
      )

      if (error) {
        return <Error error={error} />;
      }
    
      if (loading) {
        return <Loading />;
      }
  
  return (
    <LinearGradient colors={['#e6b856', '#99b051']} style={styles.container}>
      <FlatList data={data.docs} renderItem={renderCharacterDetail} />
    </LinearGradient>
  )
}

export default CharacterDetail