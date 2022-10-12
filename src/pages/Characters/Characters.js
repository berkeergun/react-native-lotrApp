import { View, Text, FlatList, TouchableOpacity, TextInput } from 'react-native'
import React,{useState} from 'react'
import styles from "./Characters.style"
import Config from "react-native-config"
import Error from "../../components/Error/Error"
import Loading from "../../components/Loading/Loading"
import CharacterCard from '../../components/CharacterCard/CharacterCard'
import useFetch from '../../hooks/useFetch';
import LinearGradient from "react-native-linear-gradient"
import Icon from "react-native-vector-icons/MaterialCommunityIcons"
import * as Animatable from 'react-native-animatable';

const Characters = ({navigation}) => {
  const char_limit=22
  const [page,setPage] = useState(1)
  const [name,setName] = useState("")
  const [currentName,setCurrentName] = useState("")
  const {data,loading,error}=useFetch(Config.API_URL+`/character?limit=${char_limit}&page=${page}&name=/${name}/i`)

  const handleCharacterSelect = async (id) => {
    await navigation.navigate('CharacterDetail', {id});
    setTimeout(() => {
      setName("")
    }, 1000);
  };

  const renderCharacter= ({item}) => (
  <CharacterCard characterItem={item} onSelect={()=>handleCharacterSelect(item._id)} />
  )

  const nextPage = () => {
    setPage(prev => 
      {if (prev >= data.pages) {
          return (prev = 1);
        } else {
          return prev + 1;
        }
      })
  }
  const prevPage = () => {
    setPage(prev => {
      if (prev <= 1) {
        return (prev = data.pages);
      } else {
        return prev - 1;
      }
    })
  }

  if (error) {
    return <Error error={error} />;
  }

  // if (loading) {
  //   return <Loading />;
  // }
  
  return (
    <LinearGradient colors={['#e6b856', '#99b051']}  style={{flex:1,}}>
      
          <Animatable.View animation="pulse" iterationCount="infinite" direction="alternate">

            <TextInput
            onEndEditing={() => setName(currentName)}
             style={styles.search} placeholder='Search Character...' placeholderTextColor="#858585" value={currentName} onChangeText={e=>setCurrentName(e)} onFocus={()=>setPage(1)} />

          </Animatable.View>

      {loading ? <Loading/> : <FlatList data={data.docs} renderItem={renderCharacter} numColumns={2} /> }

      <View style={styles.page_buttons}>

        <TouchableOpacity onPress={prevPage} style={{marginRight:20,}}>
          {/* <Icon name="arrow-left-bold-hexagon-outline" size={35} color="#fefefe" /> */}
          <Animatable.View animation="rubberBand" iterationCount="infinite" direction="alternate">
            <Icon name="arrow-projectile" size={38} color="#fff" style={{transform:[{rotate:"225deg"}]}} />
          </Animatable.View>
        </TouchableOpacity>

        <Animatable.Text animation="zoomIn" iterationCount="infinite" direction="alternate">
          <Text style={{color:"#fff",fontSize:25,fontFamily:"albertus_mt1"}}>{page}</Text>
        </Animatable.Text>

        <TouchableOpacity onPress={nextPage} style={{marginLeft:20,}}>
          {/* <Icon name="arrow-right-bold-hexagon-outline" size={35} color="#fefefe" /> */}
          <Animatable.View animation="rubberBand" iterationCount="infinite" direction="alternate">
            <Icon name="arrow-projectile" size={38} color="#fff" style={{transform:[{rotate:"45deg"}]}} />
          </Animatable.View>

        </TouchableOpacity>
        
      </View>
      
    </LinearGradient>
  )
}

export default Characters