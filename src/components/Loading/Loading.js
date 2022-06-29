import { StyleSheet, View, ActivityIndicator } from 'react-native'
import React from 'react'
import LinearGradient from 'react-native-linear-gradient'
import LottieView from "lottie-react-native"

const Loading = () => {
  return (
    // <LinearGradient colors={['#06fd1a', '#0adce4']} style={styles.container}>
    <LinearGradient style={styles.container} colors={['#e6b856', '#99b051']}>
      {/* <ActivityIndicator style={styles.loading} size="large" color={"white"} /> */}
      <LottieView source={require("../../../assets/lottie/19274-lord-of-the-ring.json")} autoPlay loop  style={{transform:[{scale:1}],borderWidth:0,width:400,height:400}} resizeMode="cover" />
    </LinearGradient>
  )
}

export default Loading

const styles = StyleSheet.create({
    container:{
        flex:1,
        // backgroundColor:"#F7768F",
        // backgroundColor:"#0076b5",
        // backgroundColor:"#9bcfeb",
        // backgroundColor:"#3184b090",
        // backgroundColor:"#8e523299",
        // backgroundColor:"#bf7b56",
        justifyContent:"center",
        alignItems:"center"
    },
    loading:{
        fontSize:30,
        color:"white",
        textAlign:"center"
    }
})