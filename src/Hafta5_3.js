import { View, Text,Dimensions,StyleSheet,SafeAreaView,Image,Switch,Platform } from 'react-native'
import React, { useState } from 'react'
import Constants from "expo-constants"
import  BulbOff from "../assets/of.png"  
import BulbOn from "../assets/on.png" 

export default function Hafta5_3() {

    const [isEnable,setIsEnable] = useState(false);
    const  toggleSwitch = () => setIsEnable((prevState)=>(!prevState)) 
    
  return (
    <SafeAreaView style={styles.container}>
       
        <Image 
        fadeDuration={0}
        source={isEnable ? BulbOn : BulbOff}
        style={styles.Image}
        />

        <Switch
         trackColor={{false:"#fff", true:'#52d964'}}
         thumbColor={"#fff"}
         onValueChange={toggleSwitch}
         value={isEnable}
         style={styles.Switch}
        />

    </SafeAreaView>
  )
}

const {width,height} = Dimensions.get("window")

const styles =StyleSheet.create({
    container:{
        flex:1,
        alignItems:"center",
        justifyContent:"center",
        backgroundColor:"#e3e3e3",
        paddingTop: Constants.statusBarHeight
    },
    Image:{
        width:200,
        height:300
    },
    Switch:{
            alignSelf:"center",
            
    }
})