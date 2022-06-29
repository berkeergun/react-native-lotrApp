import { View, Text, FlatList,Dimensions,LogBox } from 'react-native'
import React from 'react'
import styles from "./Books.style"
import Config from "react-native-config"
import Error from "../../components/Error/Error"
import Loading from "../../components/Loading/Loading"
import BookCard from '../../components/BookCard/BookCard';
import useFetch from '../../hooks/useFetch';
import LinearGradient from "react-native-linear-gradient"
import Carousel from "react-native-snap-carousel"

LogBox.ignoreLogs([
    'ViewPropTypes will be removed from React Native. Migrate to ViewPropTypes exported from \'deprecated-react-native-prop-types\'.',
    'NativeBase: The contrast ratio of',
    "[react-native-gesture-handler] Seems like you\'re using an old API with gesture components, check out new Gestures system!",
])


const Books = ({navigation}) => {
  const {data,loading,error}=useFetch(Config.API_URL+"/book")

  const handleBookSelect = (id) => {
    navigation.navigate('BookChapter', {id});
  };

  const renderBooks= ({item}) => (
  <BookCard bookItem={item} onSelect={()=>handleBookSelect(item._id)} />
  )

  if (error) {
    return <Error error={error} />;
  }

  if (loading) {
    return <Loading />;
  }
  return (
    <LinearGradient colors={['#e6b856', '#99b051']} style={styles.container}>
        <Carousel 
        data={data.docs}
        renderItem={renderBooks}

        autoplay
        loop
        
        // firstItem={0}
        sliderWidth={Dimensions.get('window').width}
        itemWidth={Dimensions.get('window').width - 75}
        itemHeight={300}
        sliderHeight={350}
        />
      
    </LinearGradient>
  )
}

export default Books