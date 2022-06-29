import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import LottieView from "lottie-react-native"
import LinearGradient from 'react-native-linear-gradient'



const Error = ({error}) => {
  return (
    <LinearGradient style={styles.container} colors={['#e6b856', '#99b051']}>
      <Text style={styles.error}>{error}</Text>
      {/* <LottieView source={require("../../../assets/lottie/19799-sword.json")} autoPlay /> */}
      <LottieView source={require("../../../assets/lottie/lf30_editor_vaxxutsq.json")} autoPlay />
    </LinearGradient>
  )
}

export default Error

const styles = StyleSheet.create({
    container:{
        flex:1,
        // backgroundColor:"#FCD63B",
        // backgroundColor:"#0076b5",
        // backgroundColor:"#3184b0",
        // backgroundColor:"#9bcfeb",
        backgroundColor:"#8e523299",
        justifyContent:"flex-start",
        alignItems:"center"
    },
    error:{
        fontSize:30,
        color:"white",
        textAlign:"center",
        fontFamily:"albertus_mt1",
        letterSpacing:1,
        marginTop:20,
    }
})