import { View, Text, TouchableOpacity, FlatList} from 'react-native'
import React from 'react'
import styles from "./Movies.style"
import Config from "react-native-config"
import Error from "../../components/Error/Error"
import Loading from "../../components/Loading/Loading"
import MovieCard from "../../components/MovieCard/MovieCard"
import useFetch from '../../hooks/useFetch';
import LinearGradient from "react-native-linear-gradient"

const Movies = ({navigation}) => {
  const {data,loading,error}=useFetch(Config.API_URL+"/movie")

  let newArray=[]

  if(data.docs){
    newArray.push(data?.docs[6],data?.docs[5],data?.docs[7],data?.docs[2],data?.docs[3],data?.docs[4])
  }

  // console.log(newArray)
  
  const handleMovieSelect=(id) => {
    navigation.navigate('MovieDetail',{id})
  }

  const renderMovie = ({item}) => {
    return <MovieCard movieItem={item} onSelect={()=>handleMovieSelect(item._id)} />
  }

  if (error) {
    return <Error error={error} />;
  }

  if (loading) {
    return <Loading />;
  }
  
  return (
    // <LinearGradient colors={['#8e5232', '#e6b856', '#99b051']} style={styles.container}>
    <LinearGradient colors={['#e6b856', '#99b051']} style={styles.container}>
      <View>
        {/* <FlatList data={data.docs} renderItem={renderMovie}  /> */}
        <FlatList data={newArray} renderItem={renderMovie}  />
      </View>
    </LinearGradient>
  )
}

export default Movies