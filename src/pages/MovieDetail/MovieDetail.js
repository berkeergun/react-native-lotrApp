import { View, Text, FlatList } from 'react-native'
import React from 'react'
import styles from "./MovieDetail.style"
import useFetch from '../../hooks/useFetch'
import Config from 'react-native-config'
import MovieDetailCard from "../../components/MovieDetailCard/MovieDetailCard"
import Loading from '../../components/Loading/Loading'
import Error from '../../components/Error/Error'
import LinearGradient from "react-native-linear-gradient"



const MovieDetail = ({route}) => {
  const {id} = route.params
  const {data,loading,error}=useFetch(Config.API_URL+`/movie/${id}`)

  const renderMovieDetail= ({item}) => (
    <MovieDetailCard movieDetailItem={item} />
  )

  if (error) {
    return <Error error={error} />;
  }

  if (loading) {
    return <Loading />;
  }

  return (
    <LinearGradient colors={['#e6b856', '#99b051']} style={styles.container}>

      <FlatList data={data.docs} renderItem={renderMovieDetail} />

    </LinearGradient>
  )
}

export default MovieDetail