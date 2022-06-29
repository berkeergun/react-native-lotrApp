import { View, Text, FlatList } from 'react-native'
import React from 'react'
import useFetch from '../../hooks/useFetch'
import Config from 'react-native-config'
import ChapterCard from '../../components/ChapterCard/ChapterCard'
import Loading from '../../components/Loading/Loading'
import Error from '../../components/Error/Error'
import LinearGradient from 'react-native-linear-gradient'
import styles from "./BookChapter.style"

const BookChapter = ({route}) => {
  const {id} = route.params
  const {data,loading,error}=useFetch(Config.API_URL+`/book/${id}/chapter`)

  const renderChapter= ({item}) => (
    <ChapterCard chapterItem={item} />
  )
  
  if (error) {
    return <Error error={error} />;
  }

  // if (loading) {
  //   return <Loading />;
  // }
  return (
    <LinearGradient style={styles.container} colors={['#e6b856', '#99b051']}>
      {loading ? <Loading/> : <FlatList data={data.docs} renderItem={renderChapter} /> }
      
    </LinearGradient>
  )
}

export default BookChapter